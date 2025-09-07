<template>
    <div class="tp-constr">
        <div class="tp-constr__content container">
            <img
                class="tp-constr__image"
                src="@/assets/animations/404.gif"
                alt="crane" />
            <h1 class="tp-constr__title">Упс... Запрашиваемая страница не найдена</h1>
            <p class="tp-constr__desc">
                Уважаемый пользователь, запрашиваемая вами страница к сожалению не найде в базе или была удалена администраторами, пожалуйста обратитесь к представителям нашего агентства или можете
                <router-link to="/">вернуться на главную страницу.</router-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "page-visasupport",
    props: {
        blockPage: {
            type: String,
        },
    },
};
</script>
