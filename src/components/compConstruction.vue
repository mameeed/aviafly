<template>
    <div class="tp-constr">
        <div class="tp-constr__content container">
            <img
                class="tp-constr__image"
                src="@/assets/animations/crane.gif"
                alt="crane" />
            <h1 class="tp-constr__title">
                Страница
                <span>{{ blockPage }}</span>
                находится в процессе разработки...
            </h1>
            <p class="tp-constr__desc">
                Уважаемый пользователь, страница {{ blockPage }} в данный момент находится в процессе разработки нашими специалистами. Просим вас быть терпеливыми и дождаться завершения работ. Мы уверены, что результат вас не разочарует. Пока вы
                можете
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
