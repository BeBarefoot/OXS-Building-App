<template>
  <label>
    Search:
    <input type="text" v-model="text" @input="searchName" placeholder="enter name..."> 
  </label>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {
    searchName() {
      this.$emit("filter", this.text)
    }
  }
};
</script>

<style>
</style>
