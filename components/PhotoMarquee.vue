<script setup lang="ts">
/* Rows of photographs drifting past in opposite directions. Each row is
   laid out twice so the loop is seamless; the second copy is hidden from
   assistive technology. Hovering pauses a row. */
defineProps<{
  rows: { src: string; alt: string }[][];
}>();
</script>
<template>
  <div class="marquee">
    <div
      v-for="(row, r) in rows"
      :key="r"
      class="marquee__row"
      :class="{ 'marquee__row--reverse': r % 2 }"
    >
      <ul class="marquee__track">
        <li v-for="photo in row" :key="photo.src" class="marquee__item">
          <NuxtImg
            :src="photo.src"
            :alt="photo.alt"
            format="webp"
            sizes="sm:70vw md:40vw lg:25vw"
            loading="lazy"
          />
        </li>
      </ul>
      <ul class="marquee__track" aria-hidden="true">
        <li v-for="photo in row" :key="photo.src" class="marquee__item">
          <NuxtImg
            :src="photo.src"
            alt=""
            format="webp"
            sizes="sm:70vw md:40vw lg:25vw"
            loading="lazy"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.marquee {
  @apply flex flex-col gap-4 overflow-hidden;
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 6%,
    black 94%,
    transparent
  );
  mask-image: linear-gradient(
    to right,
    transparent,
    black 6%,
    black 94%,
    transparent
  );
}

.marquee__row {
  @apply flex w-max gap-4;
  animation: marquee 60s linear infinite;
}

.marquee__row--reverse {
  animation-direction: reverse;
  animation-duration: 72s;
}

.marquee__row:hover {
  animation-play-state: paused;
}

.marquee__track {
  @apply flex shrink-0 gap-4;
}

.marquee__item {
  @apply h-44 w-64 shrink-0 overflow-hidden rounded-tile bg-brand-100 lg:h-60 lg:w-[22rem];
}

.marquee__item > img {
  @apply h-full w-full object-cover transition-transform duration-700;
}

.marquee__item:hover > img {
  @apply scale-105;
}

/* Two copies and one gap: shifting by half the row plus half a gap lands
   the second copy exactly where the first began. */
@keyframes marquee {
  to {
    transform: translateX(calc(-50% - 0.5rem));
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee {
    @apply overflow-x-auto;
    -webkit-mask-image: none;
    mask-image: none;
  }

  .marquee__row {
    animation: none;
  }

  .marquee__track[aria-hidden="true"] {
    @apply hidden;
  }
}
</style>
