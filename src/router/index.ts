import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
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
          import(
            /* webpackChunkName: "about" */ "../views/CommonUsersinfo.vue"
          ),
      },
    ],
  },
  {
    path: "/adminusers",
    component: AdminLayout,
    children: [
      {
        path: "",
        name: "adminusers",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/AdminUsersinfo.vue"),
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
    path: "/deleteuser",
    component: AdminLayout,
    children: [
      {
        path: "",
        name: "deleteuser",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/DeleteUser.vue"),
      },
    ],
  },
  {
    path: "/insertuser",
    component: AdminLayout,
    children: [
      {
        path: "",
        name: "insertuser",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/InsertUser.vue"),
      },
    ],
  },
  {
    path: "/saleslist",
    component: CommonLayout,
    children: [
      {
        path: "",
        name: "saleslist",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/SalesList.vue"),
      },
    ],
  },
  {
    path: "/selectuser",
    component: AdminLayout,
    children: [
      {
        path: "",
        name: "selectuser",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/SelectUser.vue"),
      },
    ],
  },
  {
    path: "/updateuser",
    component: AdminLayout,
    children: [
      {
        path: "",
        name: "updateuser",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/UpdateUser.vue"),
      },
    ],
  },
  {
    path: "/bindemail",
    component: CommonLayout,
    children: [
      {
        path: "",
        name: "bindemail",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/BindEmail.vue"),
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
    path: "/findpassword",
    component: CommonLayout,
    children: [
      {
        path: "",
        name: "findpassword",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/FindPassword.vue"),
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
    path: "/modelsquery",
    component: CommonLayout,
    children: [
      {
        path: "",
        name: "modelsquery",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/ModelsQuery.vue"),
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
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
