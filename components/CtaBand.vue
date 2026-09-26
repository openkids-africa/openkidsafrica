<script setup lang="ts">
import { ArrowUpRightIcon } from "lucide-vue-next";

defineProps<{
  title: string;
  text?: string;
  actionText: string;
  actionTo: string;
  external?: boolean;
}>();
</script>
<template>
  <section class="site-section site-section--tight">
    <div class="wrapper">
      <div class="cta-band">
        <div class="wrapper">
          <h2 class="cta-band__title">{{ title }}</h2>
          <p v-if="text" class="cta-band__text">{{ text }}</p>
          <div class="action-cont !justify-start">
            <a
              v-if="external"
              :href="actionTo"
              target="_blank"
              rel="noopener noreferrer"
              class="btn"
            >
              {{ actionText }}
              <ArrowUpRightIcon class="icon" />
            </a>
            <NuxtLink v-else :to="actionTo" class="btn">
              {{ actionText }}
              <ArrowUpRightIcon class="icon" />
            </NuxtLink>
            <slot name="secondary" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
