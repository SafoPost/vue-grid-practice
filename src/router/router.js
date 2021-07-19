import {createRouter, createWebHistory} from "vue-router";
import Main from "../pages/Main";
import PostPage from "../pages/PostPage";
import About from "../pages/About";
import SinglePostPage from "../components/SinglePostPage";
import PostPageWidthStore from "../pages/PostPageWidthStore";
import PostPageCompositionApi from "../pages/PostPageCompositionApi";
import GridPage from "../pages/GridPage";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: SinglePostPage
    },
    {
        path: '/store',
        component: PostPageWidthStore
    },
    {
        path: '/composition',
        component: PostPageCompositionApi
    },
    {
        path: '/grid',
        component: GridPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;