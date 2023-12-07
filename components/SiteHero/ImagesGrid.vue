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
  <div class="site-hero__media-cont">
    <div
      v-for="(image, i) in images"
      :key="i"
      class="site-hero__img-cont img-cont"
    >
      <NuxtImg v-if="image.src" :src="image.src" :alt="image.alt" />
      <div v-else :class="`${image.color} ${image.type}`"></div>
    </div>
  </div>
</template>
<style scoped>
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
  @apply border border-slate-800 bg-slate-700 shadow-inner shadow-slate-400 dark:bg-slate-100;
}

.site-hero__img-cont .block.orange {
  @apply border border-orange-800 bg-orange-600 shadow-inner shadow-orange-400 dark:bg-orange-100;
}
</style>
