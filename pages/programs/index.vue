<script setup lang="ts">
import {
  ArrowUpRightIcon,
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
});
</script>
<template>
  <PageIntro
    :caption="content.heroSection.caption"
    :text="[content.heroSection.subtext]"
    :images="content.heroSection.images"
    :photos="3"
  />

  <section class="site-section">
    <div class="wrapper">
      <ul class="program-list" v-reveal.stagger>
        <li
          v-for="program in content.programs"
          :key="program.id"
          class="js-reveal"
        >
          <NuxtLink :to="program.path" class="tile tile--tint program-card">
            <div class="program-card__top">
              <span class="icon-badge !bg-white">
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
            <h2 class="tile__title">{{ program.title }}</h2>
            <p class="tile__text">{{ program.text }}</p>
            <span class="program-card__more">
              Read more
              <ArrowUpRightIcon class="icon h-4 w-4" />
            </span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped>
.program-list {
  @apply grid gap-4 lg:grid-cols-3;
}

.program-list > li {
  @apply h-full;
}

.program-card {
  @apply flex h-full flex-col gap-3 transition-colors hover:bg-brand-200/70;
}

.program-card__top {
  @apply flex items-center justify-between gap-3;
}

.program-card__badge {
  @apply rounded-full bg-brand-600 px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wider text-white;
}

.program-card__more {
  @apply mt-auto flex items-center gap-1 pt-3 text-sm font-semibold text-slate-900;
}
</style>
