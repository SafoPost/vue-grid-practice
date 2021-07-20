<template>
  <table class="grid">
    <tr class="columns">
      <data-columns :columns="arrColumns"/>
    </tr>
    <tr
        v-for="row in arrRows"
        class="grid__row"
        :class="[
          row.type,
          {'checked-row': row.checked}
        ]"
        :checkedRow="row.checked"
    >
      <data-rows :row="row"/>
    </tr>
  </table>
  <button @click="consLog">console.log</button>
</template>

<script>
import DataColumns from "./DataColumns";
import DataRows from "./DataRows";
import {useProcessData} from "../hooks/useProcessData";

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
    consLog() {
      console.log()
    },
    changeCheckedRow(value) {
      console.log('CheckedRow was changed')
    }
  },
  setup(props) {
    const { arrColumns, arrRows, processedData } = useProcessData(props.data)

    return {
      arrColumns, arrRows, processedData
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

.row.checked-group-rows td {
  background-color: #f1e6e6;
}
.sub-row.checked-row td:not(td:first-child) {
  background-color: #fbf3f3;
}
</style>