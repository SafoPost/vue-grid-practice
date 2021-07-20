<template>
<!--  <tr class="grid__sub-row" :class="{'checked-row': isCheckedRow}">-->
    <td><span></span></td>
    <td><span>
      <input-checkbox
          v-model="isCheckedRow"
          @update="updateCheck"
      />
    </span></td>
    <td colspan="3"><span>{{ row.company.name }}. {{ row.company.catchPhrase }}</span></td>
    <td>zipcode <span>{{ row.address.zipcode }}</span></td>
    <td>geo.lat <span>{{ row.address.geo.lat }}</span></td>
    <td>geo.lng <span>{{ row.address.geo.lng }}</span></td>
<!--  </tr>-->
</template>

<script>
export default {
  name: 'grid-sub-row',
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
    updateCheck(e) {
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
.grid__sub-row td {
  min-height: 50px;
  height: 50px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  color: #c4c4c4;
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

.checked-row td:not(td:first-child) {
  background-color: #fbf3f3;
}
</style>