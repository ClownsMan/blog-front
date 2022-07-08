<template>
  <div class="dashboard">
    <div class="dashboard_header">
      <div class="header_title">Active Task</div>
      <p class="header_info">You can xxxxxxx</p>
    </div>
    <cl-module />
  </div>
</template>
<script setup>
import { inject, onMounted } from "vue";
import ClModule from "./ClModule.vue";
</script>
<style lang="scss" scoped>
.dashboard {
  height: 100%;
  .dashboard_header {
    padding: 10px 20px;
    .header_title {
      font-weight: 600;
      font-size: 24px;
      margin-bottom: 10px;
    }
    .header_info {
      font-size: 12px;
      color: rgb(130, 130, 130);
    }
  }

}
</style>
