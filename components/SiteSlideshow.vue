<script setup lang="ts">
import emblaCarouselVue from "embla-carousel-vue";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";

const [emblaNode, emblaAPI] = emblaCarouselVue(
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

const scrollNext = () => emblaAPI?.value?.scrollNext();
const scrollPrev = () => emblaAPI?.value?.scrollPrev();

const activeSlide = ref(emblaAPI.value?.selectedScrollSnap());

watch(
  () => emblaAPI.value,
  (emblaAPIValue) => {
    if (!emblaAPI.value) return;
    emblaAPI.value.on("select", () => {
      activeSlide.value = emblaAPIValue?.selectedScrollSnap();
    });
  },
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
  {
    src: "/assets/images/photos/photo-8.jpg",
    alt: "Kids Image 3",
  },
  {
    src: "/assets/images/photos/photo-9.jpg",
    alt: "Kids Image 3",
  },
  {
    src: "/assets/images/photos/photo-10.jpg",
    alt: "Kids Image 3",
  },
  {
    src: "/assets/images/photos/photo-11.jpg",
    alt: "Kids Image 3",
  },
  {
    src: "/assets/images/photos/photo-12.jpg",
    alt: "Kids Image 3",
  },
]);
</script>

<template>
  <div class="embla">
    <div class="embla__viewport" ref="emblaNode">
      <div class="embla__container">
        <div v-for="(image, index) in images" :key="index" class="embla__slide">
          <figure class="img-cont">
            <NuxtImg :src="image.src" :alt="image.alt" class="embla__img" />
          </figure>
        </div>
      </div>
      <button
        @click="scrollPrev"
        class="embla__button btn btn--secondary embla__prev"
      >
        <ChevronLeftIcon class="icon" />
        <span class="text"> Prev </span>
      </button>
      <button
        @click="scrollNext"
        class="embla__button btn btn--secondary embla__next"
      >
        <span class="text"> Next </span>
        <ChevronRightIcon class="icon" />
      </button>
      <ul
        class="embla__dots absolute bottom-12 left-1/2 flex -translate-x-1/2 gap-2"
      >
        <li v-for="(image, index) in images" :key="index">
          <button
            class="embla__dot btn btn--alt"
            :class="{ 'btn--active': index === activeSlide }"
            @click="emblaAPI?.scrollTo(index)"
          ></button>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.embla {
  @apply py-24;
}

.embla__viewport {
  @apply relative overflow-hidden rounded-2xl;
}

.embla__container {
  @apply flex;
}
.embla__slide {
  flex: 0 0 100%;
  @apply mx-4 max-h-[42rem] min-w-0 max-w-full;
}

.embla__button {
  @apply absolute top-1/2 z-10 -translate-y-1/2 scale-75 transform lg:scale-100;
}

.embla__prev {
  @apply left-4;
}

.embla__next {
  @apply right-4;
}

.embla__dot {
  @apply h-3 w-3 rounded-full p-0 lg:h-5 lg:w-5;
}

.embla__img {
  @apply rounded-3xl;
}

.img-cont {
  @apply h-full;
}
</style>
