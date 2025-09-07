<template>
    <div>
        <sectionIntro />
        <sectionTours id="tours" />
        <sectionAbout id="about" />
        <sectionGallery id="gallery" />
        <sectionContact id="contact" />
        <sectionFeeds id="feeds" />
    </div>
</template>

<script>
import sectionGallery from "./sectionGallery";
import sectionIntro from "./sectionIntro";
import SectionTours from "./sectionTours";
import SectionAbout from "./sectionAbout";
import SectionFeeds from "./sectionFeeds";
import SectionContact from "./sectionContact";

export default {
    name: "page-main",
    components: {sectionIntro, sectionGallery, SectionTours, SectionAbout, SectionFeeds, SectionContact},
};
</script>
