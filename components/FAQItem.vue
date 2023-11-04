<script setup lang="ts">
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/24/solid";

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

        <div class="faq__icon-cont">
          <ChevronDownIcon class="icon" />
        </div>
      </div>
    </summary>
    <p class="faq__content">{{ faq.content }}</p>
  </details>
</template>
