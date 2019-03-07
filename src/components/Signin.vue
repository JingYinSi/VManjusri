<template>
    <v-btn flat large icon @click="openGithubSignin">
        <v-icon>account_box</v-icon>
        登录
    </v-btn>
</template>

<script>
import {
  mapActions
} from 'vuex'
export default {
  methods: { ...mapActions(['login', 'logout']),
    openGithubSignin () {
      const url = 'http://localhost:8089/api/auth/github'
      const name = 'github_login'
      const specs = 'width=1,height=1'
      window.open(url, name, specs)
    },
    handleMessage ({
      data,
      origin
    }) {
      if (origin !== 'http://localhost:8089') {
        return
      }
      if (data === 'success') {
        this.login()
      }
    }
  },
  mounted () {
    window.addEventListener('message', this.handleMessage)
  }
}
</script>
