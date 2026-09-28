<script setup lang="ts">
/* One photograph in a rounded frame. */
defineProps<{
  src: string;
  alt?: string;
  eager?: boolean;
  sizes?: string;
}>();
</script>
<template>
  <figure class="photo-tile">
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
