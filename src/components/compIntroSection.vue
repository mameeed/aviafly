<template>
    <section class="tp-theintro">
        <img
            class="tp-theintro__bg"
            :src="sectionBackground"
            alt="background" />
        <div class="tp-theintro__content container">
            <h1
                class="tp-theintro__title"
                v-html="sectionTitle"></h1>
            <p
                class="tp-theintro__subtitle"
                v-if="sectionSubtitle"
                v-html="sectionSubtitle"></p>

            <ul class="tp-theintro__breadcrumbs">
                <li
                    v-for="(item, index) in sectionCrumbs"
                    :key="'crumb_' + index"
                    class="tp-theintro__breadcrumbs-item">
                    <a
                        :href="item.link"
                        class="tp-theintro__breadcrumbs-link">
                        {{ item.label }}
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: "section-theintro",
    props: {
        sectionTitle: {
            type: String,
            default: "Page Title",
        },
        sectionBackground: {
            type: String,
            default: "https://picsum.photos/1200",
        },
        sectionCrumbs: {
            type: Array,
            default: () => [{label: "test", link: "www.com"}],
        },
        sectionSubtitle: {
            type: String,
        },
    },
};
</script>
