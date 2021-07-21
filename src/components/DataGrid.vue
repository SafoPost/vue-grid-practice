<template>
  <table class="grid">
    <tr class="columns">
      <data-columns :columns="arrColumns"/>
    </tr>
    <tr
        v-for="row in arrRowsWithCheck"
        :id="row.id"
        :key="row.id"
        :data-parent-id="row.parentId"
        :class="[
          row.type,
          {'checked-row': row.checked}
        ]"
    >
      <data-rows
          :row="row"
          :checkedRow="row.checked"
          @toggle="toggleRowCheck"
      />
    </tr>
  </table>
</template>

<script>
import DataColumns from "./DataColumns";
import DataRows from "./DataRows";
import {useProcessData} from "../hooks/useProcessData";
import {useToggleCheckRow} from "../hooks/useToggleCheckRow";

export default {
  components: {
    DataColumns, DataRows
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggleRowCheck(val, id) {
      this.rowId = id
      this.checkVal = val
    }
  },
  setup(props) {
    const { arrColumns, arrRows, processedData } = useProcessData(props.data, true)
    const { checkVal, rowId, arrRowsWithCheck } = useToggleCheckRow(arrRows)

    return {
      arrColumns, arrRows, processedData, checkVal, rowId, arrRowsWithCheck
    }
  }
}
</script>

<style>
.grid {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0 5px;
  color: #585858;
  text-align: center;
  margin-bottom: 30px;
}
.columns {
  margin-bottom: 5px;
}
.columns th {
  min-height: 80px;
  height: 80px;
  padding-bottom: 10px;
}
.columns th span {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0e0e0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;

}
.row td:first-child {
  padding: 0 15px;
}
.row td {
  min-height: 70px;
  height: 70px;
  background-color: #f3f3f3;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.row td span {
  max-width: 200px;
  display: block;
  margin: 0 auto;
}
.sub-row td {
  min-height: 50px;
  height: 50px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.sub-row td span {
  color: #686868;
}
.sub-row td span b {
  color: #c4c4c4;
  font-weight: normal;
  margin-right: 10px;
  font-size: 14px;
}
.sub-row td:first-child {
  border-top: none;
  border-bottom: none;
}
.sub-row td:nth-child(n+3) {
  text-align: left;
}
.sub-row.checked-row td:not(td:first-child) {
  background-color: #fbf3f3;
}

.row.checked-row td {
  background-color: #f1e6e6;
}
.sub-row.checked-row td:not(td:first-child) {
  background-color: #fbf3f3;
}
</style>