import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/PortfolioHome.vue";
import About from "../views/PortfolioAbout.vue";
import Contact from "../views/PortfolioContact.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/About", component: About },
  { path: "/Contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
