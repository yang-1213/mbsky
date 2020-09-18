import Vue from "vue";
import VueRouter from "vue-router";
// 路由加载效果
import Nprogress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(VueRouter);

/**
 * 要搜索的文件夹目录
 * 是否还应该搜索它的子目录，
 * 以及一个匹配文件的正则表达式。
 */
let contexts = require.context("./routes", false, /\.js$/);
let routes = [];
contexts.keys().map((name) => {
    let ret = contexts(name).default;
    if (Array.isArray(ret)) {
        routes = [...routes, ...ret];
    } else {
        routes.push(ret);
    }
});

// 添加404页面
routes.push({
    path: "*",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "@/views/404.vue"),
});

const router = new VueRouter({
    // mode: "history",
    base: process.env.BASE_URL,
    routes,
    // 滚动行为
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (savedPosition) {
                    resolve(savedPosition);
                } else {
                    resolve({ x: 0, y: 0 });
                }
            }, 500);
        });
    },
});

router.beforeEach((to, from, next) => {
    // 每次切换页面时，调用进度条
    Nprogress.start();
    next();
});
router.afterEach(() => {
    // 在即将进入新的页面组件前，关闭掉进度条
    Nprogress.done();
});

export default router;
