<template>
  <th
      v-for="column in columns"
      :colspan="column.colspan"
  >
    <span>{{ column.value }}</span>
  </th>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      required: true
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>