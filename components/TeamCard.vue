<script setup lang="ts">
import { TwitterIcon, ExternalLinkIcon, LinkedinIcon } from "lucide-vue-next";

interface Member {
  name: string;
  role: string;
  image: string;
  socials: {
    name: string;
    url: string;
  }[];
}
defineProps<{
  member: Member;
  i: number;
}>();
</script>
<template>
  <article class="team-card">
    <header class="team-card__header">
      <div class="team-card__text-cont">
        <h3 class="team-card__title">
          {{ member.name }}
        </h3>
        <p>
          {{ member.role }}
        </p>
      </div>
      <div
        class="team-card__img-cont img-cont"
        :style="`background-image: url('/assets/images/svg/frame (${
          i % 4 === 0 ? 1 : (i % 4) + 1
        }).svg');`"
      >
        <img :src="member.image" :alt="member.name" />
      </div>
    </header>
    <ul class="team-card__socials">
      <li
        v-for="(social, i) in member.socials"
        :key="i"
        class="team-card__socials-item"
      >
        <a
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="btn block"
        >
          <TwitterIcon v-if="social.name == 'twitter'" class="icon" />
          <LinkedinIcon v-else-if="social.name == 'linkedin'" class="icon" />
          <ExternalLinkIcon v-else class="icon" />
        </a>
      </li>
    </ul>
  </article>
</template>
<style scoped>
.team-card {
  @apply flex flex-col gap-4;
}

.team-card__header {
  @apply flex  flex-col-reverse gap-4;
}

.team-card__title {
  @apply font-heading text-2xl font-bold;
}

.team-card__img-cont {
  @apply mt-20 flex h-72 lg:h-56  items-end  rounded-3xl bg-purple-950 bg-cover;
}

.team-card__img-cont > img {
  @apply h-96 lg:h-80 rounded-3xl object-top;
}

.team-card__socials {
  @apply flex flex-wrap gap-2;
}
</style>
