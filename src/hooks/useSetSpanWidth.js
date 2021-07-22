import {ref, computed} from "vue";

export function useSetSpanWidth() {
    const searchQuery = ref('')

    const spanWithFixedWidth = document.querySelectorAll('.js-calc-width')
    let arrNum = []

    spanWithFixedWidth.forEach(span => {
        arrNum.push(span.offsetWidth)
    })
    console.log(arrNum)

    //
    // const sortedAndSearchedPosts = computed(() => {
    //     return sortedPosts.value.filter(post => post.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
    // })

    return {
        // searchQuery, sortedAndSearchedPosts
    }
}