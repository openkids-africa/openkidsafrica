<script setup lang="ts">
/* One photograph in a rounded frame, with the reference's short dashed
   decoration when asked for. */
defineProps<{
  src: string;
  alt?: string;
  eager?: boolean;
  dashes?: boolean;
  sizes?: string;
}>();
</script>
<template>
  <figure class="photo-tile" :class="{ 'photo-tile--dashes': dashes }">
    <NuxtImg
      :src="src"
      :alt="alt || ''"
      format="webp"
      :sizes="sizes || 'sm:100vw lg:50vw'"
      :loading="eager ? 'eager' : 'lazy'"
      :fetchpriority="eager ? 'high' : undefined"
    />
  </figure>
</template>
