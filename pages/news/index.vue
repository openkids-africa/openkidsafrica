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
    // images: [
    //   {
    //     src: "/assets/images/svg/updates.svg",
    //     alt: "Blog Hero",
    //   },
    // ],
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
  console.log("articles", articles.value, "articlessss", articles);
  console.log("result", result);

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
</script>
<template>
  <header class="page-header site-section">
    <div class="wrapper !max-w-[90rem]">
      <div class="page-header__text-cont 2xl:!ml-40">
        <h1 class="page-header__caption">
          {{ newsContent.heroSection.title }}
        </h1>
        <p
          v-for="text in newsContent.heroSection.text"
          class="page-header__subtext"
        >
          {{ text }}
        </p>
      </div>
      <!-- <div class="page-header__media-cont">
        <NuxtImg
          v-if="newsContent.heroSection?.images"
          :src="newsContent.heroSection?.images[0].src"
          :alt="newsContent.heroSection?.images[0].alt"
          class="abstract-illustration"
        />
      </div> -->
      <div class="page-header__media-cont img-cont">
        <!-- <IllustrationsAbstract1 class="abstract-illustration" /> -->
        <SiteHeroImagesGrid
          class="images-grid programs-header__media-cont"
          :images="newsContent.heroSection.images || []"
        />
      </div>
    </div>
  </header>
  <section class="site-section">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">Latest News</h2>
      </header>
      <ul class="flex flex-col gap-8 lg:gap-12">
        <li v-for="article in articles || data" :key="article._id">
          <NuxtLink
            :to="`/news/${article.slug.current}`"
            :aria-current-value="article.title"
          >
            <ArticleCard :article="article" />
          </NuxtLink>
        </li>
      </ul>
      <div class="flex justify-center py-12">
        <button
          :aria-label="isLoading ? 'Loading...' : 'Load More'"
          v-if="lastId !== null"
          class="btn"
          @click="handleFetchNextPage"
        >
          <Loader class="icon animate-spin" v-if="isLoading" />
          <span v-else class="text"> Load More </span>
        </button>
      </div>
    </div>
  </section>
</template>
<style scoped>
.page-header {
  @apply py-0;
}
.page-header__text-cont {
  /* @apply min-h-[20rem]; */
}
</style>
