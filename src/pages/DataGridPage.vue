<template>
  <div class="container">
    <h1>Таблица с данными из шаблона</h1>
    <div class="monitor-panel">
<!--      <div class="panel-group">-->
<!--        <input-checkbox-->
<!--            id="fast-filter-1">-->
<!--          Фасовка-->
<!--        </input-checkbox>-->
<!--        <input-checkbox-->
<!--            id="fast-filter-2">-->
<!--          Налив-->
<!--        </input-checkbox>-->

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

<!--      </div>-->
<!--      <button-secondary-->
<!--          @click="consLog">-->
<!--        Обновить-->
<!--      </button-secondary>-->
<!--      <input-text-->
<!--          v-model="searchQueryRows"-->
<!--          placeholder="Поиск..."-->
<!--      />-->
    </div>
    <data-grid
      :data="data"

      v-if="!isDataLoading"
    />
    <div v-else>Идет загрузка данных...</div>
  </div>
</template>

<script>
import DataGrid from "../components/DataGrid";
import {useDataGrid} from "../hooks/useDataGrid";

export default {
  components: {
    DataGrid
  },
  data() {
    return {
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
        { value: 'month', name: 'Месячное планирование' },
        { value: 'quarter', name: 'Квартальное планирование' },
        { value: 'year', name: 'Годовое планирование' }
      ]
    }
  },
  methods: {

  },
  setup(props) {
    const { data, withCheck, withEdit, isDataLoading } = useDataGrid(true)

    return {
      data, withCheck, withEdit, isDataLoading
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