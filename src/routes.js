import * as VueRouter from "vue-router";


const routes = [
  { path: "/", component: () => import("./views/HomeView.vue") },
  { path: "/patients", component: () => import("./views/Patients.vue") },
  { path: "/supplies", component: () => import("./views/Supplies.vue") },
  { path: "/maintenance", component: () => import("./views/Maintenance.vue") },
];

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;