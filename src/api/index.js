import Vue from "vue";
import $http, { $post, $get } from "./axios";

var host = "/api/mxg";
// 获取host基本路径
!(async function getApi() {
    try {
        let ret = await $get("/getApi");
        if (ret.status) host = ret.url.substring(1);
    } catch (error) {
        console.log(error);
    }
    return;
})();

let apiInfo = {
    // 获取qq信息
    getQqInfo(qq) {
        return $get(`${host}/QqInfo?apiKey=f5435869130febe415fee7ba6ba91292&qq=${qq}`);
    },
};

export default apiInfo;
