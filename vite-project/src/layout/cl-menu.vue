<template>
  <div class="menu_box">
    <div class="logo" @click="goToHome">
      <img src="../assets/logo.png" alt="" />
      <span class="title">boke</span>
    </div>
    <div class="aside_menu">
      <el-menu router default-active="blog" class="el-menu-vertical" collapse="false">
        <el-menu-item index="blog">
          <el-icon><Collection /></el-icon>
          <template #title>
            <span>博客管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="tool">
          <el-icon><Briefcase /></el-icon>
          <template #title>
            <span>工具管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="interview">
          <el-icon><Edit /></el-icon>
          <template #title>
            <span>面试管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="userInfo">
          <el-icon><Avatar /></el-icon>
          <template #title>
            <span>个人信息管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="vueToApp">
          <el-icon><Avatar /></el-icon>
          <template #title>
            <span>vueToApp</span>
          </template>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script setup>
import { Collection, Briefcase, Edit, Avatar } from "@element-plus/icons";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();

const goToHome = () => {
  router.push({
    path: '/dashboard',
  });
}
</script>
<style lang="scss" scoped>
::v-deep.menu_box {
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #eee;
  .logo {
    // width: inherit;
    // position: fixed;
    // top: 0;
    // left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    img {
      width: 40px;
      height: 40px;
    }
    .title {
      font-size: 24px;
    }
  }
  .aside_menu {
    height: calc(100% - 80px);
    display: flex;
    align-items: center;
    padding: 100px 0;
    .el-menu {
      border: none;
    }
  }
}
</style>
