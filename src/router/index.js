import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        meta: {title: "Главная"},
        component: () => import(/* webpackChunkName: "home" */ "../views/home/home.vue"),
    },
    {
        path: "/news/:id",
        name: "news-inner",
        meta: {title: "Новость"},
        component: () => import(/* webpackChunkName: "singlenews" */ "../views/news/newsSingle.vue"),
    },
    {
        path: "/construction",
        name: "construction",
        meta: {title: "Страница на стадии разработки"},
        component: () => import(/* webpackChunkName: "construction" */ "@/components/compConstruction.vue"),
    },
    {
        path: "*",
        name: "notfound",
        meta: {title: "Упс"},
        component: () => import(/* webpackChunkName: "notfound" */ "@/components/compNotFound.vue"),
    },
];

const router = new VueRouter({
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return {x: 0, y: 0};
        }
    },
    mode: "history",
    base: process.env.BASE_URL,
    routes: routes,
});

export default router;
