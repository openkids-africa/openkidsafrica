<script setup lang="ts">
import { Loader, ExternalLinkIcon } from "lucide-vue-next";
const { socialLinks } = useSiteNav();
const query = groq`
*[_type == "post" && (
  publishedAt > $lastPublishedAt ||
  (publishedAt == $lastPublishedAt && _id > $lastId)
)] | order(publishedAt) [0...3]
{_id, slug, title, publishedAt, description, "imageUrl": mainImage.asset->url, author->{name}}`;

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

const isLoading = ref(false);
const lastPublishedAt = ref("");
const lastId = ref<string | null>("");
const articles = ref<ArticleCard[]>([]);

const getLastItem = (value: string | any[]) => value[value.length - 1];

const fetchNextPage = async () => {
  isLoading.value = true;
  if (lastId.value === null) {
    isLoading.value = false;
    return ref([]);
  }

  const { data: result } = await useSanityQuery(query, {
    lastPublishedAt: lastPublishedAt.value,
    lastId: lastId.value,
  });

  if (result.value?.length > 0) {
    lastPublishedAt.value = getLastItem(result.value).publishedAt;
    lastId.value = getLastItem(result.value)._id;
  } else {
    lastId.value = null; // Reached the end
  }
  isLoading.value = false;
  return result;
};

const handleFetchNextPage = async () => {
  const result = await fetchNextPage();

  articles.value = [...(articles.value || []), ...result.value];
};

const { data, refresh } = useSanityQuery(query, {
  lastPublishedAt: lastPublishedAt.value,
  lastId: lastId.value,
});

articles.value = data.value;
if (data.value?.length) {
  lastPublishedAt.value = getLastItem(data.value).publishedAt;
  lastId.value = getLastItem(data.value)._id;
}
/* Derived from the fetched data, so server and client agree on it during
   hydration; a page shorter than three posts is the last one. */
const hasMore = computed(() => {
  const list = articles.value?.length ? articles.value : data.value;
  return lastId.value !== null && (list?.length ?? 0) >= 3;
});

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
          <li
            v-for="article in articles || data"
            :key="article._id"
            class="js-reveal"
          >
            <NuxtLink
              :to="`/news/${article.slug.current}`"
              class="block h-full"
            >
              <ArticleCard :article="article" />
            </NuxtLink>
          </li>
        </ul>
        <div v-if="hasMore" class="action-cont pt-10">
          <button
            :aria-label="isLoading ? 'Loading...' : 'Load More'"
            class="btn btn--outline"
            @click="handleFetchNextPage"
          >
            <Loader class="icon animate-spin" v-if="isLoading" />
            <span v-else>Load More</span>
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
              <span class="chip__icon"><ExternalLinkIcon class="icon" /></span>
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
