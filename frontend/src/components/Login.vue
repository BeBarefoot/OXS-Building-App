<template>
  <div class="login">
    <form @submit.prevent="loginSubmit">
      <input type="text" placeholder="User name" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <button type="submit">Login</button>
    </form>
    <span>user: yambarak</span>
    <br>
    <span>pass:yam123</span>
  </div>
</template>

<script>
import tenentService from "../services/tenentService"

export default {
  name: "Login",
  data() {
    return {
      isLoggedIn: false,
      email: "",
      password: ""
    }
  },
  methods: {
    loginSubmit() {
      tenentService
        .loginUser({ email: this.email, password: this.password })
        .then(res => {
          tenentService.setToken(res.data.token)
          this.$emit("loggedIn", this.email)
          this.email = ""
          this.password = ""
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created() {
    this.isLoggedIn = false
  }
}
</script>

<style scoped>
.login {
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 5rem;
  padding: 1.5rem;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
}

form {
  display: flex;
  flex-flow: column;
}
form:not(:last-child) {
  margin-bottom: 1rem;
}
input {
  padding: 0.5rem;
}
button {
  padding: 0.5rem;
  background-color: lightgray;
  border: 1px solid gray;
  border-radius: 3px;
  cursor: pointer;
}
button:hover {
  background-color: lightslategray;
}
</style>


