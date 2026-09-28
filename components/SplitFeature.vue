<script setup lang="ts">
/* A section opener with its copy on one side and its photograph on the
   other, then whatever follows (usually a row of cards) in a panel. */
defineProps<{
  src: string;
  alt?: string;
  title: string;
  text?: string | string[];
  eyebrow?: string;
  flip?: boolean;
}>();
</script>
<template>
  <div>
    <div
      class="split-feature js-reveal"
      :class="{ 'split-feature--flip': flip }"
      v-reveal.stagger
    >
      <div class="split-feature__text">
        <p v-if="eyebrow" class="site-section__eyebrow">{{ eyebrow }}</p>
        <h2 class="split-feature__title">{{ title }}</h2>
        <template v-if="text">
          <p v-for="(t, i) in Array.isArray(text) ? text : [text]" :key="i">
            {{ t }}
          </p>
        </template>
        <div v-if="$slots.actions" class="action-cont !justify-start pt-1">
          <slot name="actions" />
        </div>
      </div>
      <PhotoTile class="split-feature__photo" :src="src" :alt="alt" dashes />
    </div>
    <div v-if="$slots.default" class="panel js-reveal mt-8" v-reveal>
      <slot />
    </div>
  </div>
</template>
