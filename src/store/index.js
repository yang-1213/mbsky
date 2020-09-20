import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        apiHost: "", //工具集api基本路径
    },
    mutations: {
        changeApiHost(state, host) {
            state.apiHost = host;
        },
    },
    actions: {},
    modules: {},
    plugins: [createPersistedState()],
});
