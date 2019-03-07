<template>
  <div class="dropdown">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenu2"
      data-toggle="dropdown"
    >{{text}}</button>
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
  props: ["options", "isSearching"],
  data() {
    return {
      show: "All"
    }
  },
  computed: {
    text: function() {
      return this.isSearching ? "All" : this.show
    }
  },
  methods: {
    onSelection(filter) {
      this.show = filter
      this.$emit("filterView", filter)
    }
  }
}
</script>

<style>
</style>
