<template>
  <div class="commonusers">
    <!-- 用户信息标题 -->
    <h1>用户个人信息页面</h1>

    <!-- 用户基本信息卡片 -->
    <div class="user-card">
      <div class="user-item">
        <span class="label">用户名：</span>
        <span class="value">{{ userInfo.username }}</span>
      </div>
      <div class="user-item">
        <span class="label">账号：</span>
        <span class="value">{{ userInfo.account }}</span>
      </div>
      <div class="user-item">
        <span class="label">邮箱：</span>
        <span class="value">{{ userInfo.email }}</span>
      </div>
    </div>

    <!-- 跳转按钮 -->
    <div class="button-group">
      <!-- 跳转到销售预测页面 -->
      <a-button type="primary" @click="goToSalesForecast"
        >查看销售预测</a-button
      >

      <!-- 修改个人信息 -->
      <a-button type="default" @click="editUserInfo">修改信息</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

// 模拟的用户数据
const userInfo = {
  username: "张三",
  account: "zhangsan123",
  email: "zhangsan@example.com",
};

// 路由对象
const router = useRouter();

// 跳转到销售预测页面
const goToSalesForecast = () => {
  router.push({ name: "salesforecast" }); // 假设路由名称为 salesforecast
};

// 修改用户信息（示例，仅弹出提示框）
const editUserInfo = () => {
  alert("修改用户信息功能正在开发中...");
};
</script>

<style scoped>
.commonusers {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* 标题样式 */
h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

/* 用户信息卡片样式 */
.user-card {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.user-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.label {
  font-weight: bold;
  color: #666;
}

.value {
  color: #333;
}

/* 按钮组样式 */
.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.button-group a-button {
  width: 48%; /* 让两个按钮均分宽度 */
}
</style>
