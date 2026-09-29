<script setup lang="ts">
import { ClockIcon } from "lucide-vue-next";
const route = useRoute();
const slug = route.params.slug;
const query = groq`
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  publishedAt,
  description,
  "imageUrl": mainImage.asset->url,
  author->{name, "imageUrl": image.asset->url},
  body
}`;

const { data, refresh } = useSanityQuery(query, {
  slug,
});
const { formatDate } = useFormat();

useHead({
  title: data.value?.title || "News",
});
</script>
<template>
  <article class="article">
    <header class="page-intro">
      <div class="wrapper">
        <div class="page-intro__text" v-reveal.stagger>
          <p class="site-section__eyebrow js-reveal">News</p>
          <h1 class="page-intro__caption js-reveal">{{ data.title }}</h1>
          <p class="page-intro__subtext js-reveal">{{ data.description }}</p>
          <div class="action-cont js-reveal pt-2">
            <span class="chip">
              <span class="chip__icon">
                <NuxtImg
                  class="h-7 w-7 rounded-full object-cover"
                  :src="data.author.imageUrl"
                  width="28"
                  height="28"
                  :alt="data.author.name"
                />
              </span>
              By {{ data.author.name }}
            </span>
            <span class="chip">
              <span class="chip__icon"><ClockIcon class="icon" /></span>
              <time :datetime="data.publishedAt">
                {{ formatDate(data.publishedAt) }}
              </time>
            </span>
          </div>
        </div>
        <figure class="article__cover js-reveal" v-reveal="0.15">
          <NuxtPicture
            :src="data.imageUrl"
            width="1280"
            height="720"
            sizes="xs:400px md:800px lg:1152px"
          />
        </figure>
      </div>
    </header>
    <section class="site-section pt-4">
      <div class="wrapper prose prose-lg">
        <SanityContent :blocks="data.body" />
      </div>
    </section>
  </article>
</template>
<style scoped>
.article__cover {
  @apply w-full overflow-hidden rounded-tile bg-brand-100;
}

.article__cover :deep(img) {
  @apply aspect-[16/9] h-auto w-full object-cover;
}

.prose {
  @apply mx-auto max-w-3xl;
}
</style>
