<template>
    <section class="tp-comments">
        <div class="tp-comments__titling container">
            <h1>{{ $t("feeds.title") }}</h1>
            <p class="title">{{ $t("feeds.desc") }}</p>
        </div>
        <div class="tp-comments__container container">
            |
            <div
                ref="comments__swiper"
                class="tp-comments__swiper swiper">
                <div class="swiper-wrapper">
                    <div
                        v-for="(comment, index) in thedata"
                        class="tp-comments__slide swiper-slide"
                        :key="'el_' + index">
                        <div class="tp-comments__ava">
                            <img
                                :src="comment.image"
                                alt="user ava" />
                        </div>
                        <p class="tp-comments__text">{{ $t(comment.text) }}</p>

                        <div class="tp-comments__commentator">
                            <h3>{{ $t(comment.name) }}</h3>
                            <p>{{ $t(comment.position) }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Swiper, {Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default {
    name: "sectionFeeds",
    mounted() {
        new Swiper(this.$refs.comments__swiper, {
            modules: [Autoplay],
            spaceBetween: 50,
            // loop: true,
            // autoplay: {
            //     delay: 5000,
            //     disableOnInteraction: false,
            //     pauseOnMouseEnter: true,
            // },
        });
    },
    data() {
        return {
            thedata: [
                {
                    image: require("@/assets/images/template/users/user-1.jpeg"),
                    name: "feeds.feed1.name",
                    position: "feeds.feed1.position",
                    text: "feeds.feed1.desc",
                },
                {
                    image: require("@/assets/images/template/users/user-3.png"),
                    name: "feeds.feed2.name",
                    position: "feeds.feed2.position",
                    text: "feeds.feed2.desc",
                },
                {
                    image: require("@/assets/images/template/users/user-2.jpeg"),
                    name: "feeds.feed3.name",
                    position: "feeds.feed3.position",
                    text: "feeds.feed3.desc",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
