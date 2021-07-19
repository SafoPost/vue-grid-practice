<template>
  <div class="container">
    <h1>Таблица</h1>
    <div class="monitor-panel">
      <div class="panel-group">
        <input-checkbox id="fast-filter-1">Фильтр 1</input-checkbox>
        <input-checkbox id="fast-filter-2">Фильтр 2</input-checkbox>

        <grid-year-input
          v-model="filterPhone">
          Phone
        </grid-year-input>

        <grid-select
            v-model="filterEmail"
            :options="filterOptionsEmail">
          Email
        </grid-select>
<!--        <grid-select-->
<!--            v-model="filterWorkType"-->
<!--            :options="sortOptionsWorkType">-->
<!--          Тип работы-->
<!--        </grid-select>-->

      </div>
      <button-primary
          @click="consLog">
        Обновить
      </button-primary>
      <input-text
          v-model="searchQueryRows"
          placeholder="Поиск..."
      />
    </div>
    <main-grid
      :rows="filteredAndSearchedRows"
      v-if="!isRowsLoading"
    />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import MainGrid from "@/components/MainGrid";
import Pagination from "../components/Pagination";
import {useGrid} from "../hooks/useGrid";
import {useFilteredRows} from "../hooks/useFilteredRows";
import {useFilteredAndSearchedRows} from "../hooks/useFilteredAndSearchedRows";

export default {
  components: {
    PostForm, MainGrid, Pagination
  },
  data() {
    return {
      popupVisible: false,
      filterOptionsEmail: [
        { value: '.org', name: 'org' },
        { value: '.tv', name: 'tv' },
        { value: '.net', name: 'net' },
        { value: '.ca', name: 'ca' },
        { value: '.info', name: 'info' },
        { value: '.biz', name: 'biz' },
        { value: '.me', name: 'me' },
        { value: '.io', name: 'io' }
      ],
      // sortOptionsWorkType: [
      //   { value: 'month', name: 'Месячное планирование' },
      //   { value: 'quarter', name: 'Квартальное планирование' },
      //   { value: 'year', name: 'Годовое планирование' }
      // ]
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.popupVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
    showPopup() {
      this.popupVisible = true;
    },
    consLog() {
      console.log(this.filteredAndSearchedRows)
    }
  },
  setup(props) {
    const { rows, isRowsLoading } = useGrid(10)
    const { filterPhone, filterEmail, filteredRows } = useFilteredRows(rows)
    const { searchQueryRows, filteredAndSearchedRows } = useFilteredAndSearchedRows(filteredRows)

    return {
      rows, isRowsLoading,
      filterPhone, filterEmail, filteredRows,
      searchQueryRows, filteredAndSearchedRows
    }
  }
}
</script>

<style scope>

.monitor-panel {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 0;
  margin: 20px 0;
}
.monitor-panel .input-text {
  flex: 1 1 100%;
  margin: 20px 0 0;
}
</style>