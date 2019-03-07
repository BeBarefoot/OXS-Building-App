<template>
  <section>
<h2> View Tenent</h2>
    <h4>Name : {{tenent.name}}</h4>
    <div>Address: {{tenent.address}}</div>
    <div>Phone Number : {{tenent.phone}}</div>
    <div>Debt Amount : {{tenent.debt}}</div>
      <router-link to="/"><button type="text" class="back-btn btn btn-primary">Back</button></router-link>
  </section>
</template>

<script>
import tenentService from "../services/tenentService";
export default {
  data() {
    return {
      tenent: {}
    };
  },
  created() {
    tenentService.editTenent(this.$route.params.id).then(response => {
      this.tenent = response.data;
    });
  },

};
</script>

<style>
body {
    text-align: center
}
h2 {
    text-decoration: underline
}
</style>
