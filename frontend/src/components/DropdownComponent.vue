<template>
  <div class="dropdown">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenu2"
      data-toggle="dropdown"
    >{{show}}</button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
      <div v-for="(option,i) of options" :key="i">
        <button
          class="dropdown-item"
          type="button"
          @click="onSelection(option.value)"
        >{{option.value}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [{ value: "All" }, { value: "Has Debt" }, { value: "No Debt" }],
      show: "All"
    }
  },
  methods: {
    onSelection(filter) {
      this.show=filter
      this.$emit("filterView", filter)
    }
  }
}
</script>

<style>
</style>
