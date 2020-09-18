// 响应式布局
export default {
    data() {
        return {
            show: true, //默认显示
        };
    },
    mounted() {
        //可用于设置自适应屏幕，根据获得的可视宽度（兼容性）判断是否显示
        let w = document.documentElement.offsetWidth || document.body.offsetWidth;
        if (w < 1000) {
            this.show = false;
        }
    },
};
