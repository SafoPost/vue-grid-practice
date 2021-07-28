import axios from "axios";
import {onMounted, ref} from "vue";

export function usePosts() {
    const posts = ref([])
    const isPostsLoading = ref(true)

    const page = ref(1)
    const limit = ref(10)
    const totalPosts = ref(0)
    const totalPages = ref(0)

    const firstPost = ref(0)
    const lastPost = ref(0)

    const fetching = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: page.value,
                    _limit: limit.value
                }
            });
            console.log('response.data', response.data)
            totalPosts.value = response.headers['x-total-count']
            totalPages.value = Math.ceil(totalPosts.value / limit.value)
            firstPost.value = response.data[0].id
            lastPost.value = response.data[limit.value - 1].id

            posts.value = response.data;

        } catch (e) {
            alert('Ошибка!');
        } finally {
            isPostsLoading.value = false;
        }
    }

    onMounted(fetching)
    return {
        posts, isPostsLoading,
        page, limit, totalPages, totalPosts, firstPost, lastPost, fetching
    }
}