import {ref, computed} from "vue";

export function useToggleCheckRow(rows) {
    const checkVal = ref(false)
    const rowId = ref('')

    const arrRowsWithCheck = computed(() => {
        let isCheck = false
        let arrSubRows = []

        if (rowId.value !== '')
        {
            let currentRow = rows.value.find(row => row.id === rowId.value)

            currentRow.checked = checkVal.value
            arrSubRows = rows.value.filter(item => item.parentId === currentRow.parentId)

            isCheck = arrSubRows.every(item => item.checked === true)

            if (currentRow.type === 'sub-row')
            {
                rows.value.find(parentEl => parentEl.id === currentRow.parentId).checked = isCheck
            } else {
                rows.value.forEach(subEl => {
                    if (subEl.parentId === rowId.value) subEl.checked = checkVal.value
                })
            }
        }
        return rows.value
    })

    return {
        checkVal, rowId, arrRowsWithCheck
    }
}