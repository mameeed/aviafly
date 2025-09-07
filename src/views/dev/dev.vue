<template>
    <section
        class="tp-template"
        style="min-height: 100vh; padding: 300px 0">
        <div class="tp-template__content container">
            <CompModal
                ref="modal"
                :modalTitle="'Добавить категорию'"
                :modalWidth="'800px'">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nam consectetur cupiditate, eveniet ad molestiae neque ipsum laudantium sunt atque officiis quibusdam qui doloribus expedita quidem nisi voluptatum. Exercitationem
                aspernatur totam ipsum odio omnis molestiae excepturi dolorum porro, suscipit sapiente. Tempora ratione repudiandae necessitatibus officia odio iusto hic corrupti non reiciendis nulla magni sint labore eos, quidem consectetur a fugit
                quod facilis delectus quis blanditiis? Pariatur dignissimos quod tenetur aperiam consequatur autem eveniet mollitia quis ullam adipisci quos tempora minus nemo expedita officiis enim veniam totam amet placeat nisi fugiat voluptatem,
                incidunt at. Cupiditate saepe ut placeat earum labore consectetur.
            </CompModal>

            <button @click="openAddModal">open</button>
        </div>
    </section>
</template>

<script>
import CompModal from "@/components/compModal.vue";

export default {
    name: "section-development",
    components: {CompModal},
    methods: {
        openAddModal() {
            this.$refs.modal.modalOpen();
            this.$toast({title: "This is a success message", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, architecto.", size: "large"});
        },
    },
};
</script>
