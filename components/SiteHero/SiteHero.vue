<script setup lang="ts">
interface HeroProps {
  caption: string;
  subtext?: string;
  subcaption?: string;
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
        <span v-if="subtext" class="site-hero__subtext">
          {{ subtext }}
        </span>
        <h1
          :class="`site-hero__caption ${
            !subcaption ? 'site-hero__caption--md' : ''
          }`"
        >
          {{ caption }}
        </h1>
        <p v-if="subcaption" class="site-hero__subcaption">
          {{ subcaption }}
        </p>

        <ScrollDownBtn>
          <span class="text">
            Keep <br />
            scrolling
          </span>
        </ScrollDownBtn>
      </div>
      <div class="site-hero__img-cont img-cont">
        <NuxtImg
          width="100%"
          height="832px"
          :src="images[0].src"
          :alt="images[0].alt"
        />
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
  @apply relative -z-10 flex max-w-3xl flex-col gap-4 lg:col-span-4 lg:ml-auto;
}

.site-hero__text-cont:has(.site-hero__caption--md) {
  @apply lg:col-span-5 lg:ml-0;
}

.site-hero__text-cont > .scroll-down-btn {
  @apply absolute top-[calc(100%+4rem)] hidden lg:block;
}

.site-hero__caption {
  @apply font-heading text-5xl font-black text-slate-100  lg:text-7xl;
}

.site-hero__caption--md {
  @apply text-4xl lg:text-6xl;
}

.site-hero__subcaption {
  @apply text-xl text-slate-50;
}

.site-hero__subtext {
  @apply text-xl text-slate-50;
}

.site-hero__img-cont {
  @apply absolute left-0 top-0 -z-20 h-full w-full;
}

.site-hero__img-cont::before {
  content: "";
  /* @apply absolute left-0 top-0 h-full w-full bg-gradient-to-tl from-transparent via-slate-600/90 to-slate-800/90; */
  @apply absolute left-0 top-0 h-full w-full bg-gradient-to-tl from-transparent via-slate-900/90 to-slate-950/90;
}
/* END SITE HERO */
.site-hero__text-cont > .scroll-down-btn {
  @apply absolute top-[calc(100%+4rem)] hidden lg:block;
}
</style>
