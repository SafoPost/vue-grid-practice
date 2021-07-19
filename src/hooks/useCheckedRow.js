import {ref, computed} from "vue";

export function useCheckedRow() {
    const isCheckedRow = ref(false)

    const checkedRow = computed(() => isCheckedRow.value = true )
    const unCheckedRow = computed(() => isCheckedRow.value = false )

    return {
        isCheckedRow, checkedRow, unCheckedRow
    }
}