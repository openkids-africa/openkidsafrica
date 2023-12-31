<script setup lang="ts">
import {
  AcademicCapIcon,
  ArrowsPointingInIcon,
  GlobeEuropeAfricaIcon,
  SparklesIcon,
  SpeakerWaveIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/vue/24/solid";
import { HelpingHandIcon, HeartHandshakeIcon } from "lucide-vue-next";

const { lightText, sticky, scrolled } = useSiteHeader();

const content = ref({
  heroSection: {
    caption:
      "Connecting every African child to a digital future through open educational resources",
    subtext: "Welcome to OpenKids Africa",
    // subcaption:
    //   "OpenKids Africa is a non-profit organization. We believe that information and communication technology is the key to the strong and sustainable development of a country. Therefore, we leverage open educational resources to provide quality information technology education and materials for kids and schools in rural communities in Africa.",
    images: [
      {
        src: "/assets/images/photos/photo-14.jpg",
        alt: "Hero Image 1",
      },
      {
        src: "/assets/images/photos/photo-26.jpg",
        alt: "Hero Image 2",
      },
      {
        type: "block",
        color: "purple",
      },
      {
        src: "/assets/images/photos/photo-2.jpg",
        alt: "Hero Image 3",
      },
      {
        src: "/assets/images/photos/photo-2.jpeg",
        alt: "Hero Image 4",
      },
      {
        type: "block",
        color: "orange",
      },
    ],
  },
  welcomeSection: {
    title: "Welcome to Openkids Africa",
    text: [
      "OpenKids Africa is a non-profit organization. We believe that information and communication technology is the key to the strong and sustainable development of a country.",
      "Therefore, we leverage open educational resources to provide quality information technology education and materials for kids and schools in rural communities in Africa.",
    ],
  },
  whatWeDoSection: {
    title: "What We Do",
    text: "OpenKids Africa is a non-profit organization collaborating with government, schools, and industry to provide free, quality information technology education and resources for children in rural African communities.",
    cards: [
      {
        id: "leadership",
        title: "Leadership",
        text: "We lead by advocating for the use and development of open educational resources for schools in underserved communities in Africa. This way, we can all work together to close the digital gap in our society.",
      },
      {
        id: "collaboration",
        title: "Collaboration",
        text: "We are partnering with organizations to provide open educational resources for schools in underserved communities to aid in teaching and preparing children for a future career in technology.",
      },
      {
        id: "awareness",
        title: "Awareness",
        text: "We are promoting technology awareness for parents and guardians to help inspire and motivate children to consider a career in technology in the future.",
      },
      {
        id: "equality",
        title: "Equality",
        text: "To address the digital imbalance in the ICT industry, we are promoting information technology skills for girls in Africa. We are collaborating with Tech She Can UK to improve the ratio and inspire more females to choose a career in technology.",
      },
      {
        id: "sustainability",
        title: "Sustainability",
        text: "To enable us to conserve resources and avoid e-waste, we accept donations of refurbished laptops from our partner organizations for children and schools in underserved communities.",
      },
      {
        id: "education",
        title: "Education",
        text: "With free educational materials, we are educating, inspiring, and equipping African kids in underserved communities to take the lead in Africa's emerging digital economy.",
      },
    ],
  },
  partnersSection: {
    title: "Our Partners",
    donateLink: {
      text: "Donate to OpenKids Africa",
      url: "http://paypal.me/openkidsafrica",
    },
    contactCTA: {
      id: "partner",
      text: "Partner with Us",
    },
    partners: [
      {
        name: "Tech She Can",
        logo: "/assets/images/partners/tech-she-can-logo.svg",
      },
    ],
  },
});

// onMounted(() => {
lightText.value = true;
sticky.value = false;
// });

useHead({
  title: "Home",
});
</script>
<template>
  <SiteHero
    :caption="content.heroSection.caption"
    :subtext="content.heroSection.subtext"
    :images="content.heroSection.images"
  />
  <section class="site-section welcome-section">
    <div class="wrapper">
      <header class="site-section__header site-section__header--left">
        <h2 class="site-section__caption">
          {{ content.welcomeSection.title }}
        </h2>
      </header>
      <div class="site-section__text-cont">
        <p
          class="site-section__subtext"
          v-for="(text, i) in content.welcomeSection.text"
          :key="i"
        >
          {{ text }}
        </p>
      </div>
    </div>
  </section>
  <section class="site-section">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">
          {{ content.whatWeDoSection.title }}
        </h2>
        <p class="site-section__subtext m-auto max-w-2xl">
          {{ content.whatWeDoSection.text }}
        </p>
      </header>
      <ul class="card-list">
        <li
          v-for="(card, index) in content.whatWeDoSection.cards"
          :key="index"
          class="card-list__item"
        >
          <DoingsCard :card-content="card" />
        </li>
      </ul>
      <!-- <SiteHeroImagesGrid :images="content.heroSection.images" /> -->
    </div>
  </section>
  <PartnersSection :section-data="content.partnersSection">
    <template #illustration>
      <SiteSlideshow class="m-auto max-w-7xl" />
    </template>
  </PartnersSection>
</template>
<style scoped>
.card-list {
  @apply grid gap-8 lg:grid-cols-2;
}

.welcome-section {
  @apply bg-slate-200 text-slate-900;
}
</style>
