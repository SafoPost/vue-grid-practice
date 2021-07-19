<template>
  <input
      v-model.trim="modelValue"
      @input="updateInput"
      class="input-text"
      type="text">
</template>

<script>
export default {
  name: 'input-text',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style scoped>
.input-text {
  min-width: 300px;
  height: 40px;
  padding: 10px;
  border: 2px solid cadetblue;
}
</style>