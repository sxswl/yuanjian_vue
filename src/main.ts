import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

// 创建应用实例
const app = createApp(App);

// 设置全局属性
app.config.globalProperties.$httpUrl = "http://849p815u54.zicp.fun:80";

// 配置 axios 的基础路径
axios.defaults.baseURL = "http://849p815u54.zicp.fun:80";

// 挂载路由和应用
app.use(router).mount("#app");
