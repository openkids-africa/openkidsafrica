<script setup lang="ts">
/* Inner-page hero: centred title and copy, optional actions, then the
   page's photos set as a composition beneath. */
defineProps<{
  caption: string;
  text?: string[];
  images?: { src?: string; alt?: string; type?: string; color?: string }[];
  photos?: number;
}>();
</script>
<template>
  <header class="page-intro">
    <div class="wrapper">
      <div class="page-intro__text" v-reveal.stagger>
        <p v-if="$slots.eyebrow" class="site-section__eyebrow js-reveal">
          <slot name="eyebrow" />
        </p>
        <h1 class="page-intro__caption js-reveal">{{ caption }}</h1>
        <p
          v-for="(t, i) in text"
          :key="i"
          class="page-intro__subtext js-reveal"
        >
          {{ t }}
        </p>
        <div v-if="$slots.actions" class="action-cont js-reveal pt-2">
          <slot name="actions" />
        </div>
      </div>
      <div
        v-if="images && images.length"
        class="js-reveal w-full"
        v-reveal="0.15"
      >
        <PhotoComposition :images="images" :max="photos ?? 2" eager />
      </div>
      <slot />
    </div>
  </header>
</template>
