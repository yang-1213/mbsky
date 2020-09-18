<template>
    <!-- 主页 -->
    <div>
        <div class="home y-flex">
            <h1>常用工具库</h1>
        </div>
        <NavList />
    </div>
</template>

<script>
import NavList from "@/components/nav/nav";
export default {
    name: "Home",
    components: { NavList },
};
</script>
<style lang="less" scoped>
.home {
    h1 {
        cursor: pointer;
    }
    min-height: 100vh;
    background-image: url("//gitee.com/yang-1213/images/raw/master/src/20200427004155.jpg");
    background-size: cover;
}
</style>
