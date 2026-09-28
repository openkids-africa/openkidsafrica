<script setup lang="ts">
/* Sets one to three photos as an editorial group rather than a grid:
   one wide; a wide beside a tall; or a large one with two stacked. Tint
   blocks and anything past the third photo are ignored. */
const props = defineProps<{
  images: { src?: string; alt?: string; type?: string; color?: string }[];
  eager?: boolean;
  max?: number;
}>();

const photos = computed(() =>
  props.images.filter((i) => i.src).slice(0, props.max ?? 3),
);
</script>
<template>
  <div
    v-if="photos.length"
    class="photo-comp"
    :class="`photo-comp--${photos.length}`"
  >
    <figure
      v-for="(img, i) in photos"
      :key="img.src"
      v-parallax="i === 0 ? 14 : 10"
    >
      <NuxtImg
        :src="img.src"
        :alt="img.alt || ''"
        format="webp"
        :sizes="i === 0 ? 'sm:100vw lg:66vw' : 'sm:50vw lg:33vw'"
        :loading="eager && i === 0 ? 'eager' : 'lazy'"
        :fetchpriority="eager && i === 0 ? 'high' : undefined"
      />
    </figure>
  </div>
</template>
