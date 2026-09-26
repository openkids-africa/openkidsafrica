<script setup lang="ts">
defineProps({
  images: {
    type: Array as PropType<
      {
        src?: string;
        alt?: string;
        type?: string;
        color?: string;
      }[]
    >,
    required: true,
  },
});
</script>

<template>
  <div class="images-grid">
    <div
      v-for="(image, i) in images"
      :key="i"
      class="images-grid__cell"
      :class="
        image.src
          ? 'images-grid__cell--photo'
          : `images-grid__cell--${image.color}`
      "
    >
      <NuxtImg
        v-if="image.src"
        format="webp"
        sizes="sm:100vw md:50vw lg:33vw"
        loading="lazy"
        :src="image.src"
        :alt="image.alt"
      />
    </div>
  </div>
</template>
<style scoped>
/* Six cells on a 6-column bento, tinted blocks standing in for the
   reference's colour panels. */
.images-grid {
  @apply grid w-full grid-cols-6 gap-3;
}

.images-grid__cell {
  @apply h-36 overflow-hidden rounded-tile lg:h-44;
}

.images-grid__cell:nth-child(1),
.images-grid__cell:nth-child(4),
.images-grid__cell:nth-child(5) {
  @apply col-span-4;
}

.images-grid__cell:nth-child(2),
.images-grid__cell:nth-child(3),
.images-grid__cell:nth-child(6) {
  @apply col-span-2;
}

.images-grid__cell > img {
  @apply h-full w-full object-cover;
}

.images-grid__cell--orange {
  @apply bg-brand-100;
}

.images-grid__cell--purple {
  @apply bg-slate-900;
}
</style>
