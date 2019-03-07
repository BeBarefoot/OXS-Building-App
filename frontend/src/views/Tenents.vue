<template>
  <div>
    <h1 class="header">Manage Your Tenents</h1>
    <section class="row">
      <search-component class="col-11" @search="searchList"></search-component>
      <dropdown-component :isSearching="isSearching" :options="dropdownOptions" class="col-1" @filterView="filterView"></dropdown-component>
    </section>
    <div class="row">
      <div class="col-md-10"></div>
      <div class="col-md-2"></div>
    </div>
    <br>
    <tenents-list :tenents="tenents" :search="search" :filter="filter" @deleteTenent="deleteTenent"></tenents-list>
  </div>
</template>

<script>
import TenentsList from "../components/TenentsList.vue"
import SearchComponent from "../components/SearchComponent.vue"
import DropdownComponent from "../components/DropdownComponent.vue"
import tenentService from "../services/tenentService"

export default {
  data() {
    return {
      tenents: [],
      search: "All",
      filter: "true",
      dropdownOptions: [{ value: "All" }, { value: "Has Debt" }, { value: "No Debt" }],
      isSearching:false
    }
  },
  created() {
    tenentService.getTenets().then(response => {
      this.tenents = response
    })
  },
  methods: {
    deleteTenent(id) {
      tenentService.deleteTenent(id).then(() => {
        let index = this.tenents.findIndex(tenent => tenent._id === id)
        this.tenents.splice(index, 1)
      })
    },
    searchList(text) {
      this.isSearching=true
      this.filter = false
      return (this.search = text)
    },
    filterView(filter) {
      this.isSearching=false
      this.filter = true
      this.search = filter
    }
  },
  components: {
    TenentsList,
    SearchComponent,
    DropdownComponent
  }
}
</script>

<style >
body {
  background: whitesmoke;
}
.header {
  text-align: center;
  margin-top: 0.5em
}
</style>
