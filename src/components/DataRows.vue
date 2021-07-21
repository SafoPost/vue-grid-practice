<template>
  <td
    v-for="cell in row.values"
    :key="cell.name"
    :colspan="cell.colspan"
  >
    <input-checkbox
      v-if="cell.name === 'check'"
      v-model="checkedRow"
      v-bind="$attrs"
      :forId="row.id"
      @update="changedCheck"
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
      type: Boolean
    }
  },
  methods: {
    changedCheck(value, id) {
      this.$emit('toggle', value, id);
    }
  }
}
</script>

<style scoped>

</style>