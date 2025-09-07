z
<template>
    <footer class="tp-footer">footer</footer>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "component-footer",
    methods: {
        ...mapActions(["openModal"]),
    },
};
</script>
