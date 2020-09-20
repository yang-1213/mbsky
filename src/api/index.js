import Vue from "vue";
import $http, { $post, $get } from "./axios";

let apiInfo = {
    // 获取qq信息
    getQqInfo(qq) {
        return $get(`/QqInfo`, {
            params: {
                apiKey: "f5435869130febe415fee7ba6ba91292",
                qq,
            },
        });
    },
};

export default apiInfo;
