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
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  padding: 5px;
  border: 1px solid #ccc;
  cursor: pointer;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.1);
}
.page:hover {
  border: 2px solid cadetblue;
}
.current-page {
  color: cadetblue;
  background-color: rgba(162, 205, 206, 0.3);
}
</style>