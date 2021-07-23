import {ref, computed, onMounted} from "vue";

export function useSetSpanStyle(style) {
    // const spanStyle = ref('')

    const spanStyle = computed( () => {
        let spanWithFixedWidth = document.querySelectorAll('.js-calc-width')
        let arrNum = []
        console.log(style)

        spanWithFixedWidth.forEach(span => arrNum.push(span.offsetWidth))

        style.value = `width: ${Math.max(...arrNum)}px;
          min-width: ${Math.max(...arrNum)}px;
          display: block;
          margin: auto;
          text-align: left;
          white-space: nowrap`
        console.log(style)
        spanWithFixedWidth.forEach(span => span.style = style.value)
        return style.value
    })

    return {
        spanStyle
    }
}