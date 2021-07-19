<template>
  <div class="popup-overlay" v-if="show" @click.stop="hidePopup">
    <div @click.stop class="popup-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "../../mixins/toggleMixin";

export default {
  name: 'popup-window',
  mixins: [toggleMixin]
}
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
}
.popup-content {
  min-width: 300px;
  min-height: 100px;
  margin: auto;
  padding: 30px 30px 20px;
  background-color: white;
  border-radius: 10px;
}
</style>