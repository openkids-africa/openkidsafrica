<script setup lang="ts">
import { PlusIcon } from "lucide-vue-next";

interface FAQProps {
  faq: FAQ;
  index: number;
}
const props = defineProps<FAQProps>();
const number = computed(() => String(props.index + 1).padStart(2, "0"));
</script>
<template>
  <details class="faq" :open="index == 0">
    <summary class="faq__summary">
      <div class="wrapper">
        <span class="faq__num">{{ number }}</span>
        <h3 class="faq__topic">{{ faq.topic }}</h3>
        <span class="faq__icon-cont" aria-hidden="true">
          <PlusIcon class="icon" />
        </span>
      </div>
    </summary>
    <p class="faq__content" v-html="faq.content"></p>
  </details>
</template>
<style scoped>
.faq {
  @apply border-0 bg-white;
}

.faq .wrapper {
  @apply justify-start;
}

.faq__num {
  @apply w-10 shrink-0 font-heading text-lg font-semibold text-slate-900;
}

.faq__topic {
  @apply grow;
}

.faq__content {
  @apply pl-14;
}
</style>
