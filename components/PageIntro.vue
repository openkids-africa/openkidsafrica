<script setup lang="ts">
/* Inner-page hero: title, copy and actions on the left, the page's
   photograph on the right. Without a photo it centres. */
const props = defineProps<{
  caption: string;
  text?: string[];
  images?: { src?: string; alt?: string; type?: string; color?: string }[];
}>();

const photo = computed(() => props.images?.find((i) => i.src));
</script>
<template>
  <header class="page-intro" :class="{ 'page-intro--plain': !photo }">
    <div class="wrapper">
      <div class="page-intro__text js-reveal" v-reveal.stagger>
        <p v-if="$slots.eyebrow" class="site-section__eyebrow">
          <slot name="eyebrow" />
        </p>
        <h1 class="page-intro__caption">{{ caption }}</h1>
        <p v-for="(t, i) in text" :key="i" class="page-intro__subtext">
          {{ t }}
        </p>
        <div v-if="$slots.actions" class="action-cont !justify-start pt-1">
          <slot name="actions" />
        </div>
      </div>
      <div v-if="photo" class="js-reveal" v-reveal="0.15">
        <PhotoTile
          class="page-intro__photo"
          :src="photo.src!"
          :alt="photo.alt"
          sizes="sm:100vw lg:50vw"
          eager
          dashes
        />
      </div>
      <slot />
    </div>
  </header>
</template>
