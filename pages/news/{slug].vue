<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug;
const query = groq`
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  publishedAt,
  description,
  "imageUrl": mainImage.asset->url,
  author->{name},
  body
}`;

const { data, refresh } = useSanityQuery(query, {
  slug,
});
</script>
<template>
  <header class="site-section">
    <div class="wrapper">
      <div class="text-cont">
        <h1 class="site-section__caption">{{ data.title }}</h1>
        <p class="site-section__subtext m-auto max-w-2xl">
          {{ data.description }}
        </p>
      </div>
      <figure class="img-cont">
        <img :src="data.imageUrl" :alt="data.title" />
      </figure>
    </div>
  </header>
</template>
