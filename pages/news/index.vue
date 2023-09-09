<script setup lang="ts">
const query = `*[_type == "post"]{_id, slug, title, publishedAt, description, "imageUrl": mainImage.asset->url, author->{name}}`;
const { data, refresh } = useSanityQuery(query);

const newsContent = ref<{
  heroSection: BasicSectionContent;
}>({
  heroSection: {
    title: "Stay in the loop with News and Updates",
    text: [
      "Grab all the latest news for campaigns, donations, fund-raising or new projects from OpenKids Africa.",
    ],
  },
});

console.log({
  data,
});
</script>
<template>
  <header class="page-header site-section">
    <div class="wrapper">
      <div class="page-header__text-cont">
        <h1 class="page-header__caption">
          {{ newsContent.heroSection.title }}
        </h1>
        <p
          v-for="text in newsContent.heroSection.text"
          class="page-header__text"
        >
          {{ text }}
        </p>
      </div>
    </div>
  </header>
  <section class="site-section">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">Latest News</h2>
      </header>
      <ul class="flex flex-col gap-8 lg:gap-12">
        <li v-for="article in data" :key="article._id">
          <NuxtLink :to="`/news/${article.slug.current}`">
            <ArticleCard :article="article" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped>
.page-header {
  @apply pb-0;
}
.page-header__text-cont {
  @apply min-h-[20rem];
}
</style>
