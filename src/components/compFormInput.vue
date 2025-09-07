<!-- CustomInput.vue -->
<template>
    <input
        class="tp-input"
        :class="inputClass"
        :value="modelValue"
        @input="updateValue"
        @blur="handleBlur"
        v-mask="mask"
        :placeholder="placeholder"
        :type="type" />
</template>

<script>
export default {
    props: {
        value: {
            type: [String, Number],
            default: "",
        },
        inputClass: {
            type: [String, Array, Object],
            default: "",
        },
        handleBlur: {
            type: Function,
            default: () => {},
        },
        mask: {
            type: String,
            default: "",
        },
        placeholder: {
            type: String,
            default: "",
        },
        type: {
            type: String,
            default: "text",
        },
        name: {
            type: String,
            default: "",
        },
    },
    computed: {
        modelValue: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            },
        },
    },
    methods: {
        updateValue(event) {
            this.modelValue = event.target.value;
        },
        onBlur(event) {
            this.handleBlur(event);
        },
    },
};
</script>

<style scoped>
@import "@/assets/sass/components/compFormInput.scss";
</style>
