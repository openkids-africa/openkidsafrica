<script setup lang="ts">
import { PlusIcon } from "lucide-vue-next";

interface FAQProps {
  faq: FAQ;
  index: number;
}
defineProps<FAQProps>();
</script>
<template>
  <details class="faq" :open="index == 0">
    <summary class="faq__summary">
      <div class="wrapper">
        <h3 class="faq__topic">{{ faq.topic }}</h3>
        <span class="faq__icon-cont" aria-hidden="true">
          <PlusIcon class="icon" />
        </span>
      </div>
    </summary>
    <p class="faq__content" v-html="faq.content"></p>
  </details>
</template>
