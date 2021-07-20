import axios from "axios";
import {onMounted, ref} from "vue";

export function useGrid(limit) {
    const rows = ref([])
    const isRowsLoading = ref(true)

    const fetching = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');

            rows.value = response.data;
        } catch (e) {
            console.log('Ошибка!')
        } finally {
            isRowsLoading.value = false;
        }
    }

    onMounted(fetching)

    return {
        rows, isRowsLoading
    }
}