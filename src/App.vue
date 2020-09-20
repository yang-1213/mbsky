<template>
    <div id="app">
        <transition :name="transitionName" mode="out-in">
            <router-view class="child-view"></router-view>
        </transition>
        <!-- 返回顶部 -->
        <BackTop :height="100" :bottom="150">
            <div class="top">返回<br />顶端</div>
        </BackTop>
    </div>
</template>
<script>
export default {
    created() {
        // 加载鼠标点击爱心特效
        this.$nextTick(() => {
            import("@/assets/js/love.js");
        });
    },
    data() {
        return {
            transitionName: "",
        };
    },
    watch: {
        $route(to, from) {
            const toDepth = to.path.split("/").length;
            const fromDepth = from.path.split("/").length;
            this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
        },
    },
};
</script>
<style lang="less">
@import "assets/css/common.less";
</style>
