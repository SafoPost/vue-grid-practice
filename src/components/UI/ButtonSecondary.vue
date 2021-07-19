<template>
  <button class="button-primary" @click="createPost">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'button-secondary'
}
</script>

<style scoped>
.button-primary {
  min-width: 150px;
  align-self: flex-end;
  padding: 10px 20px;
  border: 2px solid cadetblue;
  color: cadetblue;
  background-color: transparent;
}
</style>