import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/PortfolioHome.vue";

const routes = [
  { path: "/", component: Home },
  // other routes...
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
