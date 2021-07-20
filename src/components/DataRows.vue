<template>
  <td
    v-for="cell in row.values"
    :colspan="cell.colspan"
  >
    <input-checkbox
      v-if="cell.type === 'checkbox'"
      v-model="checkedRow"
    />
    <span v-else><b v-if="cell.title">{{ cell.title }}</b>{{ cell.value }}</span>
  </td>
</template>

<script>
export default {
  props: {
    row: {
      type: Object,
      required: true
    },
    checkedRow: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    changedCheck(value) {
      console.log('changedCheck(value)', value)
      this.$emit('changeCheckedRow', value);
    }
  },
  watch: {
    checkedRow(value) {
      console.log('checkedRow', value)
    }
  }
}
</script>

<style scoped>

</style>