<script setup lang="ts">
const programsContent = ref({
  heroSection: {
    caption: "Every child deserves equal access to technology",
    subtext:
      "OpenKids Africa is reaching out to kids and schools in remote African areas using open educational resources.",
    images: [
      {
        src: "/assets/images/kids-image-1.jpg",
        alt: "Hero Image 1",
      },
      {
        src: "/assets/images/kids-image-2.jpg",
        alt: "Hero Image 2",
      },
      {
        type: "block",
        color: "orange",
      },
      {
        src: "/assets/images/kids-image-3.jpg",
        alt: "Hero Image 3",
      },
      {
        src: "/assets/images/kids-image-4.jpg",
        alt: "Hero Image 4",
      },
      {
        type: "block",
        color: "purple",
      },
    ],
  },
});
</script>
<template>
  <header class="page-header site-section programs-header">
    <div class="wrapper">
      <div class="page-header__text-cont">
        <h1 class="page-header__caption">
          {{ programsContent.heroSection.caption }}
        </h1>
        <p class="page-header__subtext">
          {{ programsContent.heroSection.subtext }}
        </p>
      </div>
      <SiteHeroImagesGrid
        class="programs-header__media-cont"
        :images="programsContent.heroSection.images"
      />
    </div>
  </header>
</template>
<style scoped>
.programs-header {
}
.programs-header > .wrapper {
  @apply max-w-7xl flex-col-reverse gap-8 lg:flex-row;
}
.page-header__text-cont {
  @apply lg:max-w-sm xl:ml-16;
}
.page-header__text-cont,
.programs-header__media-cont {
  @apply lg:flex-1;
}

.programs-header__media-cont {
  @apply relative lg:w-[150%];
}
</style>
