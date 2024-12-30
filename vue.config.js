const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      "/adminusers": {
        // 代理的路径
        target: "http://849p815u54.zicp.fun:80", // 目标后端地址
        changeOrigin: true, // 是否更改源
        pathRewrite: {
          // 可选：重写路径
          "^/adminusers": "/adminusers", // 这里可以重写路径
        },
      },
    },
  },
};
