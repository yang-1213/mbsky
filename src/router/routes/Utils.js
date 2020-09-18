// 工具页面
export default {
    path: "/utils/:id",
    name: "Utils",
    props: true,
    component: () => import(/* webpackChunkName: "utils" */ "@/views/Utils.vue"),
};
