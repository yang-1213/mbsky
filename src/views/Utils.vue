<template>
    <div class="home">
        <div class="title">{{ info.title }}</div>
        <div class="title">{{ info.des }}</div>
        <div class="y-flex">
            <Input v-model.trim="value" placeholder="请输入参数" clearable style="width: 60%" />
            <Button type="primary" @click="submit" class="btn">发送</Button>
        </div>
    </div>
</template>

<script>
import config from "@/common/js/utilsConfig.js";
export default {
    props: ["id"],
    name: "Utils",
    data() {
        return {
            info: {},
            value: "",
        };
    },
    created() {
        this.init();
    },
    watch: {
        $route(to, from) {
            if (to.params.id != from.params.id) {
                this.id = to.params.id;
                this.init(); //重新加载数据
            }
        },
    },
    methods: {
        init() {
            let info = config[this.id];
            if (!info) return this.$router.replace({ name: "404" });
            this.info = info;
        },
        submit() {
            if (!this.value) {
                return this.$Message.warning({
                    background: true,
                    content: "请输入参数",
                });
            }
            this.$http[this.id](this.value).then((res) => {
                console.log(res);
            });
        },
    },
};
</script>
<style lang="less">
.home {
    padding: 20px;
    .btn {
        margin-left: 20px;
    }
}
</style>
