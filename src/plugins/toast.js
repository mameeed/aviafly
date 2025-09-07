import Vue from "vue";
import ToastComponent from "@/components/compToast.vue";

const ToastConstructor = Vue.extend(ToastComponent);

function showToast(body, duration = 7000) {
    const instance = new ToastConstructor();
    instance.$mount(document.createElement("div"));
    document.body.appendChild(instance.$el);
    instance.show(body, duration);
}

const ToastPlugin = {
    install(Vue) {
        Vue.prototype.$toast = showToast;
    },
};

export default ToastPlugin;
