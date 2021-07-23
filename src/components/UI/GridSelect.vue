<template>
  <label for="2" class="label">
    <slot></slot>
    <select
        v-model="modelValue"
        @change="changeOption"
        id="2"
        class="grid-select">
      <option
          v-for="option in options"
          :key="option.name"
          :value="option.value">
        {{ option.value }}
      </option>
    </select>
  </label>
</template>

<script>
export default {
  name: 'grid-select',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style scoped>
.grid-select {
  height: 30px;
  margin-left: 10px;
  padding: 0 5px;
  border: 1px solid cadetblue;
}
.label {
  margin-left: 30px;
  color: #c4c4c4;
  display: inline-flex;
  align-items: center;
  font-size: 14px;
}
</style>