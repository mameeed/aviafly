<template>
    <button
        @click="
            () => {
                openModal({
                    title: $t('common.leaveapp'),
                    url: '/form-main',
                    form: 'Форма кнопки поддержки',
                });
            }
        "
        id="button-form-follower"
        class="tp-popcontact">
        <img
            class="tp-popcontact__image"
            src="@/assets/icons/icon-cphone.svg"
            alt="contact" />
    </button>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "component-followform",
    methods: {
        ...mapActions(["openModal"]),
    },
};
</script>
