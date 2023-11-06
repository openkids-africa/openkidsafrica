<script setup lang="ts">
import emblaCarouselVue from "embla-carousel-vue";
import Autoplay from "embla-carousel-autoplay";

const [emblaNode] = emblaCarouselVue(
  {
    loop: true,
  },
  [
    Autoplay({
      stopOnInteraction: false,
      delay: 3000,
    }),
  ],
);

const images = ref([
  {
    src: "/assets/images/photos/photo-1.jpg",
    alt: "Kids Image 1",
  },
  {
    src: "/assets/images/photos/photo-1.jpeg",
    alt: "Kids Image 1",
  },
  {
    src: "/assets/images/photos/photo-2.jpg",
    alt: "Kids Image 2",
  },
  {
    src: "/assets/images/photos/photo-2.jpeg",
    alt: "Kids Image 2",
  },
  {
    src: "/assets/images/photos/photo-4.jpg",
    alt: "Kids Image 3",
  },
  {
    src: "/assets/images/photos/photo-5.jpg",
    alt: "Kids Image 3",
  },
  {
    src: "/assets/images/photos/photo-6.jpg",
    alt: "Kids Image 3",
  },
  {
    src: "/assets/images/photos/photo-7.jpg",
    alt: "Kids Image 3",
  },
]);
</script>

<template>
  <div class="embla" ref="emblaNode">
    <div class="embla__container">
      <div v-for="(image, index) in images" :key="index" class="embla__slide">
        <figure class="img-cont">
          <NuxtImg
            :src="image.src"
            :alt="image.alt"
            class="embla__slide__img"
          />
        </figure>
      </div>
    </div>
  </div>
</template>
<style scoped>
.embla {
  @apply overflow-hidden py-24;
}
.embla__container {
  @apply flex;
}
.embla__slide {
  flex: 0 0 100%;
  @apply max-h-[42rem] min-w-0 max-w-full;
}

.img-cont {
  @apply h-full;
}
</style>
