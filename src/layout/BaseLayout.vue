<template>
    <div>
        <MainHeader />
        <RouterView class="tp-body" />
        <MainFooter class="tp-footer" />
        <CompLeaveapp />
        <CompFollowform />
        <PageLoader
            v-if="isPageLoading"
            :class="{none: !isShown}"
            class="tp-loader" />
    </div>
</template>

<script>
import CompLeaveapp from "@/components/compLeaveapp.vue";
import CompFollowform from "@/components/compFollowform.vue";
import MainHeader from "@/views/home/sectionHeader";
import MainFooter from "@/views/home/sectionFooter";
import PageLoader from "@/components/compLoader.vue";

export default {
    name: "tp-layout",
    components: {
        CompLeaveapp,
        CompFollowform,
        MainHeader,
        MainFooter,
        PageLoader,
    },
    data() {
        return {
            isPageLoading: true,
            isShown: true,
        };
    },
    mounted() {
        this.hideLoader();
        this.$eventBus.$on("locale-changed", () => {
            this.showLoader();
            setTimeout(() => {
                this.hideLoader();
            }, 200);
        });
    },
    beforeDestroy() {
        this.$eventBus.$off("locale-changed"); // Clean up the listener
    },
    methods: {
        showLoader() {
            this.isShown = true;
            this.isPageLoading = true;
        },
        hideLoader() {
            setTimeout(() => {
                this.isShown = false;
                setTimeout(() => {
                    this.isPageLoading = false;
                }, 300);
            }, 500);
        },
    },
};
</script>
<style>
.tp-body {
    z-index: 1;
}
</style>
