<template>
  <th
      v-for="column in columns"
      :class="{'is-sorting': column.isSorting}"
  >
    <span @click="$emit('update:sortValue', column.id)">{{ column.value }}</span>
  </th>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      required: true
    },
    sortValue: {
      type: String
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>