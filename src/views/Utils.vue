<template>
    <div class="home">
        <div class="title">{{ info.title }}</div>
        <div class="title">{{ info.des }}</div>
        <Input v-model.trim="value" placeholder="请输入参数" clearable style="width: 60%" />
        <button @click="submit">发送</button>
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
        let info = config[this.id];
        if (!info) return this.$router.replace({ name: "404" });
        this.info = info;
    },
    methods: {
        submit() {
            this.$http[this.id](this.value).then((res) => {
                console.log(res);
            });
        },
    },
};
</script>
<style lang="less">
.home {
}
</style>
