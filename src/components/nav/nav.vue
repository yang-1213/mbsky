<template>
    <!-- 导航组件 -->
    <div class="content y-flex">
        <template v-for="(item, name) in navList">
            <div class="item" :key="name" @click="jump(name)">
                <div class="title" :title="item.title">{{ item.title }}</div>
                <div class="des">{{ item.des }}</div>
            </div>
        </template>
    </div>
</template>

<script>
import navList from "@/common/js/utilsConfig.js"; //工具组件
export default {
    name: "Nav",
    data() {
        return {
            navList,
        };
    },
    methods: {
        jump(name) {
            this.$router.push({ name: "Utils", params: { id: name } });
        },
    },
};
</script>
<style lang="less" scoped>
.content {
    margin: 20px auto;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
        width: 30%;
        padding: 10px;
        border-radius: 6px;
        cursor: pointer;
        background: linear-gradient(#ff006a, rgba(255, 0, 179, 0.534), rgb(163, 8, 85));
        .title {
            font-size: 20px;
        }
        .des {
            font-size: 16px;
        }
    }
}
</style>
