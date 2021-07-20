<template>
  <label class="check-label">
    <input
        v-model="modelValue"
        @change="changeCheck"
        class="check-box"
        type="checkbox">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'input-checkbox',
  props: {
    modelValue: {
      type: Boolean
    }
  },
  methods: {
    changeCheck(e) {
      this.$emit('update:modelValue', e.target.checked)
    }
  }
}
</script>

<style scoped>
.check-box {
  margin: 0 10px;
  border: 2px solid cadetblue;
  border-radius: 6px;
}
.check-label + .check-label {
  margin-left: 20px;
}
.check-label + .check-label:after {
  content: '|';
  margin-left: 30px;
}
</style>