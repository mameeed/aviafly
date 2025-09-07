<template>
    <section class="ll-home-contacts">
        <div class="ll-home-contacts__content container">
            <div class="ll-home-contacts__titling">
                <h1>{{ $t("contacts.title") }}</h1>
                <p class="title">{{ $t("contacts.desc") }}</p>
            </div>

            <div class="ll-home-contacts__body">
                <!-- <div class="ll-home-contacts__form">
                    <div class="ll-home-contacts__form-elements">
                        <input
                            type="text"
                            placeholder="Ваше Ф.И.О" />
                        <input
                            type="text"
                            placeholder="Ваш номер телефона" />
                        <textarea
                            rows=""
                            cols=""
                            placeholder="Текст вашего обращения"></textarea>
                    </div>

                    <comp-button
                        class="ll-home-contacts__form-btn"
                        :tpbtnText="'Отправить'"
                        :tpbtnUid="'button-header-main'" />

                    <img
                        class="ll-home-contacts__form-circle"
                        src="@/assets/images/round.svg"
                        alt="leadlogic" />
                </div> -->
                <div class="ll-home-contacts__info">
                    <div class="ll-home-contacts__info-block ll-contblock">
                        <h3 class="ll-contblock__title">{{ $t("contacts.infos") }}</h3>
                        <a
                            href="#!"
                            class="ll-contblock__link"
                            target="_blank">
                            <!-- <img
                                class="ll-contblock__icon"
                                src="@/assets/icons/icon-contact-address.svg"
                                alt="icon" /> -->
                            <p class="ll-contblock__label">{{ $t("contacts.ceo") }}:</p>
                            <p class="ll-contblock__text">Umirova Gulchehra Xusan qizi</p>
                        </a>
                        <a
                            href="#!"
                            class="ll-contblock__link"
                            target="_blank">
                            <!-- <img
                                class="ll-contblock__icon"
                                src="@/assets/icons/icon-contact-address.svg"
                                alt="icon" /> -->
                            <p class="ll-contblock__label">{{ $t("contacts.address__title") }}:</p>
                            <p class="ll-contblock__text">{{ $t("contacts.address") }}</p>
                        </a>
                        <a
                            href="#!"
                            class="ll-contblock__link"
                            target="_blank">
                            <!-- <img
                                class="ll-contblock__icon"
                                src="@/assets/icons/icon-contact-phone.svg"
                                alt="icon" /> -->
                            <p class="ll-contblock__label">{{ $t("contacts.fax__title") }}:</p>
                            <p class="ll-contblock__text">+998 (71) 230-05-14</p>
                        </a>
                        <a
                            href="#!"
                            class="ll-contblock__link"
                            target="_blank">
                            <!-- <img
                                class="ll-contblock__icon"
                                src="@/assets/icons/icon-contact-phone.svg"
                                alt="icon" /> -->
                            <p class="ll-contblock__label">{{ $t("contacts.phone__title") }}:</p>
                            <p class="ll-contblock__text">+998 (71) 230-05-14</p>
                        </a>
                    </div>
                    <div class="ll-home-contacts__info-block ll-contblock">
                        <h3 class="ll-contblock__title">{{ $t("contacts.socials") }}</h3>

                        <a
                            href="#!"
                            class="ll-contblock__link"
                            target="_blank">
                            <!-- <img
                                class="ll-contblock__icon"
                                src="@/assets/icons/icon-contact-instagram.svg"
                                alt="icon" /> -->
                            <p class="ll-contblock__label">Instagram:</p>
                            <p class="ll-contblock__text">aviafly_uz</p>
                        </a>
                        <a
                            href="#!"
                            class="ll-contblock__link"
                            target="_blank">
                            <!-- <img
                                class="ll-contblock__icon"
                                src="@/assets/icons/icon-contact-facebook.svg"
                                alt="icon" /> -->
                            <p class="ll-contblock__label">Facebook:</p>
                            <p class="ll-contblock__text">Aviafly Tourism Agency</p>
                        </a>
                        <a
                            href="#!"
                            class="ll-contblock__link"
                            target="_blank">
                            <!-- <img
                                class="ll-contblock__icon"
                                src="@/assets/icons/icon-contact-tiktok.svg"
                                alt="icon" /> -->
                            <p class="ll-contblock__label">Tik Tok:</p>
                            <p class="ll-contblock__text">aviafly.uz</p>
                        </a>
                    </div>
                </div>
                <div class="ll-home-contacts__map">
                    <iframe
                        class="ll-home-contacts__map-iframe"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1181.01190451209!2d69.25877695567908!3d41.27502337266943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a97426d41b3%3A0x3ba0bbf69593ebbb!2sBabur%20Street%2069%2F8%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1728230587583!5m2!1sen!2s"
                        style="border: 0"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// import CompButton from "@/components/compButton.vue";

export default {
    name: "sectionContacts",
    // components: {CompButton},
};
</script>

<style scope lang="scss">
@import "./style.scss";
</style>
