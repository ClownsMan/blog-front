import { createRouter, createWebHistory } from 'vue-router'

const routers = [
    // {
    //     path: 'Login',
    //     component: () => import('@/views/sys/login.vue')
    // },
    {
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: '/dashboard',
        component: () => import('@/view/Home/dashboard.vue'),
    },
    // 博客管理
    {
        path: '/blog',
        component: () => import('@/view/Blog/index.vue'),
    },
    {
        path: '/blog/detail',
        component: () => import('@/view/Blog/detail/index.vue'),
    },
    // 工具管理
    {
        path: '/tool',
        component: () => import('@/view/Tool/index.vue'),
    },
    {
        path: '/tool/zz',
        component: () => import('@/view/Tool/Zz/index.vue'),
    },
    {
        path: '/tool/gj',
        component: () => import('@/view/Tool/Gj/index.vue'),
    },
    {
        path: '/tool/sf',
        component: () => import('@/view/Tool/Sf/index.vue'),
    },
    // 面试管理
    {
        path: '/interview',
        component: () => import('@/view/Tinterview/index.vue'),
    },
    // 个人信息管理
    {
        path: '/userInfo',
        component: () => import('@/view/UserInfo/index.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routers
})

export default router