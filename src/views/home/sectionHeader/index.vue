<template>
    <header
        class="tp-header__wrapper"
        :class="{scrolled: isScrolled, opened: isMobile}">
        <div
            ref="tpHeader"
            class="tp-header">
            <div class="tp-header__content container">
                <router-link
                    to="/"
                    class="tp-header__logo">
                    <img
                        class="tp-header__logo-image"
                        src="@/assets/images/logo.svg"
                        alt="logo" />
                </router-link>

                <nav class="tp-header__nav">
                    <ul class="tp-header__nav-list">
                        <li
                            v-for="(item, index) in links"
                            :key="'elem' + index"
                            class="tp-navlink">
                            <a
                                :href="item.link"
                                class="tp-navlink__label">
                                {{ $t(`header.${item.label}`) }}
                            </a>
                            <ul
                                v-if="item.children"
                                class="tp-navlink tp-dropdown">
                                <li
                                    v-for="(inneritem, index) in item.children"
                                    :key="'subelem' + index"
                                    class="tp-navlink tp-sublink">
                                    <component
                                        :is="inneritem.link ? 'router-link' : 'a'"
                                        :to="inneritem.link"
                                        class="tp-navlink__label tp-sublink__label">
                                        {{ inneritem.label }}
                                    </component>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <div class="tp-header__action">
                    <CompLang />
                    <CompButton
                        @click.native="
                            () => {
                                openModal({title: $t('common.leaveapp'), url: '/form-main', form: 'Форма кнопки Хэдера'});
                            }
                        "
                        class="tp-header__action-btn"
                        :tpbtnText="this.$t('common.leaveapp')"
                        :tpbtnUid="'button-header-main'" />
                </div>

                <div class="tp-header__mobile">
                    <div
                        @click="isMobile = !isMobile"
                        class="tp-header__mobile-btn"></div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import {mapActions} from "vuex";
import CompButton from "@/components/compButton.vue";
import CompLang from "@/components/compLanguage.vue";

export default {
    name: "sectionHeader",
    components: {CompButton, CompLang},
    data() {
        return {
            isScrolled: false,
            isMobile: false,
            links: [
                {
                    label: "nav_about",
                    link: "#about",
                },
                {
                    label: "nav_tours",
                    link: "#tours",
                },
                {
                    label: "nav_gallery",
                    link: "#gallery",
                },
                {
                    label: "nav_feeds",
                    link: "#feeds",
                },
                {
                    label: "nav_contact",
                    link: "#contact",
                },
            ],
        };
    },
    computed: {
        headerHeight() {
            return this.$refs.tpHeader?.offsetHeight || 0;
        },
        screenWidth() {
            return window.innerWidth;
        },
    },
    mounted() {
        ["mousewheel", "scroll"].forEach((evt) => window.addEventListener(evt, this.handleScroll, false));
    },
    methods: {
        ...mapActions(["openModal"]),
        handleScroll() {
            let appearAt = this.headerHeight;
            let removeAt = 0;

            if (this.screenWidth < 577) return;
            if (this.screenWidth < 992) {
                appearAt = this.headerHeight;
                removeAt = 0;
            }

            if (window.pageYOffset > appearAt) {
                this.isScrolled = true;
            } else if (this.isScrolled && window.pageYOffset <= appearAt && window.pageYOffset > removeAt) {
                return;
            } else {
                this.isScrolled = false;
            }
        },
        openMobile() {
            this.isMobile = !this.isMobile;
        },
    },
    watch: {
        $route() {
            this.isMobile = false;
        },
    },
};
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>
