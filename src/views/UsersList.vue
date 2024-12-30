<template>
  <div class="userslist">
    <h1>用户信息页面</h1>

    <div v-if="loading" class="loading">正在加载用户数据...</div>

    <div v-else-if="error" class="error">{{ error }}</div>

    <div v-else class="user-list">
      <div class="user-card" v-for="user in users" :key="user.id">
        <div class="user-item username">
          <span class="label">用户名：</span>
          <span class="value">{{ user.userName }}</span>
        </div>
        <div class="user-item account">
          <span class="label">账号：</span>
          <span class="value">{{ user.account }}</span>
        </div>
        <div class="user-item email">
          <span class="label">邮箱：</span>
          <span class="value">{{ user.email }}</span>
        </div>
        <button @click="editUser(user)" class="edit-button">修改</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

// 定义响应式变量
const users = ref([]); // 存储用户数据
const loading = ref(true); // 加载状态
const error = ref<string | null>(null); // 错误信息

// 定义获取用户数据的异步函数
const fetchUsers = async () => {
  try {
    const response = await axios.get("/adminusers/list");
    if (response.data.code === 200) {
      users.value = response.data.data; // 成功地将用户数据赋值
    } else {
      error.value = `获取用户数据失败：${response.data.msg}`;
    }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      error.value = `请求失败：${err.message}`;
    } else {
      error.value = `请求失败：未知错误`;
    }
  } finally {
    loading.value = false; // 无论成功或失败，都结束加载状态
  }
};

// 调用获取用户数据的函数
fetchUsers();
</script>

<style scoped>
.userslist {
  max-width: 900px; /* 页面宽度 */
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
  font-size: 24px;
  font-weight: bold;
}

/* 用户列表样式 */
.user-list {
  display: flex;
  flex-direction: column;
  gap: 16px; /* 卡片之间的间距 */
}

/* 用户卡片样式 */
.user-card {
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: grid; /* 使用网格布局 */
  grid-template-columns: 1fr 1fr 1fr auto; /* 三列布局 + 修改按钮列 */
  gap: 12px; /* 列之间的间距 */
  align-items: center; /* 垂直居中 */
}

/* 用户项样式 */
.user-item {
  display: flex;
  align-items: center;
}

/* 标签样式 */
.label {
  font-weight: bold;
  color: #666;
  margin-right: 4px; /* 标签和值之间的间距 */
}

/* 值样式 */
.value {
  color: #333;
  word-break: break-word; /* 防止长内容溢出 */
}

/* 修改按钮样式 */
.edit-button {
  background-color: #4caf50; /* 按钮的背景颜色 */
  color: white; /* 按钮的字体颜色 */
  border: none; /* 去掉边框 */
  padding: 8px 12px; /* 内边距 */
  border-radius: 4px; /* 圆角 */
  cursor: pointer; /* 鼠标悬停时变为手势 */
  transition: background-color 0.3s; /* 添加过渡效果 */
}

.edit-button:hover {
  background-color: #45a049; /* 按钮的悬停效果 */
}

/* 针对字段对齐的修正 */
.username {
  justify-content: flex-start; /* 左对齐 */
}

.account {
  justify-content: flex-start; /* 居中对齐 */
}

.email {
  justify-content: flex-start; /* 右对齐 */
}
</style>
