import { createRouter, createMemoryHistory, RouteRecordRaw } from "vue-router";
import BasicLayout from "@/layouts/BasicLayout.vue"; // 导入 BasicLayout
import AdminLayout from "@/layouts/AdminLayout.vue"; // 导入 AdminLayout
import CommonLayout from "@/layouts/CommonLayout.vue";
import Portal from "../views/PortalView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: BasicLayout, // 使用 BasicLayout 作为布局
    children: [
      {
        path: "",
        name: "portal",
        component: Portal,
      },
    ],
  },
  {
    path: "/commonusers",
    component: CommonLayout, // 使用 AdminLayout 作为布局
    children: [
      {
        path: "",
        name: "commonusers",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Usersinfo.vue"),
      },
    ],
  },
  {
    path: "/salesforecast",
    component: CommonLayout,
    children: [
      {
        path: "",
        name: "salesforecast",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/SalesForecast.vue"),
      },
    ],
  },
  {
    path: "/changepassword",
    component: CommonLayout,
    children: [
      {
        path: "",
        name: "changepassword",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/ChangePassword.vue"),
      },
    ],
  },
  {
    path: "/forecastlist",
    component: CommonLayout,
    children: [
      {
        path: "",
        name: "forecastlist",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/ForecastList.vue"),
      },
    ],
  },
  {
    path: "/historicalsales",
    component: CommonLayout,
    children: [
      {
        path: "",
        name: "historicalsales",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/HistoricalSales.vue"
          ),
      },
    ],
  },
  {
    path: "/loginview",
    component: CommonLayout,
    children: [
      {
        path: "",
        name: "loginview",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
      },
    ],
  },
  {
    path: "/modelsdetails",
    component: CommonLayout,
    children: [
      {
        path: "",
        name: "modelsdetails",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/ModelsDetails.vue"),
      },
    ],
  },
  {
    path: "/registerview",
    component: CommonLayout,
    children: [
      {
        path: "",
        name: "registerview",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/RegisterView.vue"),
      },
    ],
  },
  {
    path: "/userslist",
    component: AdminLayout,
    children: [
      {
        path: "",
        name: "userslist",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/UsersList.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
