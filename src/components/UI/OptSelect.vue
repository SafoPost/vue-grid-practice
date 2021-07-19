<template>
  <select v-model="modelValue" @change="changeOption" class="opt-select">
    <option disabled value="">Выбрать</option>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'opt-select',
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
.opt-select {
  min-width: 200px;
  padding: 10px 5px;
  border: 2px solid cadetblue;
  border-radius: 6px;
}
</style>