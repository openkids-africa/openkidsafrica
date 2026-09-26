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
    <div class="team-card__img-cont">
      <NuxtImg
        format="webp"
        sizes="sm:50vw md:33vw lg:25vw"
        loading="lazy"
        :src="member.image"
        :alt="member.name"
      />
    </div>
    <header class="team-card__header">
      <h3 class="team-card__title">{{ member.name }}</h3>
      <p class="team-card__role">{{ member.role }}</p>
    </header>
    <ul class="team-card__socials">
      <li
        v-for="(social, n) in member.socials.filter(
          (s) => s.name == 'linkedin' || s.name == 'twitter',
        )"
        :key="n"
      >
        <a
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="team-card__social"
          :aria-label="`${member.name} on ${social.name}`"
        >
          <TwitterIcon v-if="social.name == 'twitter'" class="icon" />
          <LinkedinIcon v-else-if="social.name == 'linkedin'" class="icon" />
          <FacebookIcon v-else-if="social.name == 'facebook'" class="icon" />
          <InstagramIcon v-else-if="social.name == 'instagram'" class="icon" />
          <ExternalLinkIcon v-else class="icon" />
        </a>
      </li>
    </ul>
    <details v-if="$slots.default" class="team-card__details">
      <summary class="btn btn--outline btn--sm team-card__summary">
        Read more
      </summary>
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

/* Portrait on a tinted rounded tile, the way the reference frames people. */
.team-card__img-cont {
  @apply flex aspect-[4/5] items-end justify-center overflow-hidden rounded-tile bg-brand-100;
}

.team-card__img-cont > img {
  @apply h-[92%] w-auto max-w-full object-contain object-bottom;
}

.team-card__header {
  @apply flex flex-col gap-1;
}

.team-card__title {
  @apply font-heading text-xl font-semibold text-slate-900;
}

.team-card__role {
  @apply text-sm text-slate-600;
}

.team-card__socials {
  @apply flex flex-wrap gap-2;
}

.team-card__social {
  @apply flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-colors hover:bg-brand-100 hover:text-brand-800;
}

.team-card__social > .icon {
  @apply h-4 w-4;
}

.team-card__summary {
  @apply w-fit cursor-pointer list-none;
}

.team-card__summary::-webkit-details-marker {
  display: none;
}

.team-card__description {
  @apply mt-4 flex flex-col gap-3 rounded-2xl bg-slate-50 p-5 text-base text-slate-600;
}
</style>
