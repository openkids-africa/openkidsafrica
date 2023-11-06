<script setup lang="ts">
import { MailIcon } from "lucide-vue-next";

const { lightText, sticky } = useSiteHeader();
const donateContent = ref({
  heroSection: {
    caption: "Donate to Openkids Africa",
    subtext:
      "Support our projects and help us reach more children in Africa. Your donation will help us provide education, food, and shelter to children in need.",
    images: [
      {
        src: "/assets/images/svg/Donate.svg",
        alt: "Donate Illustration",
      },
    ],
  },
  faqSection: {
    caption: "Donate FAQs",
    subtext: "Questions About Donating",
    faqs: [
      {
        topic: "How do I donate?",
        content:
          "You can donate to us by clicking the donate button on the top right corner of the page. You can also donate to us via PayPal by clicking the button below.",
      },
      {
        topic: "What is the impact of my donation?",
        content:
          "Your donation will help us provide education, food, and shelter to children in need.",
      },
    ],
  },
});
onMounted(() => {
  sticky.value = true;
  lightText.value = false;
});
useHead({
  title: donateContent.value.heroSection.caption,
  meta: [
    {
      name: "description",
      content: donateContent.value.heroSection.subtext,
      key: "description",
    },
    {
      property: "og:title",
      content: donateContent.value.heroSection.caption,
      key: "og:title",
    },
    {
      property: "og:description",
      content: donateContent.value.heroSection.subtext,
      key: "og:description",
    },
    {
      property: "twitter:title",
      content: donateContent.value.heroSection.caption,
      key: "twitter:title",
    },
    {
      property: "twitter:description",
      content: donateContent.value.heroSection.subtext,
      key: "twitter:description",
    },
  ],
});
</script>
<template>
  <header class="page-header site-section">
    <div class="wrapper">
      <div class="page-header__text-cont">
        <h1 class="page-header__caption">
          {{ donateContent.heroSection.caption }}
        </h1>
        <p class="page-header__subtext">
          {{ donateContent.heroSection.subtext }}
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
          :src="donateContent.heroSection.images[0].src"
          :alt="donateContent.heroSection.images[0].alt"
          class="abstract-illustration"
        />
      </div>
    </div>
  </header>
  <section class="site-section">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">
          Donate to empower the future of Africa
        </h2>
      </header>
      <DonateForm />
    </div>
  </section>
  <section class="site-section">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">
          {{ donateContent.faqSection.caption }}
        </h2>
        <p class="site-section__subcaption">
          {{ donateContent.faqSection.subtext }}
        </p>
      </header>
      <ul class="faq-list flex flex-col gap-4">
        <li
          v-for="(faq, index) in donateContent.faqSection.faqs"
          class="faq-list__item"
        >
          <FAQItem :faq="faq" :index="index" />
        </li>
      </ul>
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
