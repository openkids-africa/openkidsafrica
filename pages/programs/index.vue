<script setup lang="ts">
import {
  ArrowRightIcon,
  BookOpenIcon,
  BrainCircuitIcon,
  GraduationCapIcon,
} from "lucide-vue-next";

const description =
  "The OpenKids Africa programs: AI for All teacher training with Tech She Can and Microsoft, the Educators Program, and the Kids Program for schools in underserved communities across Africa.";

const content = ref({
  heroSection: {
    caption: "Programs",
    subtext:
      "We offer a variety of programs to help children in underserved and underdeveloped communities in Africa.",
    images: [
      {
        src: "/assets/images/photos/photo-16.jpg",
        alt: "A mentor teaching a group of pupils",
      },
      {
        src: "/assets/images/photos/photo-34.jpg",
        alt: "Children in a classroom session",
      },
      {
        type: "block",
        color: "orange",
      },
      {
        src: "/assets/images/photos/photo-24.jpg",
        alt: "Students at a shared computer",
      },
      {
        src: "/assets/images/photos/photo-12.jpg",
        alt: "Pupils taking part in a tech lesson",
      },
      {
        type: "block",
        color: "purple",
      },
    ],
  },
  programs: [
    {
      id: "ai-for-all",
      title: "AI for All",
      badge: "2026 pilot",
      text: "Internationally accredited AI training for Nigerian teachers, delivered with Tech She Can and Microsoft. Free, CPD-certified, and built for every subject.",
      path: "/programs/ai-for-all",
    },
    {
      id: "educators",
      title: "Educators Program",
      text: "We provide free tech lessons to educators in Africa to help them teach their students better.",
      path: "/programs/educators",
    },
    {
      id: "kids",
      title: "Kids Program",
      text: "We provide free tech lessons to kids in Africa to help them learn better.",
      path: "/programs/kids",
    },
  ],
});

useHead({
  title: "Programs",
  meta: [
    { name: "description", content: description, key: "description" },
    { key: "og-title", property: "og:title", content: "Programs" },
    { key: "og-description", property: "og:description", content: description },
    { key: "twitter-title", name: "twitter:title", content: "Programs" },
    {
      key: "twitter-description",
      name: "twitter:description",
      content: description,
    },
  ],
  link: [{ rel: "canonical", href: "https://www.openkidsafrica.org/programs" }],
});
</script>
<template>
  <header class="page-header site-section programs-header">
    <div class="wrapper !max-w-[90rem]">
      <div class="page-header__text-cont !min-h-0 2xl:!ml-40">
        <h1 class="page-header__caption">
          {{ content.heroSection.caption }}
        </h1>
        <p class="page-header__subtext measure">
          {{ content.heroSection.subtext }}
        </p>
      </div>
      <div class="page-header__media-cont img-cont">
        <SiteHeroImagesGrid
          class="images-grid"
          :images="content.heroSection.images || []"
        />
      </div>
    </div>
  </header>
  <section class="site-section">
    <div class="wrapper">
      <ul class="program-list">
        <li v-for="program in content.programs" :key="program.id">
          <NuxtLink :to="program.path" class="program-card card">
            <div class="program-card__top">
              <span class="icon-badge">
                <BrainCircuitIcon
                  v-if="program.id === 'ai-for-all'"
                  class="icon"
                />
                <GraduationCapIcon
                  v-else-if="program.id === 'educators'"
                  class="icon"
                />
                <BookOpenIcon v-else class="icon" />
              </span>
              <span v-if="program.badge" class="program-card__badge">
                {{ program.badge }}
              </span>
            </div>
            <h2 class="card__title">{{ program.title }}</h2>
            <p class="card__text">{{ program.text }}</p>
            <span class="program-card__more">
              Read more
              <ArrowRightIcon class="icon h-4 w-4" />
            </span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped>
.programs-header .page-header__text-cont {
  @apply lg:max-w-xl xl:ml-16;
}

.programs-header .page-header__text-cont,
.programs-header .images-grid {
  @apply lg:flex-1;
}

.program-list {
  @apply grid gap-6 lg:grid-cols-3;
}

.program-list > li {
  @apply h-full;
}

.program-card {
  @apply transition-shadow;
}

.program-card__top {
  @apply flex items-center justify-between gap-3;
}

.program-card__badge {
  @apply rounded-md bg-brand-600 px-2 py-0.5 font-heading text-xs font-bold uppercase tracking-wider text-white;
}

.program-card__more {
  @apply mt-auto flex items-center gap-1 pt-2 font-semibold text-brand-700;
}

.program-card:hover .program-card__more {
  @apply underline underline-offset-4;
}
</style>
