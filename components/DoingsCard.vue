<script setup lang="ts">
interface CardContent {
  id: string;
  title: string;
  text: string;
}

import {
  AcademicCapIcon,
  ArrowsPointingInIcon,
  GlobeEuropeAfricaIcon,
  SparklesIcon,
  SpeakerWaveIcon,
  UserGroupIcon,
  UserIcon,
  HandRaisedIcon,
  AdjustmentsVerticalIcon,
} from "@heroicons/vue/24/solid";
defineProps<{
  cardContent: CardContent;
}>();
</script>
<template>
  <article class="doings-card card">
    <div class="wrapper">
      <header class="doings-card__header">
        <h3 class="doings-card__title">{{ cardContent.title }}</h3>
        <p class="doings-card__text">{{ cardContent.text }}</p>
      </header>
      <div class="doings-card__icon-cont">
        <UserGroupIcon
          v-if="cardContent.id == 'leadership'"
          class="doings-card__icon icon"
        />
        <ArrowsPointingInIcon
          v-else-if="cardContent.id == 'collaboration'"
          class="doings-card__icon icon"
        />
        <SpeakerWaveIcon
          v-else-if="cardContent.id == 'awareness'"
          class="doings-card__icon icon"
        />
        <UserIcon
          v-else-if="cardContent.id == 'equality'"
          class="doings-card__icon icon"
        />
        <GlobeEuropeAfricaIcon
          v-else-if="
            cardContent.id == 'sustainability' || cardContent.id == 'africa'
          "
          class="doings-card__icon icon"
        />
        <AcademicCapIcon
          v-else-if="cardContent.id == 'education'"
          class="doings-card__icon icon"
        />
        <HandRaisedIcon
          v-else-if="cardContent.id == 'advocate'"
          class="doings-card__icon icon"
        />
        <AdjustmentsVerticalIcon
          v-else-if="cardContent.id == 'ratio'"
          class="doings-card__icon icon"
        />
        <SparklesIcon v-else class="doings-card__icon icon" />
      </div>
    </div>
  </article>
</template>
<style scoped>
.doings-card > .wrapper {
  @apply flex flex-col-reverse gap-4;
}

.doings-card__title {
  @apply text-2xl font-bold;
}
</style>
