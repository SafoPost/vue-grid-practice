import {computed, ref} from "vue";

export function usePaginationGrid(rows, page, limit) {

    let count = limit.value * (page.value - 1)
    rows.forEach((el, i) => el.ordinalNumber = count + i + 1 )

    const totalRows = computed(() => rows.length || 0 )
    const totalPages = computed(() => Math.ceil(totalRows.value / limit.value) || 0 )
    const firstRow = computed(() => rows[0].ordinalNumber || 0 )
    const lastRow = computed(() => rows[rows.length - 1].ordinalNumber || 0 )

    return {
        totalRows, totalPages,
        firstRow, lastRow
    }
}