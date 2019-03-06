<template>
  <div>
    <modal v-if="showModal" @clodeModal="closeModal" @deleteTenent="deletePost"></modal>

    <mdb-tbl responsive>
      <mdb-tbl-head>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Debt</th>
          <th>Actions</th>
        </tr>
      </mdb-tbl-head>
      <mdb-tbl-body>
        <tr v-for="(tenent,i) in filterTenents" :key="i" :class="{even:!(i%2)}">
          <td>{{ tenent.name }}</td>
          <td>{{ tenent.address }}</td>
          <td>{{ tenent.phone }}</td>
          <td>{{ tenent.debt }}</td>
          <td>
            <router-link :to="{name: 'edit', params: { id: tenent._id }}">
              <mdb-btn outline="primary" darkWaves rounded>Edit</mdb-btn>
            </router-link>
          </td>
          <td>
            <mdb-btn outline="danger" darkWaves rounded @click="openModal(tenent._id)">Delete</mdb-btn>
          </td>
        </tr>
      </mdb-tbl-body>
    </mdb-tbl>
  </div>
</template>

<script>
import { mdbBtn, mdbTbl, mdbTblHead, mdbTblBody } from "mdbvue"
import Modal from "@/components/ModalComponent.vue"
import tenentService from "../services/tenentService"

export default {
  props: ["tenents", "search", "filter"],
  data() {
    return {
      showModal: false,
      isActive: false,
      tenentId: ""
    }
  },
  methods: {
    deletePost() {
      this.closeModal()
      this.$emit("deleteTenent", this.tenentId)
      this.tenentId = ""
    },
    pageClick() {
      this.isActive = true
    },
    openModal(id) {
      this.showModal = true
      this.tenentId = id
    },
    closeModal() {
      this.showModal = false
    },
    submitAndClose() {}
  },
  computed: {
    filterTenents() {
      return tenentService.filterTenents(this.filter, this.search, this.tenents)
     
    }
  },
  components: {
    mdbBtn,
    mdbTbl,
    mdbTblHead,
    mdbTblBody,
    Modal
  }
}
</script>

<style>
.even {
  background: rgb(202, 193, 193);
}
</style>
