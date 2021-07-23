import {ref, watch} from "vue";
import axios from "axios";

export function useSortByColumns(rows) {
    const sortQuery = ref('')
    const sortedRows = ref(rows)
    const isDataLoading = ref(true)
    let isResponse = false

    const requestSortedRows = async () => {
        try {
            const response = await axios.get('https://blog.project-srv.site/?get_json=y', {
                params: {
                    id: sortQuery
                }
            })
            isResponse = true
            sortedRows.value = response.data
        } catch {
            console.log('Ошибка запроса сортировки!')
        } finally {


            isDataLoading.value = false
        }
    }

    watch(sortQuery, requestSortedRows)
    return {
        sortQuery, sortedRows
    }
}