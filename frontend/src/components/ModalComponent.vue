<template>
  <div class="modal modal-mask" style="display: block">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <slot name="body">
            <h3>Delete Tenent? Are You Sure?</h3>
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn btn-outline-info" @click="closeModal">No</button>
            <button
              type="button"
              class="btn btn-danger"
              data-dismiss="modal"
              @click="deleteTenent"
            >Yes</button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    closeModal() {
      this.$emit("clodeModal");
    },
    deleteTenent() {
      this.$emit("deleteTenent");
    }
  }
};
</script>


<style>
.modal-content {
  margin-top: 15em;
}
.modal-mask {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}
</style>