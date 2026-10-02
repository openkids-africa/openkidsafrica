<script setup lang="ts">
import { ArrowUpRightIcon } from "lucide-vue-next";

defineProps<{
  article: ArticleCard;
}>();
const { formatDate } = useFormat();
</script>
<template>
  <article class="article-card">
    <figure class="article-card__img-cont">
      <NuxtImg
        :src="article.image"
        width="800"
        height="480"
        fit="cover"
        loading="lazy"
        alt=""
      />
    </figure>
    <div class="article-card__body">
      <div class="article-card__meta">
        <time :datetime="article.date">{{ formatDate(article.date) }}</time>
        <span aria-hidden="true">·</span>
        <span>{{ article.author }}</span>
      </div>
      <h2 class="article-card__title">{{ article.title }}</h2>
      <p class="article-card__text">{{ article.summary }}</p>
      <span class="article-card__more">
        Read more
        <ArrowUpRightIcon class="icon h-4 w-4" />
      </span>
    </div>
  </article>
</template>
<style scoped>
.article-card {
  @apply flex h-full flex-col gap-4 rounded-tile border border-slate-200 bg-white p-4 transition-colors hover:bg-brand-50;
}

.article-card__img-cont {
  @apply aspect-[5/3] w-full overflow-hidden rounded-2xl bg-brand-100;
}

.article-card__img-cont > img {
  @apply h-full w-full object-cover;
}

.article-card__body {
  @apply flex grow flex-col gap-2 px-1 pb-1;
}

.article-card__meta {
  @apply flex flex-wrap items-center gap-2 text-xs text-slate-500;
}

.article-card__title {
  @apply font-heading text-xl font-semibold text-slate-900;
  text-wrap: balance;
}

.article-card__text {
  @apply text-base text-slate-600;
}

.article-card__more {
  @apply mt-auto flex items-center gap-1 pt-2 text-sm font-semibold text-brand-700;
}
</style>
