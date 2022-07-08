<template>
  <div class="tools">
    <div
      class="tool_item"
      v-for="item in toolList"
      :key="item.id"
      @click="showDetail(item.url)"
    >
      <span class="tool_item_icon">{{ item.name.slice(0, 1) }}</span>
      <span class="tool_item_name">{{ item.name }}</span>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();

const toolList = reactive([
  {
    id: 1,
    name: "正则匹配",
    url: '/tool/zz'
  },
  {
    id: 2,
    name: "工具函数查询",
    url: '/tool/gj'
  },
  {
    id: 3,
    name: "三方插件查询",
    url: '/tool/sf'
  },
]);
const showDetail = (url) => {
    console.log(999, url)
  router.push({
    path: url,
  });
};
</script>
<style lang="scss" scoped>
::v-deep.tools {
  display: flex;
  justify-content: center;
  .tool_item {
    width: 130px;
    height: 130px;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 18px;
    background-color: skyblue;
    border-radius: 50%;
    margin-right: 40px;
    .tool_item_icon {
      font-weight: 600;
      font-size: 30px;
      margin-bottom: 10px;
      padding-top: 20px;
    }
    .tool_item_name {
      padding-bottom: 20px;
    }
  }
  .tool_item:hover {
    background-color: rgb(61, 171, 215);
    cursor: pointer;
  }
}
</style>
