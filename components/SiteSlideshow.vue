<script setup lang="ts">
const { images } = defineProps({
  images: {
    type: Array as PropType<
      {
        src?: string;
        alt?: string;
        type?: string;
        color?: string;
      }[]
    >,
    // required: true,
  },
});

import emblaCarouselVue from "embla-carousel-vue";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";

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

/* Ten photographs that appear nowhere else on the site. */
const slideImages = ref(
  images || [
    {
      src: "/assets/images/photos/photo-12.jpg",
      alt: "Pupils crowding in for a photo during a school visit",
    },
    {
      src: "/assets/images/photos/photo-1.jpg",
      alt: "Children in yellow and blue uniforms raising their hands",
    },
    {
      src: "/assets/images/photos/photo-3.jpg",
      alt: "Pupils with their hands up to answer a question",
    },
    {
      src: "/assets/images/photos/photo-5.jpg",
      alt: "A pupil speaking into a microphone",
    },
    {
      src: "/assets/images/photos/photo-19.jpg",
      alt: "Pupils in blue uniforms gathered on the school playground",
    },
    {
      src: "/assets/images/photos/photo-22.jpg",
      alt: "Pupils and a volunteer holding up what they made",
    },
    {
      src: "/assets/images/photos/photo-29.jpeg",
      alt: "A class at their desks with hands raised",
    },
    {
      src: "/assets/images/photos/photo-35.jpg",
      alt: "A pupil presenting beside classroom artwork",
    },
    {
      src: "/assets/images/photos/photo-43.jpg",
      alt: "Pupils and teachers at a school assembly",
    },
    {
      src: "/assets/images/photos/photo-46.jpg",
      alt: "A pupil filling in a worksheet",
    },
  ],
);
</script>

<template>
  <div class="embla">
    <div class="embla__viewport" ref="emblaNode">
      <div class="embla__container">
        <div
          v-for="(image, index) in slideImages"
          :key="index"
          class="embla__slide"
        >
          <figure class="img-cont">
            <NuxtImg :src="image.src" :alt="image.alt" class="embla__img" />
          </figure>
        </div>
      </div>
      <button
        @click="scrollPrev"
        aria-label="Previous slide"
        class="embla__button btn btn--ghost embla__prev"
      >
        <ChevronLeftIcon class="icon" />
      </button>
      <button
        @click="scrollNext"
        aria-label="Next slide"
        class="embla__button btn btn--ghost embla__next"
      >
        <ChevronRightIcon class="icon" />
      </button>
      <ul class="embla__dots">
        <li v-for="(image, index) in slideImages" :key="index">
          <button
            class="embla__dot btn btn--alt"
            :class="{ 'btn--active': index === activeSlide }"
            :aria-label="`Go to slide ${index + 1}`"
            :aria-current="index === activeSlide ? 'true' : undefined"
            @click="emblaAPI?.scrollTo(index)"
          ></button>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.embla {
  @apply w-full;
}

.embla__viewport {
  @apply relative overflow-hidden rounded-tile;
}

.embla__container {
  @apply flex;
}

.embla__slide {
  flex: 0 0 100%;
  @apply min-w-0 max-w-full;
}

.embla__slide .img-cont {
  @apply aspect-[16/9] w-full lg:aspect-[21/9];
}

.embla__img {
  @apply h-full w-full object-cover;
}

.embla__button {
  @apply absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/90 p-0 text-slate-900 hover:bg-white;
}

.embla__prev {
  @apply left-4;
}

.embla__next {
  @apply right-4;
}

.embla__dots {
  @apply absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-white/80 px-3 py-2;
}

.embla__dot {
  @apply relative h-2.5 w-2.5 rounded-full border-transparent bg-slate-300 p-0 hover:bg-slate-400;
}

.embla__dot.btn--active {
  @apply bg-brand-600;
}

.embla__dot::after {
  content: "";
  @apply absolute left-1/2 top-1/2 h-11 w-4 -translate-x-1/2 -translate-y-1/2 lg:hidden;
}
</style>
