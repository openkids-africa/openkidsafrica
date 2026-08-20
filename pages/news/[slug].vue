<script setup lang="ts">
import { ClockIcon, UserIcon } from "@heroicons/vue/24/solid";
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
</script>
<template>
  <article class="article">
    <header class="article__header site-section">
      <div class="wrapper">
        <h1 class="site-section__caption">{{ data.title }}</h1>
        <p class="site-section__subtext">
          {{ data.description }}
        </p>

        <div class="article__meta">
          <figure class="meta__item">
            <NuxtImg
              class="meta__item-img"
              :src="data.author.imageUrl"
              width="32"
              height="32"
              :alt="data.author.name"
            />
            <figcaption>By {{ data.author.name }}</figcaption>
          </figure>
          <div class="meta__item">
            <ClockIcon class="icon !h-8 !w-8" />
            <time class="meta__item-value" :datetime="data.publishedAt">
              {{ new Date(data.publishedAt).toDateString() }}
            </time>
          </div>
        </div>
      </div>
      <figure class="article__cover w-full">
        <NuxtPicture
          class="article__picture img-cont"
          :src="data.imageUrl"
          width="1280"
          height="824"
          sizes="xs:200px md:500px lg:1024"
        />
      </figure>
    </header>
    <section class="article__body site-section">
      <div class="wrapper prose">
        <SanityContent :blocks="data.body" />
      </div>
    </section>
  </article>
</template>
<style scoped>
.article__header {
  @apply relative mx-auto flex max-w-7xl flex-col-reverse items-center py-0;
}

.article__header > .wrapper {
  @apply flex max-w-4xl flex-col gap-2 text-left;
}

.article__meta {
  @apply flex gap-2;
}

.meta__item {
  @apply inline-flex items-center gap-2 rounded-full bg-slate-50 p-2 font-heading font-semibold text-slate-600;
}

.article__cover {
  @apply relative w-full py-8;
}

.article__picture :deep(img) {
  @apply h-[32rem] w-full rounded-2xl object-cover;
}

.article__body {
  @apply py-8;
}

.article__body > .wrapper {
  @apply max-w-4xl;
}
</style>
