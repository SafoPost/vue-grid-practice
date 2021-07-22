import {ref, computed} from "vue";

export function useProcessData(data, withCheck = false, withEdit = false) {
    const emptyCell = ref({name: 'empty', value: ''})
    const checkboxCell = ref({name: 'check', value: ''})


    const processCell = computed(() => {
        data.columns.forEach(function() {
            return arrColumns.push({col: this.colspan, value: `<span>this.name</span>`})
        })
    })

    const arrColumns = computed(() => {
        const columns = []

        if (!!withCheck) columns.push(emptyCell.value)

        data.columns.forEach(item => columns.push(item))

        return columns
    })

    const arrRows = computed(() => {
        const rows = []

        data.rows.forEach(item => {
            const orderedItem = []

            for (let i = 0; i < data.columns.length; i++) {

                let foundCell = item.values.find(cell => cell.name === data.columns[i].id)

                if (foundCell)
                {
                    orderedItem.push(foundCell)
                } else {
                    orderedItem.push(emptyCell.value)
                }
            }

            item.values = orderedItem

            if (!!withCheck) item.values.unshift(checkboxCell.value)
            rows.push(item)

            if (item.subRows)
            {

                item.subRows.forEach( subItem => {
                    let orderSubItem = []

                    let freeColumnsAmount = data.columns.length - data.columnsSubRow.length

                    for (let i = 0; i < data.columnsSubRow.length; i++) {
                        let foundCell = subItem.values.find(cell => cell.name === data.columnsSubRow[i].id)
                        orderSubItem.push(foundCell)
                        if (data.columnsSubRow[i].type === 'grow') orderSubItem[i].colspan = freeColumnsAmount
                        if (data.columnsSubRow[i].type === 'shrink') orderSubItem[i].dataType = 'shrink'
                    }

                    subItem.value = orderSubItem

                    subItem.parentId = item.id
                    if (!!withCheck) subItem.values.unshift(checkboxCell.value)
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
        arrColumns, arrRows, processCell
    }
}