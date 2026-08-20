<script setup lang="ts">
import {
  TwitterIcon,
  ExternalLinkIcon,
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
} from "lucide-vue-next";

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
        <NuxtImg
          format="webp"
          sizes="sm:50vw md:33vw lg:25vw"
          loading="lazy"
          :src="member.image"
          :alt="member.name"
        />
      </div>
    </header>
    <ul class="team-card__socials">
      <li
        v-for="(social, i) in member.socials.filter(
          (s) => s.name == 'linkedin' || s.name == 'twitter',
        )"
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
          <!-- for fb -->
          <FacebookIcon v-else-if="social.name == 'facebook'" class="icon" />
          <!-- instagram -->
          <InstagramIcon v-else-if="social.name == 'instagram'" class="icon" />
          <ExternalLinkIcon v-else class="icon" />
        </a>
      </li>
    </ul>
    <!-- accordion for description slot -->
    <details class="team-card__details">
      <summary class="team-card__summary btn btn--alt">Read more</summary>
      <div class="team-card__description">
        <slot />
      </div>
    </details>
  </article>
</template>
<style scoped>
.team-card {
  @apply flex h-full flex-col gap-4;
}

.team-card__header {
  @apply flex flex-col-reverse gap-4;
}

.team-card__title {
  @apply font-heading text-2xl font-bold;
}

.team-card__img-cont {
  @apply mt-20 flex h-72 items-end rounded-3xl bg-slate-950 bg-cover lg:h-56;
}

.team-card__img-cont > img {
  @apply h-96 rounded-3xl object-top lg:h-80;
}

.team-card__socials {
  @apply flex flex-wrap gap-2;
}

.team-card__details {
  @apply flex flex-col gap-4;
}

.team-card__summary {
  @apply flex w-fit cursor-pointer;
}

.team-card__description {
  @apply -mx-4 my-4 flex flex-col gap-4 rounded-2xl border border-slate-100 p-4;
}
</style>
