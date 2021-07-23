import {ref, computed} from "vue";

export function useDataColumns(dataColumns, withCheck = false) {
    const emptyCell = ref({name: 'empty', value: ''})

    const arrColumns = computed(() => {
        const columns = []

        if (!!withCheck) columns.push(emptyCell.value)

        dataColumns.forEach(item => columns.push(item))

        return columns
    })

    return {
        dataColumns, arrColumns, withCheck
    }
}