import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Read from "../views/Read.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/resultado/:user",
        name: "Read",
        component: Read,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
