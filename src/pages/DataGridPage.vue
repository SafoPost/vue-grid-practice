<template>
  <div class="container">
    <h1>Таблица с данными из шаблона</h1>
    <div class="monitor-panel">
      <div class="panel-group">
<!--        <grid-radio-filter-->
<!--            :v-model="filterPack"-->
<!--            :forId="fastFilter1"-->
<!--            :filterName="filterPackName">-->
<!--          Фасовка-->
<!--        </grid-radio-filter>-->
<!--        <grid-radio-filter-->
<!--            :v-model="filterPack"-->
<!--            :forId="fastFilter2"-->
<!--            :filterName="filterPackName">-->
<!--          Налив-->
<!--        </grid-radio-filter>-->
<!--        <grid-year-input-->
<!--          v-model="filterYear">-->
<!--          Год-->
<!--        </grid-year-input>-->
<!--        <grid-select-->
<!--            v-model="filterMonth"-->
<!--            :options="filterOptionsMonth">-->
<!--          Месяц-->
<!--        </grid-select>-->
<!--        <grid-select-->
<!--            v-model="filterWorkType"-->
<!--            :options="sortOptionsWorkType">-->
<!--          Тип работы-->
<!--        </grid-select>-->
      </div>
      <button-primary>Обновить</button-primary>

<!--      <input-text-->
<!--          v-model="searchQueryRows"-->
<!--          placeholder="Поиск..."/>-->
    </div>
    <data-grid
      :dataColumns="data.columns"
      :dataRows="data.rows"
      :sortQuery="sortQuery"
      :sortedRows="sortedRows"
      v-if="!isDataLoading"
    />
    <div v-else>Идет загрузка данных...</div>
    <div class="monitor-panel">
      <div class="panel-group">
        <div class="grid-values">
          С {{ firstRow }} по {{ lastRow }} из {{ totalRows }} (найдено {{ totalRows }})
        </div>
      </div>
      <div class="panel-group">
        <grid-select
            v-model="limit"
            :options="optionsLimit"
            @update="changeLimit">
          Отображать
        </grid-select>
        <v-pagination
            v-model="page"
            :pages="totalPages"
            :range-size="1"
            active-color="#5F9EA0"
            @update:modelValue="changePage"
            :hideFirstButton="true"
            :hideLastButton="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DataGrid from "../components/DataGrid";
import {useDataGrid} from "../hooks/useDataGrid";
import {usePaginationGrid} from "../hooks/usePaginationGrid";
import {useSortByColumns} from "../hooks/useSortByColumns";
import ButtonPrimary from "../components/UI/ButtonPrimary";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

export default {
  components: {
    ButtonPrimary,
    DataGrid,
    VPagination
  },
  data() {
    return {
      filterPack: 'filterPack',
      fastFilter1: 'fastFilter_1',
      fastFilter2: 'fastFilter_2',
      filterPackName: 'filter-pack-type',
      filterOptionsMonth: [
        { name: '01', value: '(01) Январь' },
        { name: '02', value: '(02) Февраль' },
        { name: '03', value: '(03) Март' },
        { name: '04', value: '(04) Апрель' },
        { name: '05', value: '(05) Май' },
        { name: '06', value: '(06) Июнь' },
        { name: '07', value: '(07) Июль' },
        { name: '08', value: '(08) Август' },
        { name: '09', value: '(09) Сентябрь' },
        { name: '10', value: '(10) Октябрь' },
        { name: '11', value: '(11) Ноябрь' },
        { name: '12', value: '(12) Декабрь' }
      ],
      sortOptionsWorkType: [
        { name: 'month', value: 'Месячное планирование' },
        { name: 'quarter', value: 'Квартальное планирование' },
        { name: 'year', value: 'Годовое планирование' }
      ],
      optionsLimit: [
        { name: 3, value: '3' },
        { name: 5, value: '5' },
        { name: 10, value: '10' },
        { name: 15, value: '15' },
        { name: 20, value: '20' }
      ]
    }
  },
  methods: {
    changePage(currentPage) {
      console.log('currentPage', currentPage)
      this.page = currentPage
    },
    changeLimit(currentLimit) {
      console.log('currentLimit', currentLimit)
      this.limit = currentLimit
    },
    changeSort(sort) {
      console.log(sort)
      this.requestSortedRows()
    }
  },
  setup(props) {
    const { data, isDataLoading, limit, page } = useDataGrid()
    const { totalRows, totalPages, firstRow, lastRow } = usePaginationGrid(data.value.rows, page, limit)
    const { sortQuery, sortedRows, requestSortedRows } = useSortByColumns(data.value.rows)

    return {
      data, isDataLoading, limit, page,
      totalRows, totalPages, firstRow, lastRow,
      sortQuery, sortedRows, requestSortedRows,
    }
  },
  watch: {
    // page() {
    //   this.fetching
    // },
    // limit() {
    //   this.fetching
    // }
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