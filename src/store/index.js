import {createStore} from "vuex";
import {postModule} from "./postModule";

export default createStore({
    state: () => ({

    }),
    modules: {
        post: postModule
    }
})