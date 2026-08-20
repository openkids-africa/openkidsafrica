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
import {
  ArrowRightIcon,
  HelpingHandIcon,
  HeartHandshakeIcon,
} from "lucide-vue-next";

const content = ref({
  heroSection: {
    caption:
      "Connecting every African child to a digital future through the delivery of free tech lessons in rural schools",
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
      "Therefore, we leverage free digital resources and open educational resources to provide quality information technology lessons and materials for kids and schools in rural communities in Africa.",
    ],
  },
  whatWeDoSection: {
    title: "What We Do",
    text: "OpenKids Africa is a non-profit organization collaborating with government, schools, and industry to provide free, quality information technology lessons and resources for children in rural African communities.",
    cards: [
      {
        id: "leadership",
        title: "Leadership",
        text: "We lead by advocating for the use and development of open educational resources and free digital materials for schools in underserved communities in Africa. This way, we can all work together to close the digital gap in our society.",
      },
      {
        id: "collaboration",
        title: "Collaboration",
        text: "We partner with organizations to provide free digital resources for schools in underserved communities, aiding in teaching and preparing children for a future career in technology.",
      },
      {
        id: "awareness",
        title: "Awareness",
        text: "We promote technology awareness for parents and guardians to inspire and motivate children to consider a career in technology in the future. Understanding the essence of technology in their future career pursuits is crucial for equipping children with the skills and mindset needed to thrive in the digital age.",
      },
      {
        id: "equality",
        title: "Equality",
        text: "To address the digital imbalance in the ICT industry, we promote information technology skills for girls in Africa. We collaborate with organizations that align with this mission.",
      },
      {
        id: "sustainability",
        title: "Sustainability",
        text: "To conserve resources and avoid e-waste, we accept donations of refurbished laptops from our partner organizations for children and schools in underserved communities.",
      },
      {
        id: "education",
        title: "Education",
        text: "With free educational materials, we empower African children in underserved communities to take the lead in Africa's emerging digital economy.",
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
      {
        name: "Microsoft",
        logo: "/assets/images/partners/microsoft-logo.svg",
      },
    ],
  },
});

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
  <aside class="announce">
    <div class="wrapper">
      <p class="announce__text">
        <span class="announce__tag">New</span>
        <span>
          <strong>AI for All</strong> — internationally accredited AI training
          for Nigerian teachers, with Tech She Can and Microsoft.
        </span>
      </p>
      <NuxtLink to="/programs/ai-for-all" class="announce__link">
        See the program
        <ArrowRightIcon class="icon h-4 w-4" />
      </NuxtLink>
    </div>
  </aside>
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
/* ANNOUNCEMENT BAND */
.announce {
  @apply border-b border-brand-100 bg-brand-50 px-4 py-3;
}

.announce > .wrapper {
  @apply m-auto flex w-full max-w-6xl flex-col items-center gap-x-6 gap-y-2 text-center md:flex-row md:justify-between md:text-left;
}

.announce__text {
  @apply flex flex-wrap items-center justify-center gap-2 text-base text-slate-700;
}

.announce__tag {
  @apply rounded-md bg-brand-600 px-2 py-0.5 font-heading text-xs font-bold uppercase tracking-wider text-white;
}

.announce__link {
  @apply flex shrink-0 items-center gap-1 font-semibold text-brand-700 underline-offset-4 hover:underline;
}
/* END ANNOUNCEMENT BAND */

.card-list {
  @apply grid gap-8 lg:grid-cols-2;
}

.welcome-section {
  @apply bg-slate-50;
}
</style>
