<template>
  <div id="basicLayout">
    <!-- 整体布局 -->
    <a-layout class="layout">
      <!-- Header 部分 -->
      <a-layout-header class="header">
        <div class="logo">
          <img src="../assets/logo.png" alt="logo" />
          <span>远见汽车销售预测系统</span>
        </div>
        <div class="auth-buttons">
          <a-button type="link">个人信息</a-button>
          <a-button type="primary">用户信息</a-button>
        </div>
      </a-layout-header>

      <!-- Content 部分 -->
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>

      <!-- Footer 部分 -->
      <a-layout-footer class="footer">
        <div class="footer-links">
          <a href="#">关于我们</a>
          <a href="#">联系我们</a>
          <a href="#">帮助中心</a>
          <a href="#">隐私条款</a>
          <a href="#">用户协议</a>
          <a href="#">商家合作</a>
        </div>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
// 如果需要加载 logo，请替换 "logo.png" 为实际的图片路径
</script>

<style scoped>
/* 整体布局样式 */
.layout {
  min-height: 100vh;
}

/* Header 样式 */
.header {
  position: fixed; /* 固定在页面顶部 */
  top: 0;
  left: 0;
  width: 100%; /* 确保宽度覆盖整个页面 */
  z-index: 1000; /* 确保 header 在其他内容之上 */
  background: #fff; /* 背景色，避免透明导致内容重叠 */
  border-bottom: 1px solid #e8e8e8;
  height: 70px; /* 高度设置，保持一致 */
  display: flex;
  justify-content: center; /* 居中内容 */
  align-items: center;
  padding: 0 16px; /* 减少左右 padding */
  box-sizing: border-box; /* 确保 padding 不影响布局 */
}

.logo {
  display: flex;
  align-items: center;
  font-size: 20px; /* 字体可以稍大 */
  font-weight: bold;
  flex: 1; /* 左侧占据剩余空间，保证按钮靠右 */
}

.logo img {
  height: 40px; /* 图片高度随 header 增长 */
  margin-right: 12px; /* 增大 logo 和文字之间的间距 */
}

.auth-buttons {
  display: flex;
  gap: 12px; /* 增加按钮间距 */
}

.auth-buttons a {
  font-size: 16px; /* 文字大小调整 */
}

/* Content 样式 */
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  padding: 50px 0;
  min-height: calc(100vh - 130px); /* 减去 header 和 footer 的高度 */
  margin-top: 70px; /* 为内容留出 header 的高度空间，避免遮挡 */
}

/* Footer 样式 */
.footer {
  text-align: center;
  background: #fff;
  padding: 12px 24px;
  height: 60px;
  border-top: 1px solid #e8e8e8;
}

.footer-links a {
  margin: 0 12px;
  color: #999;
  text-decoration: none;
}

.footer-links a:hover {
  color: #333;
}
</style>
