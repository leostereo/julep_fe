
const routes = [
  {
    path: "/",
    component: () => import("src/layouts/LightBlue.vue"),
    children: [{ path: "", component: () => import("pages/Login.vue") }]
  },
  {
    path: "/dashboard",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/Dashboard.vue") }]
  },
  {
    path: "/login",
    component: () => import("src/layouts/LightBlue.vue"),
    children: [{ path: "", component: () => import("pages/Login.vue") }]
  },
  {
    path: "/account",
    component: () => import("src/layouts/LightBlue.vue"),
    children: [{ path: "", component: () => import("pages/Account.vue") }]
  },
  {
    path: "/account2",
    component: () => import("src/layouts/LightBlue.vue"),
    children: [{ path: "", component: () => import("pages/Account2.vue") }]
  },
  {
    path: "/activity/1",
    component: () => import("layouts/BasicLayout.vue"),
    children: [{ path: "", component: () => import("pages/activity/1.vue") }]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes
