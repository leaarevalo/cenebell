import * as VueRouter from "vue-router";


const routes = [
  { path: "/", component: () => import("./components/Login.vue") },
  { path: "/home", component: () => import("./views/HomeView.vue") },
  { path: "/patients", component: () => import("./views/Patients.vue") },
];

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;