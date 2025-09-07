<template>
    <div
        class="header__lang"
        :class="{opened: hideSelect}">
        <ul>
            <li
                @click="toggleLang"
                class="header__lang-item active">
                {{ currentLang.name }}
            </li>
            <li
                @click="changeLanguage(item)"
                class="header__lang-item"
                v-for="item in languages"
                :key="item.code">
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "compLang",
    data() {
        return {
            hideSelect: false,
            languages: [
                {code: "uz", name: "Oʻzbekcha"},
                {code: "ru", name: "Русский"},
            ],
        };
    },
    methods: {
        toggleLang() {
            this.hideSelect = !this.hideSelect;
        },

        changeLanguage(item) {
            this.$i18n.locale = item.code;
            localStorage.setItem("lang", item.code);
            this.hideSelect = !this.hideSelect;
            this.$eventBus.$emit("locale-changed", item.code);
        },
    },
    computed: {
        currentLang() {
            return this.languages.find((element) => element.code === this.$i18n.locale);
        },
    },
};
</script>

<style scoped>
.header__lang {
    min-width: 120px;
    padding: 0 5px;
    height: 35px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    position: relative;
    cursor: pointer;
}

.header__lang ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: #ffffff;
    border-radius: 10px;
    z-index: 1;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    max-height: 35px;
    overflow: hidden;
}

.header__lang-item {
    width: 100%;
    height: 35px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #222;
    font-size: 12px;
    cursor: pointer;
    font-weight: 600;
    cursor: pointer;
}

.header__lang-item:hover {
    opacity: 0.7;
    cursor: pointer;
}

.header__lang-item.active {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    opacity: 1;
    visibility: visible;
}

.header__lang-item.active::before {
    width: 20px;
    height: 20px;
    background: url("@/assets/icons/icon-globe.svg") no-repeat center center/contain;
    content: "";
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-right: 10px;
    z-index: 2;
    flex-shrink: 0;
}

.header__lang-item.active::after {
    width: 15px;
    height: 15px;
    background: url("@/assets/icons/icon-dropdown.svg") no-repeat center center;
    content: "";
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: 5px;
    flex-shrink: 0;
    z-index: 2;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
}

.header__lang.opened ul {
    max-height: 200px;
}

.header__lang.opened .header__lang-item.active::after {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
}
</style>
