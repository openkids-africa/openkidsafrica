<script setup lang="ts">
import { MailIcon } from "lucide-vue-next";

const { lightText, sticky } = useSiteHeader();
const contactContent = ref({
  heroSection: {
    caption: "Get in touch",
    subtext:
      "If you would like to get in touch with OpenKids Africa or donate to our projects, email us. We will be happy to get in touch with you.",
    images: [
      {
        src: "/assets/images/svg/Africa.svg",
        alt: "Contact Hero",
      },
    ],
  },
});
onMounted(() => {
  sticky.value = true;
  lightText.value = false;
});
useHead({
  title: "Contact Us",
  meta: [
    {
      name: "description",
      content: contactContent.value.heroSection.subtext,
      key: "description",
    },
    {
      property: "og:title",
      content: "Contact Us",
    },
    {
      property: "og:description",
      content: contactContent.value.heroSection.subtext,
    },
    {
      property: "twitter:title",
      content: "Contact Us",
    },
    {
      property: "twitter:description",
      content: contactContent.value.heroSection.subtext,
    },
  ],
});
</script>
<template>
  <header class="page-header site-section">
    <div class="wrapper">
      <div class="page-header__text-cont">
        <h1 class="page-header__caption">
          {{ contactContent.heroSection.caption }}
        </h1>
        <p class="page-header__subtext">
          {{ contactContent.heroSection.subtext }}
        </p>
        <a
          href="mailto:openkidsafrica@gmail.com"
          class="btn btn--primary !w-fit"
          :aria-label="`Email OpenKids Africa`"
        >
          <MailIcon class="icon" />
          <span class="text"> Email Us </span>
        </a>
      </div>
      <div class="page-header__media-cont">
        <img
          :src="contactContent.heroSection.images[0].src"
          :alt="contactContent.heroSection.images[0].alt"
          class="abstract-illustration"
        />
      </div>
    </div>
  </header>
  <section class="site-section">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">Contact Us</h2>
      </header>
      <ContactForm />
    </div>
  </section>
</template>
<style scoped>
.page-header > .wrapper {
  @apply flex-row;
}

.abstract-illustration {
  @apply absolute right-[0] top-1/2  h-[130%] w-2/3 -translate-y-[45.5%] max-sm:-right-[30%] md:w-1/2 lg:h-[110%] 2xl:w-auto;
}
</style>
