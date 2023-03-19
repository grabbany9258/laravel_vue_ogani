import { createRouter, createWebHistory } from "vue-router";

import BackHome from "./back_components/Home.vue";

const routes = [
    { path: "/dashboard", component: BackHome, name: "home.index" },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
    // linkActiveClass: "active-link",
    // linkExactActiveClass: "exact-active-link",
});

export default router;
