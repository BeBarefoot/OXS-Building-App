<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="timeSpan">{{datenow}}</div>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav navbar-nav">
          <li class="navbar-left">
            <router-link to="/" class="nav-link">Tenents</router-link>
          </li>
          <li class="navbar-mid">
            <router-link to="/create" class="nav-link">Add Tenet</router-link>
          </li>
     

          <li class="navbar-right">
            <a @click="logOut" class="nav-link logout">Log Out</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props:["datenow"],
  methods: {
    logOut() {
      this.$emit("logout");
    }
  }
};
</script>

<style >

.navbar-right {
  color: red;
  position: absolute;
  right: 0;
}
.logout {
  color: rgb(228, 114, 114) !important;
}
.logout:hover {
  color: rgb(248, 12, 12) !important;
  cursor: pointer;
}

.timeSpan {
  position: absolute;
  left: 46%;
  color: whitesmoke;
  text-align: center;
}
</style>
