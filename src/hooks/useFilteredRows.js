import {ref, computed} from "vue";

export function useFilteredRows(rows) {
    const filterPhone = ref('')
    const filterEmail = ref('')

    const filteredRows = computed(() => {
        return [...rows.value].filter(row => row.phone.includes(filterPhone.value)).filter(row => row.email.includes(filterEmail.value))
    })

    return {
        filterPhone, filterEmail, filteredRows
    }
}