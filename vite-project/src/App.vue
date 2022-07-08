<script setup>
import { ref } from "vue";
import ClMenu from "@/layout/cl-menu.vue";
import ClHeader from "@/layout/cl-header.vue";
import ClUser from "@/layout/cl-user.vue";
const isCollapse = ref(false);
const changeCollapse = function (data) {
  isCollapse.value = data;
};
</script>

<template>
 <el-container class="layout-container-app">
    <el-aside>
      <ClMenu :isCollapse="isCollapse" />
    </el-aside>

    <el-container>
      <el-header>
        <ClHeader @changeCollapse="changeCollapse" />
      </el-header>

      <el-main>
        <router-view></router-view>
        <!-- <router-view> -->
          <div id="subapp-viewport"></div>
        <!-- </router-view> -->
      </el-main>
    </el-container>
    <ClUser></ClUser>
  </el-container>
</template>

<style>
#app {
  height: 100%;
}
.el-scrollbar__view {
  height: 100%;
}
.el-menu {
  height: 100%;
}
.el-aside {
  width: auto;
}
.el-main {
  padding: 20px 0;
}
</style>
