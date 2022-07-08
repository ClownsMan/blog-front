<template>
  <div class="user_box">
    <div class="user_header">
      <el-icon><bell /></el-icon>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          测试用户<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="a">个人信息</el-dropdown-item>
            <el-dropdown-item command="b">登出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="user_middle">
      <img src="../assets/user_task.png" alt="" srcset="" />
      <div class="middle_title">任务日历</div>
    </div>
    <div class="user_date">
      <el-calendar v-model="deteValue" />
    </div>
  </div>
</template>

<script setup>
import { Bell, ArrowDown } from "@element-plus/icons";
import { ref } from "vue"
const deteValue = ref(new Date())
</script>
<style lang="scss" scoped>
::v-deep.user_box {
  width: 300px;
  padding: 20px;
  border-left: 1px solid #eee;
  .user_header {
    display: flex;
    justify-content: space-around;
  }
  .user_middle {
    padding: 10px 0;
    border-bottom: 1px solid #eee;
    img {
      width: 100%;
    }
    .middle_title {
      text-align: center;
      font-weight: 600;
    }
  }
}
</style>
