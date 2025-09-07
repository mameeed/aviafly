<template>
    <CompModal
        ref="modal"
        :modalTitle="modalParams.title"
        :modalWidth="modalWidth"
        :modalOpened="modalParams.isOpen"
        @modalClosed="modalClose">
        <p class="tp-leaveapp__desc">{{ modalParams.desc }}</p>
        <div class="tp-leaveapp">
            <div class="tp-leaveapp__form">
                <CompInput
                    :inputClass="[{'tp-error': form.name.haserror === true}, {'tp-success': form.name.haserror === false}]"
                    v-model="form.name.value"
                    :handleBlur="() => handleBlur('name')"
                    :placeholder="$t('leaveapp.name')"
                    type="text" />
                <CompInput
                    :inputClass="[{'tp-error': form.phone.haserror === true}, {'tp-success': form.phone.haserror === false}]"
                    v-model="form.phone.value"
                    :handleBlur="() => handleBlur('phone')"
                    mask="+998 ## ###-##-##"
                    :placeholder="$t('leaveapp.phone')"
                    type="tel" />
                <CompInput
                    :inputClass="[{'tp-error': form.mail.haserror === true}, {'tp-success': form.mail.haserror === false}]"
                    v-model="form.mail.value"
                    :handleBlur="() => handleBlur('mail')"
                    :placeholder="$t('leaveapp.name')"
                    type="email" />
                <CompTextarea
                    :textareaClass="[{'tp-error': form.comment.haserror === true}, {'tp-success': form.comment.haserror === false}]"
                    v-model="form.comment.value"
                    :handleBlur="() => handleBlur('comment')"
                    :placeholder="$t('leaveapp.comment')"
                    name="comment"
                    :rows="4" />
                <CompButton
                    @click.native="submitForm"
                    class="tp-leaveapp__form-btn"
                    :class="{'tp-disabled': hasError}"
                    :tpbtnUid="'button-form-leaveapp'"
                    :tpbtnText="$t('leaveapp.send')" />
            </div>
            <div
                class="tp-leaveapp__state"
                :class="{show: submiResult === 'success'}">
                <img
                    class="tp-leaveapp__state-img"
                    src="@/assets/animations/email.gif"
                    alt="email" />

                <h3 class="tp-leaveapp__state-text">{{ $t("leaveapp.success") }}</h3>
            </div>
            <div
                class="tp-leaveapp__state"
                :class="{show: submiResult === 'error'}">
                <img
                    class="tp-leaveapp__state-img"
                    src="@/assets/animations/delivery.gif"
                    alt="email" />

                <h3 class="tp-leaveapp__state-text">{{ $t("leaveapp.fail") }}</h3>
            </div>
            <div
                class="tp-leaveapp__state"
                :class="{show: submiResult === 'loading'}">
                <img
                    class="tp-leaveapp__state-img"
                    src="@/assets/animations/loading.gif"
                    alt="email" />

                <h3 class="tp-leaveapp__state-text">{{ $t("leaveapp.wait") }}</h3>
            </div>
        </div>
    </CompModal>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import CompModal from "@/components/compModal.vue";
import CompButton from "@/components/compButton.vue";
import CompInput from "@/components/compFormInput.vue";
import CompTextarea from "@/components/compFormTextarea.vue";
import {validateField} from "@/helpers/validateInput";

export default {
    name: "component-leaveappmodal",
    components: {CompModal, CompButton, CompInput, CompTextarea},
    data() {
        return {
            form: this.getInitialFormState(),
            submiResult: null,
        };
    },
    computed: {
        ...mapGetters(["modalParams"]),
        hasError() {
            return Object.values(this.form).some((field) => field.haserror === true || (field.haserror === null && field.isRequired));
        },
        modalWidth() {
            let screenWidth = window.innerWidth;

            return screenWidth < 768 ? "calc(100% - 40px)" : "500px";
        },
    },
    watch: {
        "modalParams.isOpen": function (value) {
            if (value) {
                this.modalOpen();
            } else {
                this.modalClose();
            }
        },
        "form.name.value": function () {
            validateField(this.form, "name");
        },
        "form.phone.value": function () {
            validateField(this.form, "phone");
        },
        "form.mail.value": function () {
            validateField(this.form, "mail");
        },
        "form.comment.value": function () {
            validateField(this.form, "comment");
        },
    },
    methods: {
        ...mapActions(["closeModal"]),
        getInitialFormState() {
            return {
                name: {
                    haserror: null,
                    isRequired: true,
                    value: null,
                },
                phone: {
                    haserror: null,
                    isRequired: true,
                    value: null,
                },
                mail: {
                    haserror: null,
                    isRequired: false,
                    value: null,
                },
                comment: {
                    haserror: null,
                    isRequired: true,
                    value: null,
                },
            };
        },
        resetForm() {
            this.form = this.getInitialFormState();
        },
        modalOpen() {
            this.submiResult = null;
            this.resetForm();
            this.$refs.modal.modalOpen();
        },
        modalClose() {
            this.submiResult = null;
            this.resetForm();
            this.closeModal();
        },
        handleBlur(fieldName) {
            validateField(this.form, fieldName);
        },
        async submitForm() {
            this.submiResult = "loading";
            if (!this.hasError) {
                try {
                    const response = await this.$api.post(this.modalParams.url, {
                        title: `${this.form.phone.value} - Новый лид с формы сайта`,
                        name: this.form.name.value || "Имя",
                        last_name: "none",
                        email: this.form.mail.value || "",
                        phone: this.form.phone.value || "",
                        comments: this.form.comment.value || "",
                        theform: this.modalParams.form || "",
                    });
                    this.submiResult = response.data.status;
                } catch (error) {
                    console.error("Error fetching data:", error);
                    this.submiResult = "error";
                } finally {
                    setTimeout(() => {
                        this.$refs.modal.modalClose();
                    }, 4000);
                }
            }
        },
    },
};
</script>
