<template>
  <div>
    <h1 class="header">Add Tenent</h1>
    <edit-component :button="button" :tenent="tenent" @createTenent="addTenent(tenent)"></edit-component>
  </div>
</template>

<script>
import EditComponent from "../components/EditComponent";
import tenentService from "../services/tenentService";

export default {
  data() {
    return {
      button: "Add",
      tenent: {}
    };
  },
  methods: {
    addTenent(tenent) {
      tenentService.addTenent(tenent)
      .then(this.$router.push({ name: "tenents" }))
    }
  },
  components: {
    EditComponent
  }
};
</script>

<style>
.header {
  text-align: center;
  margin-top: 0.5em;
}
</style>