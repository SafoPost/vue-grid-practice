<template>
  <label class="check-label">
    <input
        :id="forId"
        v-model="modelValue"
        @change="$emit('update', modelValue, forId)"
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
    },
    forId: {
      type: String
    }
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