<template>
  <div class="jumbotron-fluid">
    <div class="row justify-content-center">
      <img
        :src="logo"
        class="logo rounded-circle"
      />
    </div>
    <div class="row justify-content-center mt-3">
      <h4>{{title}}</h4>
    </div>
    <div class="row justify-content-center mt-3">
      <div class="col-4 loginform pt-3 pb-3">
        <form @submit.prevent="submit">
          <!-- Main content -->
          <slot />
          <div class="form-row">
            <!-- Action buttons -->
            <slot name="actions" />
          </div>
          <div
            class="form-row text-red"
            v-if="error"
          >{{ error }}</div>
          <transition name="fade">
            <!-- Expanding over the form -->
            <Loading
              v-if="busy"
              class="overlay"
            />
          </transition>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      error: null,
      busy: false
    }
  },
  props: {
    logo: { type: String },
    title: {
      type: String,
      required: true
    },
    operation: {
      type: Function,
      required: true
    },
    valid: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    async submit () {
      if (this.valid && !this.busy) {
        this.error = null
        this.busy = true
        try {
          await this.operation()
        } catch (e) {
          this.error = e.message
        }
        this.busy = false
      }
    }
  }
}
</script>
