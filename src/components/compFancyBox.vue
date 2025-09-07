<script>
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default {
    props: {
        options: Object,
    },
    mounted() {
        Fancybox.bind(this.$refs.fancyContainer, "[data-fancybox]", {
            ...(this.options || {}),
        });
    },
    updated() {
        Fancybox.unbind(this.$refs.fancyContainer);
        Fancybox.close();

        Fancybox.bind(this.$refs.fancyContainer, "[data-fancybox]", {
            ...(this.options || {}),
        });
    },
    unmounted() {
        Fancybox.destroy();
    },
};
</script>

<template>
    <div ref="fancyContainer">
        <slot></slot>
    </div>
</template>
