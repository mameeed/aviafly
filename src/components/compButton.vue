<template>
    <component
        :is="tpbtnLink ? 'router-link' : 'button'"
        :to="tpbtnLink"
        :id="tpbtnUid"
        :target="getTarget(tpbtnTarget)"
        class="tpbtn"
        :class="{'tp-loading': tpbtnLoading}">
        <!-- <img
            v-if="tpbtnLeftIcon"
            class="tpbtn__icon left"
            :src="require(`@/assets/icons/${tpbtnLeftIcon}.svg`)"
            alt="button icon" /> -->
        <p class="tpbtn__text">{{ tpbtnText }}</p>
        <!-- <img
            v-if="tpbtnRightIcon"
            class="tpbtn__icon right"
            :src="require(`@/assets/icons/${tpbtnRightIcon}.svg`)"
            alt="button icon" /> -->
        <img
            class="tpbtn__loading"
            src="@/assets/icons/icon-loading.svg"
            alt="button icon" />
    </component>
</template>

<script>
export default {
    name: "component-button",
    props: {
        tpbtnUid: {
            type: String,
            required: true,
        },
        tpbtnText: {
            type: String,
            required: true,
        },
        tpbtnLink: {
            type: String,
            default: null,
        },
        tpbtnLeftIcon: {
            type: String,
        },
        tpbtnRightIcon: {
            type: String,
        },
        tpbtnTarget: {
            type: Boolean,
            default: false,
        },
        tpbtnLoading: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        // handleClick() {
        //     // Handle the click event when tpbtnLink is not provided
        //     if (!this.tpbtnLink) {
        //         // Perform custom action or emit an event
        //     }
        // },
        getTarget(target) {
            return target ? "_blank" : "self";
        },
    },
};
</script>
