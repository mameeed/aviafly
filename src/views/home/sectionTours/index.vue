<template>
    <section class="thetours">
        <compAnim
            :size="'700px'"
            :top="'10%'"
            :right="'-10%'" />
        <div class="thetours__content container">
            <h1>{{ $t("tours.title") }}</h1>
            <p class="title">{{ $t("tours.desc") }}</p>

            <div class="thetours__list">
                <div
                    v-for="(item, index) in thedata"
                    :key="index"
                    class="thetourcard">
                    <img
                        :src="item.image"
                        alt="tour" />

                    <div class="thetourcard__content">
                        <h3>{{ $t(item.title) }}</h3>
                        <p class="desc">{{ $t(item.desc) }}</p>
                        <p class="price">
                            {{ $t("common.from") }}
                            <span>{{ $t(item.duration) }}</span>
                        </p>

                        <div class="thetourcard__content-btn">
                            <comp-button
                                @click.native="
                                    () => {
                                        openModal({title: $t('common.leaveapp'), url: '/form-main', form: 'Форма бронирования тура'});
                                    }
                                "
                                :tpbtnText="$t('common.book')"
                                :tpbtnUid="'button-header-main'" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import compButton from "@/components/compButton.vue";
import compAnim from "../sectionAnimator";
import {mapActions} from "vuex";

export default {
    components: {compButton, compAnim},
    name: "sectionTours",
    data() {
        return {
            thedata: [
                {
                    image: require(`@/assets/images/tours/europe.jpg`),
                    title: "tours.tourcard1.title",
                    desc: "tours.tourcard1.desc",
                    price: "789$",
                    duration: "tours.tourcard1.duration",
                },
                {
                    image: require(`@/assets/images/tours/turkey.jpg`),
                    title: "tours.tourcard2.title",
                    desc: "tours.tourcard2.desc",
                    price: "449$",
                    duration: "tours.tourcard2.duration",
                },
                {
                    image: require(`@/assets/images/tours/uae.jpg`),
                    title: "tours.tourcard3.title",
                    desc: "tours.tourcard3.desc",
                    price: "399$",
                    duration: "tours.tourcard3.duration",
                },
                {
                    image: require(`@/assets/images/tours/egypt.jpg`),
                    title: "tours.tourcard4.title",
                    desc: "tours.tourcard4.desc",
                    price: "399$",
                    duration: "tours.tourcard4.duration",
                },
                {
                    image: require(`@/assets/images/tours/maldives.jpg`),
                    title: "tours.tourcard5.title",
                    desc: "tours.tourcard5.desc",
                    price: "789$",
                    duration: "tours.tourcard5.duration",
                },
                {
                    image: require(`@/assets/images/tours/thailand.jpg`),
                    title: "tours.tourcard6.title",
                    desc: "tours.tourcard6.desc",
                    price: "559$",
                    duration: "tours.tourcard6.duration",
                },
            ],
        };
    },
    methods: {
        ...mapActions(["openModal"]),
    },
};
</script>

<style scoped>
@import "./style.css";
</style>
