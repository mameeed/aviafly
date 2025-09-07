<template>
    <div class="tp-leaveapp-mini" >
        <CompInput
            :inputClass="[{'tp-error': form.name.haserror === true}, {'tp-success': form.name.haserror === false}]"
            v-model="form.name.value"
            :handleBlur="() => handleBlur('name')"
            placeholder="AAAВаше Ф.И.О. *"
            type="text" />
        <CompInput
            :inputClass="[{'tp-error': form.phone.haserror === true}, {'tp-success': form.phone.haserror === false}]"
            v-model="form.phone.value"
            :handleBlur="() => handleBlur('phone')"
            mask="+998 ## ###-##-##"
            placeholder="Ваш номер телефона *"
            type="tel" />
        <CompTextarea
            class="tp-inputtext"
            :textareaClass="[{'tp-error': form.comment.haserror === true}, {'tp-success': form.comment.haserror === false}]"
            v-model="form.comment.value"
            :handleBlur="() => handleBlur('comment')"
            placeholder="Сообщение обращения *"
            name="comment"
            :rows="4" />
        <CompButton
            ref="btnContactHpage"
            @click.native="submitForm"
            class="tp-leaveapp__form-btn"
            :class="{'tp-disabled': hasError}"
            :tpbtnUid="submitBtnUid"
            :tpbtnLoading="formLoading"
            :tpbtnText="'Отправить'" />
    </div>
</template>

<script>
import CompButton from "@/components/compButton.vue";
import CompInput from "@/components/compFormInput.vue";
import CompTextarea from "@/components/compFormTextarea.vue";
import {validateField} from "@/helpers/validateInput";

export default {
    name: "component-leaveappmodal2",
    components: {CompButton, CompInput, CompTextarea},
    props: {
        submitBtnUid: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            form: this.getInitialFormState(),
            formLoading: false,
            page: this.$route.name,
        };
    },
    computed: {
        hasError() {
            return Object.values(this.form).some((field) => field.haserror === true || (field.haserror === null && field.isRequired));
        },
        formName() {
            let txt;

            if (this.page === "visasupport") txt = "Визовая поддержка";
            if (this.page === "individuals") txt = "Индивидуальные туры";
            if (this.page === "corporate") txt = "Корпоративные туры";
            if (this.page === "home") txt = "Главная страница раздел 'Заинтересованы?'";

            return txt;
        },
    },
    watch: {
        "form.name.value": function () {
            validateField(this.form, "name");
        },
        "form.phone.value": function () {
            validateField(this.form, "phone");
        },
        "form.comment.value": function () {
            validateField(this.form, "comment");
        },
    },
    methods: {
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
        handleBlur(fieldName) {
            validateField(this.form, fieldName);
        },
        async submitForm() {
            let url = "/form-main";
            this.formLoading = true;
            if (!this.hasError) {
                try {
                    const response = await this.$api.post(url, {
                        title: `${this.form.phone?.value} - Новый лид с формы сайта`,
                        name: this.form.name?.value || "Имя",
                        last_name: "",
                        email: "",
                        phone: this.form.phone?.value || "",
                        comments: this.form.comment?.value || "",
                        theform: this.formName || "",
                    });
                    if (response.data.status === "success") {
                        this.$toast({
                            title: "Заявка отправлена",
                            desc: "Ваша заявка успешно отправлена. Наши специалисты уже приступили к обработке и в скором времени свяжутся с вами!",
                            type: "success",
                        });
                    } else {
                        this.$toast({
                            title: "Упс... Сервер отклонил ваш запрос",
                            desc: "К сожалению ваша заявка не отправлена из-за технических сбоев. Пожалуйста попробуйте позже или выходите на прямой контакт, просим прощения за причиненные неудобства!",
                            type: "error",
                        });
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                    this.$toast({
                        title: "Упс... Заявка не отправилась",
                        desc: "К сожалению ваша заявка не отправлена из-за технических сбоев. Пожалуйста попробуйте позже или выходите на прямой контакт, просим прощения за причиненные неудобства!",
                        type: "error",
                    });
                } finally {
                    this.formLoading = false;
                    this.resetForm();
                }
            }
        },
    },
};
</script>
