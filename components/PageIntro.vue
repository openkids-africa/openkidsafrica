<script setup lang="ts">
/* Inner-page hero: centred title and copy, optional actions, then the
   page's photos as a bento row beneath. */
defineProps<{
  caption: string;
  text?: string[];
  images?: {
    src?: string;
    alt?: string;
    type?: string;
    color?: string;
  }[];
}>();
</script>
<template>
  <header class="page-intro">
    <div class="wrapper">
      <div class="page-intro__text">
        <p v-if="$slots.eyebrow" class="site-section__eyebrow">
          <slot name="eyebrow" />
        </p>
        <h1 class="page-intro__caption">{{ caption }}</h1>
        <p v-for="(t, i) in text" :key="i" class="page-intro__subtext">
          {{ t }}
        </p>
        <div v-if="$slots.actions" class="action-cont pt-2">
          <slot name="actions" />
        </div>
      </div>
      <SiteHeroImagesGrid v-if="images && images.length" :images="images" />
      <slot />
    </div>
  </header>
</template>
