import {ref, computed} from "vue";

export function useToggleCheckRow() {
    const isCheckedRow = ref(false)


    console.log()
    const checkedRow = computed(() => isCheckedRow.value = true )
    const unCheckedRow = computed(() => isCheckedRow.value = false )

    return {
        isCheckedRow, checkedRow, unCheckedRow
    }
}