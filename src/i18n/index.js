import Vue from "vue";
import VueI18n from "vue-i18n";
import ru from "./locales/ru";
import uz from "./locales/uz";
// import en from "./locales/en";

Vue.use(VueI18n);

const messages = {ru, uz};
const lang = localStorage.getItem("lang") || "uz";
// const savedLanguage = localStorage.getItem('language') || 'en';
// const lang = "ru";
const i18n = new VueI18n({
    locale: lang,
    messages,
    fallbackLocale: "uz",
});
// Vue.prototype.$locale = {
//     change(lang) {
//         localStorage.setItem("lang", lang);
//         i18n.locale = lang;
//     },
//     current() {
//         return i18n.locale;
//     },
// };

export default i18n;
