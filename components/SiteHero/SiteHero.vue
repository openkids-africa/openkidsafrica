<script setup lang="ts">
interface HeroProps {
  caption: string;
  subtext: string;
  images: {
    src?: string;
    alt?: string;
    type?: string;
    color?: string;
  }[];
}
defineProps<HeroProps>();
</script>
<template>
  <header class="site-hero site-section">
    <div class="wrapper">
      <div class="site-hero__text-cont">
        <h1 class="site-hero__caption">
          {{ caption }}
        </h1>
        <p class="site-hero__subtext">
          {{ subtext }}
        </p>

        <ScrollDownBtn>
          <span class="text">
            Keep <br />
            scrolling
          </span>
        </ScrollDownBtn>
      </div>
      <div class="site-hero__img-cont img-cont">
        <img :src="images[1].src" :alt="images[1].alt" />
      </div>
      <!-- <SiteHeroImagesGrid :images="images" /> -->
    </div>
  </header>
</template>
<style scoped>
.site-hero__text-cont > .scroll-down-btn {
  @apply absolute top-[calc(100%+4rem)] hidden lg:block;
}
</style>
