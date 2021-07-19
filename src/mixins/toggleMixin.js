export default {
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hidePopup() {
            this.popupVisible = false;
        }
    },
    mounted() {
    }
}