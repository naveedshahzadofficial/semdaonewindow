import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import { LayoutDefault } from "@/layouts";
const routes = [
  {
    path: "/",
    name: "login",
    meta: { title: "Login" },
    component: LoginView,
  },
  {
    path: "/app",
    name: "app",
    meta: { title: "app" },
    component: LayoutDefault,
    children: [
      {
        path: "/app/dashboard",
        name: "dashboard",
        meta: { title: "Dashboard" },
        component: () => import("@/views/DashboardView.vue"),
      },
      {
        path: "/app/plan",
        name: "plan",
        meta: { title: "Plan" },
        component: () => import("@/views/PlanView.vue"),
      },
      {
        path: "/app/start",
        name: "start",
        meta: { title: "Start" },
        component: () => import("@/views/StartView.vue"),
      },
      {
        path: "/app/grow",
        name: "grow",
        meta: { title: "Grow" },
        component: () => import("@/views/GrowView.vue"),
      },
      {
        path: "/app/trading-services",
        name: "trading-services",
        meta: { title: "Trading Services" },
        component: () => import("@/views/TradingServicesView.vue"),
      },
      {
        path: "/app/sezs-services",
        name: "sezs-services",
        meta: { title: "SEZs Services" },
        component: () => import("@/views/SezsServicesView.vue"),
      },
      {
        path: "/app/industrial-services",
        name: "industrial-services",
        meta: { title: "Industrial Services" },
        component: () => import("@/views/IndustrialServicesView.vue"),
      },
      {
        path: "/app/expansion-diversification",
        name: "expansion-diversification",
        meta: { title: "Expansion Diversification" },
        component: () => import("@/views/ExpansionDiversificationView.vue"),
      },
      {
        path: "/app/construction-permits",
        name: "construction-permits",
        meta: { title: "Construction Permits" },
        component: () => import("@/views/ConstructionPermitsView.vue"),
      },
      {
        path: "/app/utility-connections",
        name: "utility-connections",
        meta: { title: "Utility Constructions" },
        component: () => import("@/views/UtilityConnectionsView.vue"),
      },
      {
        path: "/app/business-information-resources",
        name: "business-information-resources",
        meta: { title: "Business Information resources" },
        component: () => import("@/views/BusinessInformationResourcesView.vue"),
      },
      {
        path: "/app/cutlery",
        name: "cutlery",
        meta: { title: "Cutlery" },
        component: () => import("@/views/CutleryView.vue"),
      },
      {
        path: "/app/pharmaceuticals",
        name: "pharmaceuticals",
        meta: { title: "Pharmaceuticals" },
        component: () => import("@/views/PharmaceuticalsView.vue"),
      },
      {
        path: "/app/agro-food",
        name: "agro-food",
        meta: { title: "AgroFood" },
        component: () => import("@/views/AgrofoodView.vue"),
      },
      {
        path: "/app/auto-parts",
        name: "auto-parts",
        meta: { title: "Autoparts" },
        component: () => import("@/views/AutopartsView.vue"),
      },
      {
        path: "/app/general-registrations-licenses",
        name: "general-registrations-licenses",
        meta: { title: "General Registrations Licenses" },
        component: () => import("@/views/GeneralRegistrationsLicensesView.vue"),
      },
      {
        path: "/app/sme-resources",
        name: "sme-resources",
        meta: { title: "SME Resources" },
        component: () => import("@/views/SMEResourcesView.vue"),
      },
      {
        path: "/app/complaints-feedback",
        name: "complaints-feedback",
        meta: { title: "Complaints Feedback" },
        component: () => import("@/views/ComplaintsFeedbackView.vue"),
      },
      {
        path: "/app/company",
        name: "company",
        meta: { title: "Company" },
        component: () => import("@/views/CompanyView.vue"),
      },
    ],
  },
  // catch all redirect to home page
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = (to.meta.title || "Dashboard") + " - SME ONE WINDOW";
  next();
});

export default router;
