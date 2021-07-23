<template>
  <label :for="forId" class="check-label">
    <input
        :id="forId"
        :name="filterName"
        v-model="modelValue"
        @change="$emit('update', modelValue, forId)"
        class="check-box"
        type="radio">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'grid-radio-filter',
  props: {
    modelValue: {
      type: Boolean
    },
    forId: {
      type: String
    },
    filterName: {
      type: String
    },
  },
  methods: {
    changeCheck(e) {
      // console.log(e.target.closest('tr').id)
      // this.$emit('update', e.target.checked, e.target.id)
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