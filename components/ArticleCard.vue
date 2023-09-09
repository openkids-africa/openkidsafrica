<script setup lang="ts">
defineProps<{
  article: ArticleCard;
}>();
</script>
<template>
  <article class="article-card">
    <div class="wrapper">
      <header class="article-card__header">
        <h1 class="article-card__title">
          {{ article.title }}
        </h1>
        <p class="article-card__text">
          {{ article.description }}
        </p>
        <div class="article-card__meta">
          <span>
            Published on:
            <time>
              {{ new Date(article.publishedAt).toLocaleDateString() }}
            </time>
          </span>

          <span>{{ article.author.name }}</span>
        </div>
      </header>
      <figure class="article-card__img-cont img-cont">
        <img
          :src="article.imageUrl + '?h=200&w=400&fit=crop'"
          width="400"
          height="200"
          alt=""
        />
      </figure>
    </div>
  </article>
</template>
<style scoped>
.article-card {
  @apply w-full rounded-2xl border border-purple-100 p-6 dark:border-purple-800 dark:bg-slate-900;
}

.article-card > .wrapper {
  @apply flex flex-col gap-8 md:flex-row-reverse;
}

.article-card__header {
  @apply flex grow flex-col;
}

.article-card__title {
  @apply font-heading text-3xl font-bold lg:text-4xl;
}

.article-card__text {
  @apply lg:text-lg;
}

.article-card__img-cont {
  @apply h-[250px] w-[400px] shrink-0 overflow-hidden rounded-xl;
}

.article-card__meta {
  @apply mt-auto flex flex-col gap-1;
}
</style>
