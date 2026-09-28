<script setup lang="ts">
/* A panel holding a numbered list in a white card, with an optional
   "learn more" pill in its header. */
defineProps<{
  title: string;
  items: (string | { title: string; text: string })[];
  linkText?: string;
  linkTo?: string;
}>();

const pad = (n: number) => String(n + 1).padStart(2, "0");
</script>
<template>
  <div class="panel flex h-full flex-col">
    <div class="panel__head">
      <h3 class="panel__title">{{ title }}</h3>
      <NuxtLink v-if="linkTo" :to="linkTo" class="btn btn--outline btn--sm">
        {{ linkText || "Learn more" }}
      </NuxtLink>
    </div>
    <ol class="numbered-list grow">
      <li v-for="(item, i) in items" :key="i">
        <span class="numbered-list__num">{{ pad(i) }}</span>
        <p v-if="typeof item === 'string'" class="numbered-list__body">
          {{ item }}
        </p>
        <p v-else class="numbered-list__body">
          <strong>{{ item.title }}</strong>
          {{ item.text }}
        </p>
      </li>
    </ol>
  </div>
</template>
