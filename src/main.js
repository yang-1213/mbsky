import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// iviewUI
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
Vue.use(ViewUI);

Vue.config.productionTip = false;

// 全局混入
import globalMixin from "./common/js/mixin";
Vue.mixin(globalMixin);

// Api
import $api from "./api";
Vue.prototype.$http = $api;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
