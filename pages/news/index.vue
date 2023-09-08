<script setup lang="ts">
const query = `*[_type == "post"]`;
const { data, refresh } = useSanityQuery(query);

const newsContent = ref<{
  heroSection: BasicSectionContent;
}>({
  heroSection: {
    title: "Latest News and Updates from the Team",
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
</template>
