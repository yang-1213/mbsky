<template>
    <div id="app">
        <router-view />
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
};
</script>
<style lang="less">
@import "assets/css/common.less";
</style>
