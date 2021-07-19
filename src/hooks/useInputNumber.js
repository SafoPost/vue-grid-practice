import {computed, ref} from "vue";

export function useInputNumber() {
    const inputNumber = ref('')
    const returnNumber = computed(() => {
        return inputNumber.value.replace(/\D/, '')
    })

    return {
        inputNumber, returnNumber
    }
}