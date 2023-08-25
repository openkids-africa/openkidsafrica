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
/* SITE HERO */
.site-hero {
  /* @apply relative flex h-[calc(100vh-(5.125rem*2))] max-h-[72rem] min-h-fit  flex-col items-center py-[10rem] lg:pb-[24rem]; */
  @apply relative flex max-h-[72rem] min-h-[24rem] flex-col items-center py-32 lg:py-64;
}
.site-hero > .wrapper {
  @apply grid  items-center gap-8 lg:grid-cols-7;
}

.site-hero__text-cont {
  @apply relative -z-10 flex max-w-3xl flex-col gap-2 lg:col-span-4 lg:ml-auto;
}

.site-hero__text-cont > .scroll-down-btn {
  @apply absolute top-[calc(100%+4rem)] hidden lg:block;
}

.site-hero__caption {
  @apply font-heading text-5xl font-black text-purple-100 dark:text-purple-100  lg:text-7xl;
}
.site-hero__subtext {
  @apply text-xl text-purple-50 dark:text-purple-200;
}

.site-hero__img-cont {
  @apply absolute left-0 top-0 -z-20 h-full w-full;
}

.site-hero__img-cont::before {
  content: "";
  @apply absolute left-0 top-0 h-full w-full bg-gradient-to-tl from-transparent via-purple-600/90 to-purple-800/90;
}
/* END SITE HERO */
.site-hero__text-cont > .scroll-down-btn {
  @apply absolute top-[calc(100%+4rem)] hidden lg:block;
}
</style>
