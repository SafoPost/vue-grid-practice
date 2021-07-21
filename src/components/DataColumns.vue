<template>
  <th
      v-for="column in columns"
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