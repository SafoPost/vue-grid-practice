import {ref, computed} from "vue";

export function useDataRows(dataRows, dataColumns, withCheck) {
    const emptyCell = ref({name: 'empty', value: ''})
    const checkboxCell = ref({name: 'check', value: ''})
    const arrRows = computed(() => {
        const rows = []

        dataRows.forEach(item => {
            const orderedItem = []

            for (let i = 0; i < dataColumns.length; i++) {

                let foundCell = item.values.find(cell => cell.name === dataColumns[i].id)

                if (foundCell)
                {
                    orderedItem.push(foundCell)
                } else {
                    orderedItem.push(emptyCell.value)
                }
            }

            item.values = orderedItem
            if (!!withCheck) {
                item.checked = false
                item.values.unshift(checkboxCell.value)
            }
            rows.push(item)

            if (item.subRows !== undefined)
            {
                item.subRows.forEach( subItem => {
                    const orderedSubItem = []

                    let calcColspan = dataColumns.length - subItem.values.length

                    subItem.values.forEach( cellSubRow => {
                        if (cellSubRow.name === 'product') cellSubRow.colspan = calcColspan
                        orderedSubItem.push(cellSubRow)
                    })

                    subItem.parentId = item.id
                    subItem.values = orderedSubItem

                    if (!!withCheck)
                    {
                        subItem.values.unshift(checkboxCell.value)
                        subItem.checked = false
                    }
                    subItem.values.unshift(emptyCell.value)

                    rows.push(subItem)
                })
            }
        })
        return rows
    })

    // console.log(arrColumns.value)
    // arrRows.value.forEach(row => console.log(row.values))

    return {
        arrRows
    }
}