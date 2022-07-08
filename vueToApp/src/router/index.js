import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const createRouter = () =>
  new Router({
    mode: "history", // require service support
    scrollBehavior: () => ({ y: 0 }),
    base: window.__POWERED_BY_QIANKUN__ ? '/micplugin' : '/',
    routes: [
      {
        path: "/vueToApp",
        component: require("@/components/HelloWorld.vue").default,
      },
    ],
  });

const router = createRouter();

export default router;
