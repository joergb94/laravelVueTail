import { createRouter, createWebHistory } from "vue-router";
import inputComponent from "@/components/defaultComponents/inputComponent.vue";
import LoginFormComponent from '@/components/login/views/LoginFormComponent.vue';
import app from "@/base-app";

const routes = [
    { path: '/login', component: {} },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

app.use(router);

app.component('input-component', inputComponent);
app.component('login-form-component', LoginFormComponent);
app.mount("#app");
