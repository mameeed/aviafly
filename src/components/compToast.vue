<template>
    <div
        v-if="visible"
        ref="tpToast"
        class="tp-toast"
        :class="[`tp-${size}`, `tp-${type}`]">
        <div
            ref="tpToastContent"
            class="tp-toast__content"
            :style="{'--duration': `${duration}ms`}">
            <div class="tp-toast__icon">
                <img
                    class="tp-toast__icon-image"
                    :src="images[type]"
                    alt="" />
            </div>
            <div class="tp-toast__body">
                <h1 class="tp-toast__body-title">{{ body.title }}</h1>
                <p class="tp-toast__body-desc">{{ body.desc }}</p>
            </div>
            <div class="tp-toast__action">
                <img
                    @click="hide"
                    class="tp-toast__action-close"
                    src="@/assets/icons/icon-close.svg"
                    alt="close" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            body: {
                title: "title",
                desc: "desc",
            },
            type: "",
            size: "",
            visible: true,
            images: {
                info: require("@/assets/icons/icon-toast-info.svg"),
                success: require("@/assets/icons/icon-toast-success.svg"),
                error: require("@/assets/icons/icon-toast-error.svg"),
                warn: require("@/assets/icons/icon-toast-warn.svg"),
            },
            duration: 5000,
        };
    },
    methods: {
        show(body, duration) {
            this.body = body;
            this.duration = duration;
            this.type = body.type || "info";
            this.size = body.size || "medium";
            this.visible = true;

            this.$nextTick(() => {
                setTimeout(() => {
                    this.$refs.tpToast.classList.add("tp-show");
                }, 50);
                setTimeout(() => {
                    this.$refs.tpToastContent.classList.add("tp-show");
                }, 250);

                setTimeout(() => {
                    this.hide();
                }, duration);
            });
        },
        hide() {
            this.$refs.tpToastContent.classList.remove("tp-show");

            setTimeout(() => {
                this.$refs.tpToast.classList.remove("tp-show");

                setTimeout(() => {
                    this.visible = false;
                }, 200);
            }, 300);
        },
        handleEsc(event) {
            if (event.key === "Escape") {
                this.hide();
            }
        },
    },
    mounted() {
        document.addEventListener("keydown", this.handleEsc);
    },
    beforeDestroy() {
        document.removeEventListener("keydown", this.handleEsc);
    },
};
</script>
