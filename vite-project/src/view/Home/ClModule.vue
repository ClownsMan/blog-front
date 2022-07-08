<template>
    <div class="dashboard_content">
        <blog></blog>
        <task />
    </div>
</template>
<script setup>
import Blog from "@/components/moduleList/blog.vue"
import Task from "@/components/moduleList/task.vue"
</script>
<style lang="scss" scoped>
.dashboard_content {
    background-color: #eee;
    height: calc(100% - 100px);
    display: flex;
    padding: 20px;
    flex-wrap:wrap;
}
</style>
