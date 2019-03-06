<template>
  <div>
    <h1 class="header">Edit Post</h1>
    <edit-component :button="button" :tenent="tenent" @createTenent="updateTenent(tenent)"></edit-component>
  </div>
</template>

<script>
import EditComponent from "../components/EditComponent"
import tenentService from "../services/tenentService"


export default {
  data() {
    return {
      button:'Update',
      tenent: {}
    }
  },
  created() {
    tenentService.editTenent(this.$route.params.id).then(response => {
      this.tenent = response.data
    })
  },
  methods: {
    updateTenent(tenent) {
      tenentService.updateTenent(this.$route.params.id,tenent).then(() => {
        this.$router.push({ name: "tenents" })
      })
    }
  },
  components: {
    EditComponent
  }
}
</script>

<style >
.header {
  text-align: center;
  margin-top: 0.5em
}
</style>