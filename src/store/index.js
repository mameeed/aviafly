// store/index.js
import Vue from "vue";
import Vuex from "vuex";
import i18n from "../i18n";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        modal: {
            isOpen: false,
            title: i18n.t("common.leaveapp"),
            url: "/form-main",
            desc: i18n.t("common.leaveappdesc"),
            form: "Главная форма обратной связи",
        },
    },
    mutations: {
        MODAL_SET_DATA(state, payload) {
            if (payload) {
                Object.keys(payload).forEach((element) => {
                    state.modal[element] = payload[element];
                });
            }
            state.modal.isOpen = true;
        },
        MODAL_CLOSE(state) {
            state.modal.isOpen = false;
        },
    },
    actions: {
        openModal({commit}, payload) {
            commit("MODAL_SET_DATA", payload);
        },
        closeModal({commit}) {
            commit("MODAL_CLOSE");
        },
    },
    getters: {
        modalParams: (state) => state.modal,
    },
});

export default store;
