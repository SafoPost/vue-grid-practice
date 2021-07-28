import axios from "axios";
import {onMounted, ref} from "vue";
import tempData from './../../static/data.json'

export function useDataGrid() {
    const data = ref({})
    const limit = ref(5)
    const page = ref(1)

    const isDataLoading = ref(true)

    const fetching = async () => {
        try {
            // const response = await axios.get('https://blog.project-srv.site/?get_json=y', {
            //     params: { _page: page.value, _limit: limit.value }
            // })
            const response = await axios.get('https://blog.project-srv.site/?get_json=y')

            data.value = response.data
            // console.log('Успешный запрос!')
        } catch {
            alert('Ошибка запроса!')
            // console.log('Ошибка запроса!')
        } finally {
            isDataLoading.value = false
        }
    }
    data.value = tempData
    onMounted(fetching)

    return {
        data, isDataLoading, limit, page
    }
}