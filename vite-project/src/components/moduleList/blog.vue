<template>
  <div class="module_item">
    <div class="header">Blog Box</div>
    <div class="box">
      <div class="box_left">
        <div class="box_content">
          <div class="box_item black" v-for="item in blogList" :key="item.type">
            <span
              ><el-icon><bell /></el-icon
            ></span>
            <span>博客总数</span>
            <span>23</span>
          </div>
          <div class="box_item blue" v-for="item in blogList" :key="item.type">
            <span
              ><el-icon><bell /></el-icon
            ></span>
            <span>编辑总数</span>
            <span>23</span>
          </div>
          <div class="box_item white" v-for="item in blogList" :key="item.type">
            <span
              ><el-icon><bell /></el-icon
            ></span>
            <span>编辑总数</span>
            <span>23</span>
          </div>
        </div>
        <div class="box_bottom">最新月上新博客比例提高： 10%</div>
      </div>
      <div class="box_right">
        <img src="@/assets/huojian.png" alt="" />
        <div class="add_btn" @click="goToBlog">
          <el-icon><Plus /></el-icon>
          <span>创建博客</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Plus } from "@element-plus/icons";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router"
const router = useRouter()
const blogList = ref([{ name: 111, num: 1111 }]);
const goToBlog = () => {
  router.push('/blog')
}
</script>
<style lang="scss" scoped>
.module_item {
  //   width: 40%;
}
.header {
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
}
.box {
  border-radius: 20px;
  background-color: #fff;
  padding: 26px;
  display: flex;
  .box_left {
    padding-right: 20px;
    margin-right: 20px;
    border-right: 1px solid #eee;
    .box_content {
      display: flex;
      margin-bottom: 10px;
      .box_item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 10px;
        border-radius: 20px;
        padding: 10px 16px;
        color: #fff;
        box-sizing: border-box;
        span {
          margin-bottom: 20px;
        }
        span:last-child {
          margin: 0;
        }
      }
      .box_item.black {
        background-color: #000;
      }
      .box_item.blue {
        background-color: rgb(133, 188, 251);
      }
      .box_item.white {
        border: 1px solid #eee;
        color: #000;
      }
      .box_item:last-child {
        margin: 0;
      }
    }
    .box_bottom {
      font-size: 14px;
    }
  }
  .box_right {
    position: relative;
    padding-top: 100px;
    img {
      width: 200px;
      position: absolute;
      top: -86px;
      left: 50%;
      transform: translateX(-50%);
    }
    .add_btn {
      border: 1px solid #eee;
      border-radius: 10px;
      padding: 4px 10px;
      display: flex;
      align-items: center;
      i {
        margin-right: 10px;
        font-size: 18px;
      }
      span {
        font-size: 16px;
      }
    }
    .add_btn:hover {
      cursor: pointer;
    }
  }
}
</style>
