<template>
  <div>
    <div v-if="!userLoggedIn">
      <login @loggedIn="isLoggedIn"></login>
    </div>
    <div v-else>
      <nav-bar :datenow="datenow" @logout="isLoggedOut"></nav-bar>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login.vue"
import moment from "moment"
import NavBar from "@/components/NavBar.vue"

export default {
  data() {
    return {
      userLoggedIn: false,
      datenow: ""
    }
  },
  methods: {
    isLoggedIn(name) {
      this.userLoggedIn = true
      console.log(name, " Logged in at ", this.datenow)
    },
    isLoggedOut(name) {
      console.log(name, " Logged out at ", this.datenow)
      this.userLoggedIn = false
    },
    time() {
      this.datenow = moment().format("LTS")
      setTimeout(this.time, 1000)
    }
  },
  created() {
    this.time()
  },
  components: {
    Login,
    NavBar
  }
}
</script>

<style>

</style>
