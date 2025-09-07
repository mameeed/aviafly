<template>
    <BaseLayout>
        <RouterView />
    </BaseLayout>
</template>

<script>
import BaseLayout from "@/layout/BaseLayout.vue";

export default {
    name: "App",
    components: {
        BaseLayout,
    },
};
</script>
