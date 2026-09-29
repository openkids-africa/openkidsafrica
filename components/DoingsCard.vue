<script setup lang="ts">
import { ArrowUpRightIcon } from "lucide-vue-next";

interface CardContent {
  id: string;
  title: string;
  text: string;
}

defineProps<{
  cardContent: CardContent;
}>();
</script>
<template>
  <article class="mini-card">
    <div class="mini-card__head">
      <h3 class="mini-card__title">{{ cardContent.title }}</h3>
      <span class="mini-card__arrow" aria-hidden="true">
        <ArrowUpRightIcon class="icon" />
      </span>
    </div>
    <p class="mini-card__text">{{ cardContent.text }}</p>
  </article>
</template>
