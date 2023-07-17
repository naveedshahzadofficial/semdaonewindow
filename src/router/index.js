import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import { LayoutDefault } from "@/layouts";
const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/app",
    name: "app",
    component: LayoutDefault,
    children: [
      {
        path: "/app/dashboard",
        name: "dashboard",
        component: () => import("@/views/DashboardView.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  // catch all redirect to home page
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
