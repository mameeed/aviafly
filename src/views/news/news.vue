<template>
    <div>
        <SectionTheIntro
            :sectionBackground="require('@/assets/images/static/intro-bgs/news.jpg')"
            :sectionCrumbs="[
                {label: 'Главная', link: '/'},
                {label: 'Новости', link: '/news'},
            ]"
            :sectionTitle="'На волне новостей'"
            :sectionSubtitle="'Будьте в курсе всех происходящий событий, связанных с нашим агентством '" />

        <SectionList />
    </div>
</template>

<script>
import SectionTheIntro from "@/components/compIntroSection.vue";
import SectionList from "./sectionNewslist.vue";

export default {
    name: "page-news",
    components: {
        SectionTheIntro,
        SectionList,
    },
};
</script>
