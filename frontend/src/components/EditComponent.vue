<template>
  <form @submit.prevent="addTenent">
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label>Name:</label>
          <input required type="text" class="form-control" v-model="tenent.name">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label>Address:</label>
          <input required type="text" class="form-control" v-model="tenent.address">
        </div>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label>Phone:</label>
          <input required type="tel" class="form-control" v-model="tenent.phone">
        </div>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label>Debt:</label>
          <input required type="text" class="form-control" v-model="tenent.debt">
        </div>
      </div>
    </div>
    <br>
    <div class="form-group">
      <button type="text" class="btn btn-primary">{{button}}</button>
      <router-link to="/"><button type="text" class="back-btn btn btn-primary">Back</button></router-link>

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


<style >
.back-btn{
  margin: 1em;
  background: gray
}
.back-btn:hover{
    background:rgb(58, 57, 57)
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
</style>
