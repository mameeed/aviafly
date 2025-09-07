<template>
    <section class="tp-subintro">
        <compAnim
            :size="'900px'"
            :top="'40%'"
            :left="'-10%'" />
        <div class="tp-subintro__titling container">
            <h1>{{ $t("about.title") }}</h1>
            <!-- <p class="title">Мы — команда, которая открывает для вас мир через комфортные и незабываемые путешествия, с индивидуальным подходом к каждому клиенту</p> -->
        </div>
        <div class="tp-subintro__content container">
            <div class="tp-subintro__image">
                <img
                    class="tp-subintro__image-file"
                    src="@/assets/images/static/bg-subintro.jpeg"
                    alt="image" />
            </div>
            <div class="tp-subintro__desc">
                <h2 class="tp-subintro__title">{{ $t("about.subtitle") }}</h2>
                <p class="tp-subintro__desctxt">{{ $t("about.desc1") }}</p>

                <p class="tp-subintro__desctxt">{{ $t("about.desc2") }}</p>

                <p class="tp-subintro__desctxt">{{ $t("about.desc3") }}</p>
                <ul class="tp-subintro__cons">
                    <li class="tp-subintro__cons-item">{{ $t("about.cons1") }}</li>
                    <li class="tp-subintro__cons-item">{{ $t("about.cons2") }}</li>
                    <li class="tp-subintro__cons-item">{{ $t("about.cons3") }}</li>
                    <li class="tp-subintro__cons-item">{{ $t("about.cons4") }}</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import compAnim from "@/views/home/sectionAnimator";

export default {
    name: "sectionAbout",
    components: {compAnim},
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
