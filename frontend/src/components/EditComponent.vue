<template>
  <form @submit.prevent="addTenent">
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label>Name:</label>
          <input type="text" class="form-control" v-model="tenent.name">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label>Address:</label>
          <input type="text" class="form-control" v-model="tenent.address">
        </div>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label>Phone:</label>
          <input type="text" class="form-control" v-model="tenent.phone">
        </div>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label>Debt:</label>
          <input type="text" class="form-control" v-model="tenent.debt">
        </div>
      </div>
    </div>
    <br>
    <div class="form-group">
      <button type="text" class="btn btn-primary">{{button}}</button>
    </div>
  </form>
</template>

<script>
export default {
  props: ["tenent","button"],
  methods: {
    addTenent() {
      this.$emit("createTenent", this.tenent)
    }
  }
}
</script>


<style>
</style>
