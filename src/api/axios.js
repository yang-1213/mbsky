import axios from "axios";
import { Message } from "view-design";

let $http = axios.create({
    // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
    // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
    baseURL: "https://fathomless-scrubland-09364.herokuapp.com",
    params: {},
    // `data` 是作为请求主体被发送的数据
    // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
    // 在没有设置 `transformRequest` 时，必须是以下类型之一：
    // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
    // - 浏览器专属：FormData, File, Blob
    // - Node 专属： Stream
    data: {},

    // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
    // 如果请求话费了超过 `timeout` 的时间，请求将被中断
    timeout: 20000,

    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: false, // default

    // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: "json", // default

    // `responseEncoding` indicates encoding to use for decoding responses
    // Note: Ignored for `responseType` of 'stream' or client-side requests
    responseEncoding: "utf8", // default

    // `onUploadProgress` 允许为上传处理进度事件
    onUploadProgress: function(progressEvent) {
        // Do whatever you want with the native progress event
    },

    // `onDownloadProgress` 允许为下载处理进度事件
    onDownloadProgress: function(progressEvent) {
        // 对原生进度事件的处理
    },

    // `maxContentLength` 定义允许的响应内容的最大尺寸
    maxContentLength: 20000,

    // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
    validateStatus: function(status) {
        return status >= 200 && status < 300; // default
    },

    // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
    // 如果设置为0，将不会 follow 任何重定向
    maxRedirects: 5, // default
});

// 添加请求拦截器
$http.interceptors.request.use(
    function(config) {
        Message.loading({
            content: "加载中...",
            duration: 0,
        });
        // 在发送请求之前做些什么
        return config;
    },
    function(error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
$http.interceptors.response.use(
    function(response) {
        // 关闭提示
        Message.destroy();
        // 对响应数据做点什么
        if (response.status == 200) {
            /**
             *    名称	类型	说明
             *    code	String	返回的错误码 -1/-2/-3/200 参数缺失/频繁/错误/成功
             *    msg	String	返回的状态信息
             */
            if (response.data.code) {
                if (response.data.code == 200) {
                    Message.success("请求成功");
                    return response.data;
                } else {
                    Message.error(response.data.msg);
                    return Promise.reject(response.data.msg);
                }
            }
            return response.data;
        } else {
            return Promise.reject(response.statusText);
        }
    },
    function(error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

export const $get = $http.get;
export const $post = $http.post;

export default $http;
