<template>
    <!-- 404页面-->
    <div class="page404 y-flex">
        <div>
            <div>404</div>
            <Button type="primary" @click="back">返回首页</Button>
        </div>
    </div>
</template>
<script>
export default {
    name: "404",
    methods: {
        back() {
            this.$router.replace({ name: "Home" });
        },
    },
};
</script>
<style lang="less" scoped>
.page404 {
    height: 100vh;
    font-size: 30px;
    font-weight: 600;
    color: #333;
}
</style>
