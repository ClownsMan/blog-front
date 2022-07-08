<template>
  <!-- 搜索区域 -->
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="Approved by">
      <el-input v-model="formInline.user" placeholder="Approved by" />
    </el-form-item>
    <el-form-item label="Activity zone">
      <el-select v-model="formInline.region" placeholder="Activity zone">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSearch">搜索</el-button>
    </el-form-item>
  </el-form>
  <!-- 按钮区域 -->
  <div class="btn_list">
    <el-button type="primary" @click="toAdd">新增</el-button>
    <el-button plain>删除</el-button>
  </div>
  <!-- 表格 -->
  <el-table :data="tableData" style="width: 100%">
    <el-table-column
      :prop="item.field"
      :label="item.name"
      :width="item.width"
      v-for="item in tableColumn"
      :key="item.field"
    />
  </el-table>
</template>
<script setup>
import { reactive } from "vue";
const tableData = reactive([
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
]);
const tableColumn = reactive([
  {
    field: "date",
    name: "日期",
    width: 180,
  },
  {
    field: "name",
    name: "名字",
    width: 180,
  },
  {
    field: "address",
    name: "地址",
    width: 180,
  },
]);
const formInline = reactive({
  user: "",
  region: "",
});
const onSearch = () => {};
const toAdd = () => {
    this.$router.push('/blog/detail')
};
</script>
