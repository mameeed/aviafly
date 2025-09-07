<template>
    <span
        class="tp-anfigure"
        :style="computedStyle"></span>
</template>

<script>
export default {
    name: "compAnim",
    props: {
        size: {
            type: String,
            default: "900",
        },
        top: {
            type: String,
        },
        left: {
            type: String,
        },
        right: {
            type: String,
        },
        bottom: {
            type: String,
        },
    },
    computed: {
        computedStyle() {
            const style = {
                width: `${this.size}`,
                height: `${this.size}`,
                animation: this.computedAnimation,
            };
            if (this.top !== null) {
                style.top = `${this.top}`;
            }
            if (this.left !== null) {
                style.left = `${this.left}`;
            }
            if (this.right !== null) {
                style.right = `${this.right}`;
            }
            if (this.bottom !== null) {
                style.bottom = `${this.bottom}`;
            }
            return style;
        },
        computedAnimation() {
            const surfaceDuration = this.getRandomInt(10, 30);
            const rotateZDuration = this.getRandomInt(20, 100);
            const surfaceDelay = this.getRandomInt(-20, -20);
            const rotateZDelay = this.getRandomInt(-12, -4);

            return `surface ${surfaceDuration}s ease-in-out infinite ${surfaceDelay}s, 
              rotateZ ${rotateZDuration}s linear infinite ${rotateZDelay}s`;
        },
    },
    methods: {
        getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
    },
};
</script>

<style scoped>
@import "./style.css";
</style>
