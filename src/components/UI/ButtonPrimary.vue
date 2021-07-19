<template>
  <button class="button-primary">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'button-primary'
}
</script>

<style scoped>
.button-primary {
  min-width: 150px;
  height: 40px;
  align-self: flex-end;
  padding: 10px 20px;
  border: none;
  color: #fff;
  background-color: cadetblue;
}
</style>