// home主页
export default [
    {
        path: "/home",
        name: "Home",
        alias: "/",
        component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
    },
];
