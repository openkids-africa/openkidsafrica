<script setup lang="ts">
import { ArrowUpRightIcon, MailIcon } from "lucide-vue-next";

defineProps<{
  sectionData: PartnerSection;
}>();
</script>

<template>
  <section class="site-section">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">{{ sectionData.title }}</h2>
        <p v-if="sectionData.description">{{ sectionData.description }}</p>
      </header>

      <ul v-if="!sectionData.hidePartners" class="partners">
        <li
          v-for="(partner, index) in sectionData.partners"
          :key="index"
          class="partners__item"
        >
          <NuxtImg
            :src="partner.logo"
            :alt="partner.name"
            class="partners__logo"
          />
        </li>
      </ul>

      <div class="action-cont">
        <a
          v-if="sectionData.donateLink"
          :href="sectionData.donateLink.url"
          target="_blank"
          rel="noopener noreferrer"
          class="btn"
        >
          {{ sectionData.donateLink.text }}
          <ArrowUpRightIcon class="icon" />
        </a>
        <NuxtLink
          v-if="sectionData.contactCTA"
          to="/contact"
          class="btn btn--outline"
        >
          {{ sectionData.contactCTA.text }}
          <MailIcon class="icon" />
        </NuxtLink>
      </div>

      <slot name="illustration" />
    </div>
  </section>
</template>
<style scoped>
.partners {
  @apply mb-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-8;
}

.partners__item {
  @apply flex h-20 w-44 items-center justify-center;
}

.partners__logo {
  @apply max-h-full max-w-full object-contain;
}
</style>
