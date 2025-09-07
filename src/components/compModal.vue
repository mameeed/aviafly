<template>
    <div
        class="tpmodal"
        :class="{opened: isOpen}">
        <div class="tpmodal__holder">
            <div
                class="tpmodal__header"
                :style="{width: modalWidth}">
                <h3 class="tpmodal__header-title">{{ modalTitle != "" ? modalTitle : "-" }}</h3>
                <div
                    @click="modalClose(true)"
                    class="tpmodal__header-button">
                    <img
                        src="@/assets/icons/icon-close.svg"
                        alt="document" />
                </div>
            </div>
            <div
                class="tpmodal__body"
                :style="{width: modalWidth}">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "component-modal",
    props: {
        modalWidth: {
            type: String,
            default: "80%",
        },
        modalTitle: {
            type: String,
            default: "Here goes modal title",
        },
        modalOpened: {
            type: Boolean,
            default: false,
        },
    },
    mounted() {
        document.addEventListener("keydown", this.modalCloseEsc);
    },
    beforeDestroy() {
        document.removeEventListener("keydown", this.modalCloseEsc);
    },
    data() {
        return {
            isOpen: this.modalOpened,
        };
    },
    methods: {
        modalCloseEsc(event) {
            if (event.key === "Escape") {
                this.modalClose();
            }
        },
        modalClose() {
            this.isOpen = false;

            setTimeout(() => {
                this.$emit("modalClosed");
            }, 1000);
        },
        modalOpen() {
            this.isOpen = true;

            setTimeout(() => {
                this.$emit("modalOpened");
            }, 300);
        },
    },
};
</script>
