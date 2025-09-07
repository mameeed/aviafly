<template>
    <div v-if="thedata">
        <SectionTheIntro
            class="tp-sgnews-intro"
            :sectionBackground="thedata.image"
            :sectionCrumbs="[
                {label: 'Главная', link: '/'},
                {label: 'Новости', link: '/news'},
                {label: thedata.title, link: `/news/${thedata.uuid}`},
            ]"
            :sectionTitle="thedata.title" />

        <div class="tp-sgnews-body">
            <div
                class="tp-sgnews-body__content container"
                v-html="thedata.body"></div>
        </div>
    </div>
    <div
        v-else
        class="tp-constr">
        <div class="tp-constr__content container">
            <img
                class="tp-constr__image"
                src="@/assets/animations/404.gif"
                alt="crane" />
            <h1 class="tp-constr__title">Упс... Новость не найдена или была удалена</h1>
            <p class="tp-constr__desc">
                Уважаемый пользователь, запрашиваемая вами страница новостей к сожалению не найде в базе или была удалена администраторами, пожалуйста обратитесь к представителям нашего агентства или можете
                <router-link to="/">вернуться на главную страницу.</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import SectionTheIntro from "@/components/compIntroSection.vue";

export default {
    name: "page-single-news",
    components: {
        SectionTheIntro,
    },
    data() {
        return {
            theuid: this.$route.params.id,
            thedata: null,
        };
    },
    mounted() {
        this.setData(this.theuid);
    },
    methods: {
        async setData(uuid) {
            if (!uuid) return;

            const baseUrl = process.env.NODE_ENV === "production" ? `${window.location.origin}/data/news.json` : "http://localhost:8080/data/news.json";
            // const baseUrl = "http://10.10.1.158:8080/data/news.json";
            // const baseUrl = "http://localhost:8080/data/news.json";

            try {
                const response = await this.$api.get(baseUrl);
                const newsList = response.data || [];
                this.thedata = newsList.find((news) => news.uuid === uuid);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        },
    },
};
</script>
