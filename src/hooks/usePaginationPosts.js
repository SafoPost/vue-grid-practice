import _ from 'lodash';
import {computed, onMounted, ref} from "vue";

export function usePaginationPosts(arrPosts) {
    const page = ref(1)
    const limit = ref('10')
    const totalPages = ref(0)
    const allPosts = ref([])
    const currentPosts = ref([])

    // console.log('arrPosts', arrPosts)

    allPosts.value = _.chunk(arrPosts.value, +limit.value)
    totalPages.value = _.size(allPosts.value)
    currentPosts.value = allPosts.value[page.value - 1] || allPosts.value[0]

    return {
        page, limit, totalPages, allPosts, currentPosts
    }
}