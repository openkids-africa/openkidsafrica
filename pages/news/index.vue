<script setup lang="ts">
import type { Component } from "vue";
import {
  ExternalLinkIcon,
  TwitterIcon,
  LinkedinIcon,
  YoutubeIcon,
  FacebookIcon,
  InstagramIcon,
} from "lucide-vue-next";
const { socialLinks } = useSiteNav();

/* Each channel's own mark; a channel without one keeps the link arrow. */
const socialIcons: Record<string, Component> = {
  twitter: TwitterIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
};
const socialIcon = (name: string) =>
  socialIcons[name.toLowerCase()] ?? ExternalLinkIcon;
const newsContent = ref<{
  heroSection: BasicSectionContent;
}>({
  heroSection: {
    title: "Stay in the loop with News and Updates",
    text: [
      "Grab all the latest news for campaigns, donations, fund-raising or new projects from OpenKids Africa.",
    ],
    images: [
      {
        src: "/assets/images/photos/photo-17.jpg",
        alt: "The OpenKids Africa and Tech She Can volunteers on a school visit",
      },
    ],
  },
});

/* Posts are Markdown files in content/news, newest first, shown three at
   a time. */
const PAGE_SIZE = 3;
const { data: posts } = await useAsyncData("news", () =>
  queryContent<ArticleCard>("news")
    .only(["slug", "title", "date", "summary", "image", "imageAlt", "author"])
    .sort({ date: -1 })
    .find(),
);
const shown = ref(PAGE_SIZE);
const articles = computed(() => (posts.value ?? []).slice(0, shown.value));
const hasMore = computed(() => (posts.value?.length ?? 0) > shown.value);

useHead({
  title: "News",
});
</script>
<template>
  <div class="page">
    <PageIntro
      :caption="newsContent.heroSection.title"
      :text="newsContent.heroSection.text"
      :images="newsContent.heroSection.images"
    />

    <section class="site-section">
      <div class="wrapper">
        <header class="site-section__header js-reveal" v-reveal>
          <h2 class="site-section__caption">Latest News</h2>
        </header>
        <ul class="news-grid" v-reveal.stagger>
          <li v-for="article in articles" :key="article.slug" class="js-reveal">
            <NuxtLink :to="`/news/${article.slug}`" class="block h-full">
              <ArticleCard :article="article" />
            </NuxtLink>
          </li>
        </ul>
        <div v-if="hasMore" class="action-cont pt-10">
          <button class="btn btn--outline" @click="shown += PAGE_SIZE">
            Load More
          </button>
        </div>
      </div>
    </section>

    <section class="site-section bg-slate-50 lg:rounded-[3rem]">
      <div class="wrapper">
        <header class="site-section__header js-reveal" v-reveal>
          <h2 class="site-section__caption">Follow along</h2>
          <p>
            Day-to-day updates from our school visits and programs are on our
            social channels.
          </p>
        </header>
        <ul class="follow" v-reveal.stagger>
          <li v-for="link in socialLinks" :key="link.name" class="js-reveal">
            <a
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="chip"
            >
              <span class="chip__icon">
                <component :is="socialIcon(link.name)" class="icon" />
              </span>
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<style scoped>
.news-grid {
  @apply grid gap-6 md:grid-cols-2 lg:grid-cols-3;
}

.follow {
  @apply flex flex-wrap justify-center gap-3;
}
</style>
