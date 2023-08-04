<script setup lang="ts">
const content = ref({
  caption: "Welcome to OpenKids Africa!",
  subtext:
    "OpenKids Africa is a non-profit organization that was formerly known as Pranet Technology Initiative. We believe that information and communication technology is the key to the strong and sustainable development of a country. Therefore, we leverage open educational resources to provide quality information technology education and materials for kids and schools in rural communities in Africa.",
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
      color: "purple",
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
      color: "orange",
    },
  ],
});
</script>
<template>
  <header class="site-hero site-section">
    <div class="wrapper">
      <div class="site-hero__text-cont">
        <h1 class="site-hero__caption">
          {{ content.caption }}
        </h1>
        <p class="site-hero__subtext">
          {{ content.subtext }}
        </p>

        <ScrollDownBtn>
          <span class="text">
            Keep <br />
            scrolling
          </span>
        </ScrollDownBtn>
      </div>
      <div class="site-hero__img-cont img-cont">
        <img :src="content.images[1].src" :alt="content.images[1].alt" />
      </div>
      <!-- <SiteHeroImagesGrid :images="content.images" /> -->
    </div>
  </header>
</template>
<style scoped>
.site-hero {
  @apply h-[calc(100vh-(5.125rem*2))];
}
.site-hero > .wrapper {
  @apply grid h-full  items-center gap-8 lg:grid-cols-7;
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
</style>
