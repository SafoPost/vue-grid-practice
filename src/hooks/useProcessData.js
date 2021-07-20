import {ref, computed} from "vue";

export function useProcessData(data) {
    const arrColumns = ref(data.columns)
    const arrRows = computed(() => {
        const rows = []
        data.rows.forEach(item => {
            rows.push(item)
            if (item.subRows)
            {
                item.subRows.forEach( subItem => rows.push(subItem) )
            }
        })
        return rows
    })

    console.log(arrRows.value)

    const processColumns = computed(() => {
        data.columns.forEach(function() {
            return arrColumns.push({col: this.colspan, value: `<span>this.name</span>`})
        })
    })

    // console.log(processColumns)
    return {
        arrColumns, arrRows, processColumns
    }
}