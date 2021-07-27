import axios from "axios";
import {computed, onMounted, ref} from "vue";
import templateData from '../../static/dataManyRows.json';
import _ from "lodash";

export function usePaginationGrid(data) {
    const limit = ref(5)
    const page = ref(1)

    // console.log(data.value)

    // data.value.rows.forEach((el, i) => el.ordinalNumber = i + 1)

    const currentRows = computed(() => {
        return _.chunk(data.value.rows, limit.value)
    })
    const currentData = computed(() => {
        return data.value.rows = currentRows.value[page.value]
    })
    const totalRows = computed(() => {
        return data.value.rows.length
    })
    const totalPages = computed(() => {
        return Math.ceil(totalRows.value / limit.value)
    })
    const firstRow = computed(() => {
        return data.value.rows[0].ordinalNumber
    })
    const lastRow = computed(() => {
        return data.value.rows[limit.value - 1].ordinalNumber
    })


    return {
        currentRows, currentData, totalRows, totalPages,
        firstRow, lastRow, limit, page
    }
}