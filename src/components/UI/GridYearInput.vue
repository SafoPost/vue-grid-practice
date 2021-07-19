<template>
  <label for="3" class="label">
    <slot></slot>
    <input
        v-model="modelValue"
        @input="updateInput"
        id="3"
        type="text"
        minlength="4"
        maxlength="4"
        class="grid-input"
    >
  </label>
</template>

<script>
export default {
  name: 'grid-year-input',
  props: {
    modelValue: {
      type: [String, Number]
    }
  },
  methods: {
    updateInput(e) {
      // e.target.value.replace(/\D/, '')
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style scoped>
.grid-input {
  max-width: 60px;
  height: 30px;
  padding: 10px;
  margin-left: 10px;
  border: 1px solid cadetblue;

}
.label {
  margin-left: 30px;
  color: #c4c4c4;
  font-size: 14px;
}

</style>