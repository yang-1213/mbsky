// vue.config.js
const path = require("path");
module.exports = {
    publicPath: "/web", //部署应用包时的基本 URL
    outputDir: "dist", //生产环境构建文件的目录
    assetsDir: "assets", //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    productionSourceMap: false,
    pluginOptions: {
        // 自动引入全局less
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [path.resolve(__dirname, "./src/assets/css/*.less")],
        },
    },
};
