import { createRouter, createWebHistory } from "vue-router";
import BackHome from "./front_components/Home.vue";

const routes = [
    {
        path: "/",
        component: BackHome,
        name: "home.index",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
    // linkActiveClass: "active-link",
    // linkExactActiveClass: "exact-active-link",
});

export default router;
