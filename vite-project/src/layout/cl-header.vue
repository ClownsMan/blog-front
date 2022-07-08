<template>
  <div class="toolbar">
    <div class="collapse_icon" @click="setCollapse()">
      <!-- <el-icon v-if="isCollapse"><fold /></el-icon> -->
      <!-- <el-icon v-else><expand /></el-icon> -->
    </div>
    <div class="header_right">
      <!-- <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          测试用户<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="a">个人信息</el-dropdown-item>
            <el-dropdown-item command="b">登出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown> -->
    </div>
  </div>
</template>
<script setup>
import { Fold, Expand, ArrowDown } from "@element-plus/icons";
import { ref, defineEmits } from "vue";
const isCollapse = ref(true);
const emit = defineEmits(["changeCollapse"]);
const setCollapse = function () {
  isCollapse.value = !isCollapse.value;
  emit("changeCollapse", isCollapse.value);
};
const handleCommand = function (val) {
  if(val === a) { // 个人信息

  }else if(val === b) { // 登出

  }
}
</script>
<style lang="scss" scoped>
.toolbar {
  height: 100%;
  text-align: left;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  .collapse_icon {
    padding: 14px 0;
    i {
      font-size: 30px;
    }
  }
  .header_right {
    padding: 20px 0;
  }
}
</style>
