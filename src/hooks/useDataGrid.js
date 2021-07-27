import axios from "axios";
import {onMounted, ref} from "vue";
import templateData from '../../static/dataManyRows.json';
import _ from "lodash";

export function useDataGrid() {
    const data = ref({})
    const isDataLoading = ref(true)

    const fetching = async () => {
        try {
            const response = await axios.get('https://blog.project-srv.site/?get_json=y')

            data.value = response.data

        } catch {
            // alert('Ошибка запроса!')
            console.log('Ошибка запроса!')
        } finally {
            isDataLoading.value = false
            // data.value = templateData
            console.log(data.value)
        }
    }
    onMounted(fetching)

    return {
        data, isDataLoading
    }
}