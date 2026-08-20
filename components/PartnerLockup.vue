<script setup lang="ts">
interface LockupPartner {
  name: string;
  logo: string;
  /* Logos come at different aspect ratios, so each one carries the height
     that makes it read at the same optical weight as its neighbours. */
  heightClass?: string;
  /* Set where the asset is a mark on its own and needs the name beside it
     to hold its place next to the other partners' full wordmarks. */
  wordmark?: string;
}

defineProps<{
  partners: LockupPartner[];
  label?: string;
}>();
</script>
<template>
  <div class="partner-lockup">
    <p v-if="label" class="partner-lockup__label">{{ label }}</p>
    <ul class="partner-lockup__list">
      <li
        v-for="(partner, index) in partners"
        :key="partner.name"
        class="partner-lockup__item"
      >
        <span v-if="index > 0" aria-hidden="true" class="partner-lockup__x">
          &times;
        </span>
        <span class="partner-lockup__brand">
          <NuxtImg
            :src="partner.logo"
            :alt="partner.wordmark ? '' : partner.name"
            :class="`partner-lockup__logo ${partner.heightClass || 'h-10'}`"
          />
          <span v-if="partner.wordmark" class="partner-lockup__wordmark">
            {{ partner.wordmark }}
          </span>
        </span>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.partner-lockup {
  @apply flex flex-col items-center gap-4 text-center;
}

.partner-lockup__label {
  @apply font-heading text-xs font-bold uppercase tracking-[0.14em] text-slate-500;
}

.partner-lockup__list {
  @apply flex flex-wrap items-center justify-center gap-x-5 gap-y-4;
}

.partner-lockup__item {
  @apply flex items-center gap-x-5;
}

.partner-lockup__brand {
  @apply flex items-center gap-2;
}

.partner-lockup__x {
  @apply font-heading text-xl font-medium text-slate-300;
}

.partner-lockup__logo {
  @apply w-auto object-contain;
}

.partner-lockup__wordmark {
  @apply font-heading text-lg font-black leading-none text-slate-800;
}
</style>
