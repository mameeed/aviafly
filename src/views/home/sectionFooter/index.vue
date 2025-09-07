<template>
    <footer class="main-footer">
        <div class="widgets-section container">
            <div class="main-footer__content">
                <div class="footer-column col-lg-3 col-md-3 col-sm-12">
                    <div class="footer-widget about-widget">
                        <img
                            src="@/assets/images/logo.svg"
                            alt="logo" />
                        <p style="margin-bottom: 20px">{{ $t("footer.desc") }}</p>
                        <ul class="contact-info-list">
                            <li>
                                <a href="#">
                                    <span
                                        class="iconify"
                                        data-icon="icomoon-free:location"></span>
                                    {{ $t("footer.address") }}
                                </a>
                            </li>
                            <li>
                                <a href="tel:+998712300514">
                                    <span
                                        class="iconify"
                                        data-icon="icomoon-free:phone"></span>
                                    +998 (71) 230-05-14
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@aviafly.uz">
                                    <span
                                        class="iconify"
                                        data-icon="icomoon-free:mail3"></span>
                                    info@aviafly.uz
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span
                                        class="iconify"
                                        data-icon="icomoon-free:mail3"></span>
                                    {{ $t("footer.workhour") }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="copyright container">
                @ 2024
                <a
                    href="#!"
                    target="_blank">
                    {{ $t("footer.company") }}
                </a>
                {{ $t("footer.copyright") }}
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "sectionFooter",
};
</script>

<style scoped>
@import "./style.css";
</style>
