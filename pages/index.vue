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
      <div class="site-hero__media-cont">
        <div
          v-for="(image, i) in content.images"
          :key="i"
          class="site-hero__img-cont img-cont"
        >
          <div
            v-if="image.type === 'block'"
            :class="`${image.color} ${image.type}`"
          ></div>
          <img v-else :src="image.src" :alt="image.alt" />
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
.site-hero {
  @apply h-[calc(100vh-(5.125rem*2))];
}
.site-hero > .wrapper {
  @apply grid h-full max-w-[110rem] items-center gap-8 lg:grid-cols-7;
}

.site-hero__text-cont {
  @apply relative flex max-w-3xl flex-col gap-2 lg:col-span-4 lg:ml-auto;
}

.site-hero__text-cont > .scroll-down-btn {
  @apply absolute top-[calc(100%+4rem)] hidden lg:block;
}

.site-hero__caption {
  @apply font-heading text-5xl font-black text-purple-700  dark:text-purple-100;
}
.site-hero__subtext {
  @apply text-xl text-slate-700 dark:text-slate-300;
}
.site-hero__media-cont {
  @apply grid grid-cols-6 gap-3 lg:col-span-3;
}

.site-hero__img-cont {
  @apply h-44;
}

.site-hero__img-cont:nth-child(1) {
  @apply col-span-4;
}
.site-hero__img-cont:nth-child(2) {
  @apply col-span-2;
}
.site-hero__img-cont:nth-child(3) {
  @apply col-span-2;
}
.site-hero__img-cont:nth-child(4) {
  @apply col-span-4;
}
.site-hero__img-cont:nth-child(5) {
  @apply col-span-4;
}
.site-hero__img-cont:nth-child(6) {
  @apply col-span-2;
}

.site-hero__img-cont img,
.site-hero__img-cont .block {
  @apply h-full w-full rounded-xl object-cover;
}

/* .site-hero__img-cont:has(> .block):nth-of-type(1) .block {
} */
.site-hero__img-cont .block.purple {
  @apply border border-purple-800 bg-purple-700 shadow-inner shadow-purple-400 dark:bg-purple-100;
}

.site-hero__img-cont .block.orange {
  @apply border border-orange-800 bg-orange-600 shadow-inner shadow-orange-400 dark:bg-orange-100;
}
</style>
