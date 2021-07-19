import {ref, computed} from "vue";

export function useFilteredAndSearchedRows(filteredRows) {
    const searchQueryRows = ref('')

    const filteredAndSearchedRows = computed(() => {
        return [...filteredRows.value].filter(row => row.name.includes(searchQueryRows.value))
        // return [...filteredRows.value].filter(row => row.name.toLowerCase().indexOf(searchQueryRows.value.toLowerCase()))
    })

    return {
        searchQueryRows, filteredAndSearchedRows
    }
}