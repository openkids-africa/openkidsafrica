<script setup lang="ts">
import { Loader } from "lucide-vue-next";
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
        alt: "Hero Image 1",
      },
      {
        type: "block",
        color: "orange",
      },
      {
        src: "/assets/images/photos/photo-18.jpg",
        alt: "Hero Image 2",
      },
      {
        src: "/assets/images/photos/photo-19.jpg",
        alt: "Hero Image 3",
      },
      {
        src: "/assets/images/photos/photo-20.jpg",
        alt: "Hero Image 4",
      },
      {
        type: "block",
        color: "purple",
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
  if (lastId === null) {
    return [];
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
if (data.value) {
  lastPublishedAt.value = getLastItem(data.value).publishedAt;
  lastId.value = getLastItem(data.value)._id;
}

useHead({
  title: "News",
  script: [
    {
      src: "https://platform.twitter.com/widgets.js",
      async: true,
      defer: true,
    },
  ],
});
</script>
<template>
  <PageIntro
    :caption="newsContent.heroSection.title"
    :text="newsContent.heroSection.text"
    :images="newsContent.heroSection.images"
  />

  <section class="site-section">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">Latest News</h2>
      </header>
      <ul class="news-grid">
        <li v-for="article in articles || data" :key="article._id">
          <NuxtLink :to="`/news/${article.slug.current}`" class="block h-full">
            <ArticleCard :article="article" />
          </NuxtLink>
        </li>
      </ul>
      <div class="action-cont pt-10">
        <button
          :aria-label="isLoading ? 'Loading...' : 'Load More'"
          v-if="lastId !== null"
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
      <header class="site-section__header">
        <h2 class="site-section__caption">Tweets</h2>
        <p>Follow us on Twitter to get the latest updates and news.</p>
      </header>
      <div class="mx-auto max-w-2xl overflow-hidden rounded-tile">
        <a
          class="twitter-timeline flex justify-center text-center"
          href="https://twitter.com/openkidsafrica?ref_src=twsrc%5Etfw"
          >Tweets by openkidsafrica</a
        >
      </div>
    </div>
  </section>
</template>
<style scoped>
.news-grid {
  @apply grid gap-6 md:grid-cols-2 lg:grid-cols-3;
}
</style>
