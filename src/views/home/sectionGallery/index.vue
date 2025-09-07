<template>
    <section class="gallery-wrap">
        <div class="container">
            <h1>{{ $t("gallery.title") }}</h1>
            <p>{{ $t("gallery.desc") }}</p>
        </div>

        <!-- Gallery -->
        <div class="popup-gallery">
            <div>
                <a
                    :href="require('@/assets/images/gallery/2.jpg')"
                    target="_blank"
                    title="Only thing remain with us is tattoo"
                    class="image-link">
                    <img
                        src="@/assets/images/gallery/2.jpg"
                        alt="gallery-img" />
                </a>
                <a
                    :href="require('@/assets/images/gallery/1.jpg')"
                    target="_blank"
                    title="Only thing remain with us is tattoo"
                    class="image-link">
                    <img
                        src="@/assets/images/gallery/1.jpg"
                        alt="gallery-img" />
                </a>
            </div>

            <div>
                <a
                    :href="require('@/assets/images/gallery/3.jpg')"
                    target="_blank"
                    title="Only thing remain with us is tattoo"
                    class="image-link">
                    <img
                        src="@/assets/images/gallery/3.jpg"
                        alt="gallery-img" />
                </a>
                <a
                    :href="require('@/assets/images/gallery/4.jpg')"
                    target="_blank"
                    title="Only thing remain with us is tattoo"
                    class="image-link">
                    <img
                        src="@/assets/images/gallery/4.jpg"
                        alt="gallery-img" />
                </a>
            </div>

            <div>
                <a
                    :href="require('@/assets/images/gallery/6.jpg')"
                    target="_blank"
                    title="Only thing remain with us is tattoo"
                    class="image-link">
                    <img
                        src="@/assets/images/gallery/6.jpg"
                        alt="gallery-img" />
                </a>
                <a
                    :href="require('@/assets/images/gallery/5.jpg')"
                    target="_blank"
                    title="Only thing remain with us is tattoo"
                    class="image-link">
                    <img
                        src="@/assets/images/gallery/5.jpg"
                        alt="gallery-img" />
                </a>
            </div>

            <div>
                <a
                    :href="require('@/assets/images/gallery/7.jpg')"
                    target="_blank"
                    title="Only thing remain with us is tattoo"
                    class="image-link">
                    <img
                        src="@/assets/images/gallery/7.jpg"
                        alt="gallery-img" />
                </a>
                <a
                    :href="require('@/assets/images/gallery/8.jpg')"
                    target="_blank"
                    title="Only thing remain with us is tattoo"
                    class="image-link">
                    <img
                        src="@/assets/images/gallery/8.jpg"
                        alt="gallery-img" />
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "sectionGallery",
};
</script>

<style scoped>
@import "./style.css";
</style>
