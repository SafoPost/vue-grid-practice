<template>
  <div class="pagination">
    <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page"
        :class="{ 'current-page': page === pageNumber }"
        @click="$emit('update', pageNumber)">
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Array,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}
.page {
  padding: 0 5px;
  margin: 0 5px;
  cursor: pointer;
}
.page:hover {
  text-decoration: underline;
}
.current-page {
  color: cadetblue;
}
</style>