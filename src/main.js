import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMask from "v-mask";
import VueApi from "./plugins/axios";
import VueToast from "./plugins/toast";
import i18n from "./i18n";

import "@/assets/sass/common.scss";

Vue.config.productionTip = false;
Vue.prototype.$eventBus = new Vue(); // Create an event bus
Vue.prototype.$api = VueApi;
Vue.use(VueMask);
Vue.use(VueToast);
// Vue.use(store);
// Vue.use(VuePortal);

new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
}).$mount("#app");
