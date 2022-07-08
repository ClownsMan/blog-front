<template>
  <div class="module_item task">
    <div class="header">Task</div>
    <div class="content">
      <div v-for="item in taskList" :key="item.id" class="task_item">
        <el-icon><Position /></el-icon>
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { Position } from "@element-plus/icons";
import { reactive, ref } from "vue";
const taskList = reactive([
  {
    id: 1,
    name: '任务一'
  },
  {
    id: 2,
    name: '任务二'
  },
])
</script>
<style lang="scss" scoped>
.task {
  flex-basis: 100%;
  .header {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 10px;
  }
  .content {
    display: flex;
    flex-direction: column;
    .task_item {
      width: 100%;
      background-color: #fff;
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 10px;
    }
  }
}
</style>
