<template>
  <table class="grid">
    <tr class="grid__column">
      <th><span></span></th>
      <th><span>User</span></th>
      <th><span>Name</span></th>
      <th><span>Email</span></th>
      <th><span>Phone</span></th>
      <th><span>Address.street</span></th>
      <th><span>Address.city</span></th>
      <th><span>--</span></th>
    </tr>
    <tr
      v-for="row in rows"
      :key="row.id"
      :id="row.id"
      :class="{
        'grid__row': row.id % 4 === 1,
        'grid__sub-row': row.id % 4 !== 1,
      }"
      @update="$emit('update', isCheckedRow)">
        <grid-row
            v-if="row.id % 4 === 1"
            :row="row"
            :isCheckedRow="isCheckedRow"/>
        <grid-sub-row
            v-else
            :row="row"/>
    </tr>


<!--    <div v-else>Список пуст</div>-->
  </table>
<!--  <button @click="consLog">console.log</button>-->
</template>

<script>
import GridRow from "./GridRow";
import GridSubRow from "./GridSubRow";
import {useToggleCheckRow} from "../hooks/useCheckedRow";

export default {
  components: {
    GridRow, GridSubRow
  },
  props: {
    rows: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isCheckedRow: false
    }
  },
  methods: {
    // consLog(e) {
    //   console.log(this.GridSubRow)
    // },
    addClassAndSelectRow(e) {
      console.log(e)
      this.$emit('update:isCheckedRow', e)
      console.log(e)
    }
  },
}
</script>

<style scoped>
.grid {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0 5px;
  color: #585858;
  text-align: center;
  margin-bottom: 30px;
}
.grid__column {
  margin-bottom: 5px;
}
.grid__column th {
  min-height: 80px;
  height: 80px;
  padding-bottom: 10px;
}
.grid__column th span {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0e0e0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;

}
.grid__row {

}
.grid__row td:first-child {
  padding: 0 15px;
}
.grid__row td {
  min-height: 70px;
  height: 70px;
  background-color: #f3f3f3;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.grid__row.checked-group-rows td {
  background-color: #f1e6e6;
}
.grid__row td span {
  max-width: 200px;
  display: block;
  margin: 0 auto;
}
.grid__sub-row td {
  min-height: 50px;
  height: 50px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  color: #c4c4c4;
}
.grid__sub-row.checked-row td:not(td:first-child) {
  background-color: #fbf3f3;
}
.grid__sub-row td span {
  color: #686868;
}
.grid__sub-row td:first-child {
  border-top: none;
  border-bottom: none;
}
.grid__sub-row td:nth-child(n+3) {
  text-align: left;
}
.grid__sub-row.checked-row td:not(td:first-child) {
  background-color: #fbf3f3;
}
</style>