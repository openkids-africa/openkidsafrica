<script setup lang="ts">
/* Three round photographs set as a cluster: one large, two smaller ones
   overlapping its edge. */
defineProps<{
  photos: { src: string; alt: string }[];
}>();
</script>
<template>
  <div class="cluster">
    <span class="cluster__dot cluster__dot--a" aria-hidden="true"></span>
    <span class="cluster__dot cluster__dot--b" aria-hidden="true"></span>
    <figure
      v-for="(photo, i) in photos.slice(0, 3)"
      :key="photo.src"
      class="cluster__photo"
      :class="`cluster__photo--${i + 1}`"
      v-parallax="i === 0 ? 10 : 18 + i * 4"
    >
      <NuxtImg
        :src="photo.src"
        :alt="photo.alt"
        format="webp"
        :sizes="i === 0 ? 'sm:80vw lg:40vw' : 'sm:40vw lg:20vw'"
        loading="lazy"
      />
    </figure>
  </div>
</template>
<style scoped>
.cluster {
  @apply relative mx-auto aspect-square w-full max-w-[30rem];
}

.cluster__photo {
  @apply absolute overflow-hidden rounded-full border-[6px] border-white bg-brand-100 shadow-card-hover;
}

.cluster__photo > img {
  @apply h-full w-full object-cover transition-transform duration-700;
}

.cluster__photo:hover > img {
  @apply scale-105;
}

.cluster__photo--1 {
  @apply left-[14%] top-[10%] h-[72%] w-[72%];
}

.cluster__photo--2 {
  @apply right-0 top-[2%] h-[36%] w-[36%];
}

.cluster__photo--3 {
  @apply bottom-[2%] left-0 h-[34%] w-[34%];
}

.cluster__dot {
  @apply absolute rounded-full;
}

.cluster__dot--a {
  @apply bottom-[14%] right-[10%] h-4 w-4 bg-slate-900;
}

.cluster__dot--b {
  @apply left-[6%] top-[2%] h-5 w-5 bg-brand-500;
}
</style>
