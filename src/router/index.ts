import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import Loan from "../pages/Loan.vue";
import Setting from "../pages/Setting.vue";
import EditProfile from "../pages/EditProfile.vue";
import Preferences from "../pages/Preferences.vue";
import Security from "../pages/Security.vue";

const routes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/loan", component: Loan },
  {
    path: "/setting",
    component: Setting,
    children: [
      { path: "", redirect: "/setting/edit-profile" },
      { path: "edit-profile", component: EditProfile },
      { path: "preferences", component: Preferences },
      { path: "security", component: Security },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
