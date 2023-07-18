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
      {
        path: "/app/sectors",
        name: "sectors",
        component: () => import("@/views/SectorView.vue"),
      },
      {
        path: "/app/plan",
        name: "plan",
        component: () => import("@/views/PlanView.vue"),
      },
      {
        path: "/app/start",
        name: "start",
        component: () => import("@/views/StartView.vue"),
      },
      {
        path: "/app/grow",
        name: "grow",
        component: () => import("@/views/GrowView.vue"),
      },
      {
        path: "/app/trading-services",
        name: "trading-services",
        component: () => import("@/views/TradingServicesView.vue"),
      },
      {
        path: "/app/sezs-services",
        name: "sezs-services",
        component: () => import("@/views/SezsServicesView.vue"),
      },
      {
        path: "/app/industrial-services",
        name: "industrial-services",
        component: () => import("@/views/IndustrialServicesView.vue"),
      },
      {
        path: "/app/expansion-diversification",
        name: "expansion-diversification-services",
        component: () => import("@/views/ExpansionDiversificationView.vue"),
      },
      {
        path: "/app/construction-permits",
        name: "construction-permits",
        component: () => import("@/views/ConstructionPermitsView.vue"),
      },
      {
        path: "/app/utility-connections",
        name: "utility-connections",
        component: () => import("@/views/UtilityConnections.vue"),
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
