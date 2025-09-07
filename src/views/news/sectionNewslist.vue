<template>
    <section class="tp-newspage-list">
        <div class="tp-newspage-list__content container">
            <CompNewscard
                v-for="(item, index) in thenews"
                :key="'card_' + index"
                :newsTitle="item.title"
                :newsDesc="item.desc"
                :newsImage="item.image"
                :newsLink="`/news/${item.uuid}`"
                :newsDate="item.date" />
        </div>
    </section>
</template>

<script>
import CompNewscard from "@/components/compNewsCard.vue";

export default {
    name: "section-news-list",
    components: {
        CompNewscard,
    },
    data() {
        return {
            thenews: [],
        };
    },
    mounted() {
        fetch("/data/news.json")
            .then((response) => response.json())
            .then((news) => {
                this.thenews = news;
            })
            .catch((error) => console.error("Error loading the JSON:", error));
    },
};
</script>
