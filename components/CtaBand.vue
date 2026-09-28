<script setup lang="ts">
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
      <div class="cta-band js-reveal" v-reveal>
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
            </a>
            <NuxtLink v-else :to="actionTo" class="btn">{{
              actionText
            }}</NuxtLink>
            <slot name="secondary" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
