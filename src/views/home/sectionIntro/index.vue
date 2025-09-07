<template>
    <section class="s-intro s-intro--slides">
        <div class="intro-slider">
            <div
                class="intro-slider-img bg-opacity-40"
                :style="`background-image: url('${require('@/assets/images/slides/slide-5.jpg')}')`"></div>
            <!-- <div
                class="intro-slider-img"
                :style="`background-image: url('${require('@/assets/images/slides/slide-2.jpg')}')`"></div>
            <div
                class="intro-slider-img"
                :style="`background-image: url('${require('@/assets/images/slides/slide-3.jpg')}')`"></div> -->
        </div>

        <div class="grid-overlay">
            <div class="grid-overlay__dots">
                <span class="grid-overlay__dots-item"></span>
                <span class="grid-overlay__dots-item"></span>
                <span class="grid-overlay__dots-item"></span>
                <span class="grid-overlay__dots-item"></span>
                <span class="grid-overlay__dots-item"></span>
            </div>
            <div></div>
        </div>

        <div class="row intro-content">
            <div class="column">
                <div class="intro-content__text">
                    <h3>Aviafly</h3>
                    <h1>{{ $t("intro.title") }}</h1>
                    <p>{{ $t("intro.desc") }}</p>
                    <comp-button
                        @click.native="
                            () => {
                                openModal({title: $t('common.leaveapp'), url: '/form-main', form: 'Форма с превью блока'});
                            }
                        "
                        :tpbtnText="$t('common.leaveapp2')"
                        :tpbtnUid="'button-header-main'" />
                </div>

                <!-- <div class="intro-content__bottom">
                    <div class="intro-content__counter-wrap">
                        <h4>До конца предложения:</h4>
                        <div class="counter">
                            <div
                                class="counter__time days"
                                :class="{animated: animated}">
                                {{ days }}
                                <span>Д</span>
                            </div>
                            <div
                                class="counter__time hours"
                                :class="{animated: animated}">
                                {{ hours }}
                                <span>Ч</span>
                            </div>
                            <div
                                class="counter__time minutes"
                                :class="{animated: animated}">
                                {{ minutes }}
                                <span>М</span>
                            </div>
                            <div
                                class="counter__time seconds"
                                :class="{animated: animated}">
                                {{ seconds }}
                                <span>С</span>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>

        <ul class="intro-social">
            <li>
                <a href="#0">
                    <i
                        class="fab fa-facebook"
                        aria-hidden="true"></i>
                </a>
            </li>
            <li>
                <a href="#0">
                    <i
                        class="fab fa-twitter"
                        aria-hidden="true"></i>
                </a>
            </li>
            <li>
                <a href="#0">
                    <i
                        class="fab fa-instagram"
                        aria-hidden="true"></i>
                </a>
            </li>
            <li>
                <a href="#0">
                    <i
                        class="fab fa-dribbble"
                        aria-hidden="true"></i>
                </a>
            </li>
            <li>
                <a href="#0">
                    <i
                        class="fab fa-behance"
                        aria-hidden="true"></i>
                </a>
            </li>
        </ul>

        <div class="intro-scroll">
            <a
                href="#info"
                class="scroll-link smoothscroll">
                Aviafly
            </a>
        </div>
    </section>
</template>

<script>
import {mapActions} from "vuex";
import compButton from "@/components/compButton.vue";
export default {
    components: {compButton},
    name: "SectionIntroduction",
    data() {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            interval: null,
            animated: false,
            targetDate: "2024-11-04T23:59:59",
        };
    },
    methods: {
        ...mapActions(["openModal"]),
        calculateCountdown() {
            const now = new Date().getTime();
            const countDownDate = new Date(this.targetDate).getTime();
            const distance = countDownDate - now;

            if (distance < 0) {
                clearInterval(this.interval);
                return;
            }

            this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
            this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

            this.animated = true; // Animation trigger
            setTimeout(() => {
                this.animated = false; // Remove the animation class after 1 second
            }, 1000);
        },
        startCountdown() {
            this.calculateCountdown();
            this.interval = setInterval(this.calculateCountdown, 1000);
        },
    },
    mounted() {
        this.startCountdown();
    },
    beforeDestroy() {
        clearInterval(this.interval);
    },
};
</script>

<style scoped>
@import "./style.css";
</style>
