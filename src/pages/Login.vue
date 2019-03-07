<template>
  <div class="jumbotron-fluid">
    <div class="row justify-content-center">
      <img
        src="/static/img/jsmetta.jpg"
        class="logo rounded-circle"
      />
    </div>
    <div class="row justify-content-center mt-3">
      <h4>JSMetta Cross</h4>
    </div>
    <div class="row justify-content-center mt-3">
      <div class="col-4 loginform pt-3 pb-3">
        <form @submit.prevent="handleLogin">

          <div class="form-row">
            <div class="form-group col-12">
              <label for="userName">用户名：</label>
              <input
                type="text"
                id="userName"
                class="form-control"
                placeholder="User name"
                v-model="username"
                required
                autofocus
              >
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-12">
              <label for="password">密码：</label>
              <input
                type="password"
                id="password"
                class="form-control"
                v-model="password"
                placeholder="Password"
                required
              >
            </div>
          </div>
          <div class="checkbox">
            <label>
              <input
                type="checkbox"
                value="remember-me"
              > 记住我
            </label>
          </div>
          <button
            class="btn btn-success active btn-block"
            type="submit"
          >登录</button>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login', 'logout']),

    async handleLogin () {
      await this.login({username: this.username, password: this.password})
    },
    async handleLogout () {
      this.logout()
    },
    async isLoggedIn () {
      // return isLoggedIn();
    }
  }
}
</script>

<style>
.main-area {
  padding: 5rem;
}
.logo {
  height: 70px;
  width: 70px;
}
.loginform {
  border: 1px solid;
  border-color: rgb(231, 231, 231);
  background-color: white;
}
</style>
