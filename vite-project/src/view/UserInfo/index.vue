<template>
    <div class="userInfo">
        <!-- 虚拟人物视图 -->
        <div class="userInfo_left">
          <img src="@/assets/touxiang.png" alt="">
        </div>
        <!-- 属性面板/道具展示 -->
        <div class="userInfo_right">
          <el-form :model="form" label-width="120px">
            <el-form-item label="昵称">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="座右铭">
              <el-input v-model="form.thing" />
            </el-form-item>
          </el-form>
        </div>
    </div>
</template>
<script setup>
import { reactive } from "vue";
const people = reactive({
  leg: 111,
});
const form = reactive({
  name: '平头',
  thing: '前端'
});
</script>
<style lang="scss" scoped>
.userInfo {
    display: flex;
}
.userInfo_left {
  height: 500px;
  width: 300px;
  background: #eee;
  margin: 0 20px;
  img {
    width: 100%;
    // height: 100%;
  }
}
.userInfo_right {
}
</style>
