<template>
  <td
    v-for="cell in row.values"
    :key="cell.name"
    :colspan="cell.colspan"
  >
    <input-checkbox
      v-if="cell.name === 'check'"
      v-model="checkedRow"
      v-bind="$attrs"
      :forId="row.id"
      @update="changedPack"
    />
    <span v-else
          :class="{'js-calc-width': cell.title}"
    >
      <b v-if="cell.title">{{ cell.title }}</b>
      {{ cell.value }}
    </span>
  </td>
</template>

<script>
import {onMounted, ref} from "vue";

export default {
  data() {
    return {
      spanWidth: ''
    }
  },
  props: {
    row: {
      type: Object,
      required: true
    },
    checkedRow: {
      type: Boolean
    }
  },
  methods: {
    changedPack(value, id) {
      this.$emit('toggle', value, id);
    },
    setSpanWidth() {
      let spanWithFixedWidth = document.querySelectorAll('.js-calc-width')
      let arrNum = []

      spanWithFixedWidth.forEach(span => arrNum.push(span.offsetWidth))

      spanWithFixedWidth.forEach(span => {
        span.style = `
          width: ${Math.max(...arrNum)}px;
          min-width: ${Math.max(...arrNum)}px;
          display: block;
          margin: auto;
          text-align: left;
          white-space: nowrap`
      })

    }
  },
  mounted() {
    this.setSpanWidth()
  },

}
</script>

<style scoped>

</style>