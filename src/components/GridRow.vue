<template>
<!--  <tr class="grid__row" :class="{'checked-group-rows': isCheckedAllRows}">-->
    <td><span>
      <input-checkbox
          v-model="isCheckedRow"
          @update="checkedAllRows"
      />
    </span></td>
    <td><span>{{ row.username }}</span></td>
    <td><span>{{ row.name }}</span></td>
    <td><span>{{ row.email }}</span></td>
    <td><span>{{ row.phone }}</span></td>
    <td><span>{{ row.address.street }}</span></td>
    <td><span>{{ row.address.city }}</span></td>
    <td><span></span></td>
<!--  </tr>-->
</template>

<script>
export default {
  name: 'grid-row',
  props: {
    row: {
      type: Object,
      required: true
    },
    isCheckedRow: {
      type: Boolean
    }
  },
  methods: {
    checkedAllRows(e) {
      console.log(e.target.closest('tr'))
      this.$emit('update:isCheckedRow', e.target.checked)
      if (e.target.checked) {
        e.target.closest('tr').classList.add('checked-row')
      } else {
        e.target.closest('tr').classList.remove('checked-row')
      }
    }
  }
}
</script>

<style scoped>
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
.grid__row td span {
  max-width: 200px;
  display: block;
  margin: 0 auto;
}

.checked-row td {
  background-color: #f1e6e6;
}
</style>