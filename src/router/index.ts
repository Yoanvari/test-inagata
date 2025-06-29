import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import Loan from "../pages/Loan.vue";

const routes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/loan", component: Loan },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
