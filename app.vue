<script setup lang="ts">
const route = useRoute();
const metaTitle = (route.meta.title || "Home") as string;
const description = `OpenKids Africa is a non-profit organization that empowers young minds through education. Explore a vibrant portfolio of educational programs, activities, and partnerships for children in rural communities in Africa. Join us in shaping a brighter future for the next generation. Discover the magic of learning with OpenKids Africa today!`;
const metaDescription = (route.meta.description || description) as string;

useHead({
  titleTemplate: (titleChunk) => {
    return `${titleChunk} | OpenKids Africa`;
  },
  title: metaTitle,
  meta: [
    {
      name: "description",
      content: metaDescription,
      key: "description",
    },
    //Open Graph
    {
      key: "og-type",
      property: "og:type",
      content: "website",
    },
    {
      key: "og-url",
      property: "og:url",
      content: `https://openkidsafrica.netlify.app/`, // Update with OpenKids Africa's website URL
    },
    {
      key: "og-title",
      property: "og:title",
      content: metaTitle,
    },
    {
      key: "og-description",
      property: "og:description",
      content: metaDescription,
    },
    {
      key: "og-image",
      property: "og:image",
      content: `https://openkidsafrica.netlify.app/assets/images/kids-image-3.jpg`, // Update with OpenKids Africa's image URL
    },
    //Twitter
    {
      key: "twitter-card",
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      key: "twitter-url",
      property: "twitter:url",
      content: `https://openkidsafrica.netlify.app/`, // Update with OpenKids Africa's website URL
    },
    {
      key: "twitter-title",
      property: "twitter:title",
      content: metaTitle,
    },
    {
      key: "twitter-description",
      property: "twitter:description",
      content: metaDescription,
    },
    {
      key: "twitter-image",
      property: "twitter:image",
      content: `https://openkidsafrica.netlify.app/assets/images/kids-image-3.jpg`, // Update with OpenKids Africa's image URL
    },
  ],
  // htmlAttrs: {
  //   class: theme.value === "dark" ? "dark" : "light",
  // },
});
</script>
<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
