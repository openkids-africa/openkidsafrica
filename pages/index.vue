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
const content = ref({
  heroSection: {
    caption: "Welcome to OpenKids Africa!",
    subtext:
      "OpenKids Africa is a non-profit organization that was formerly known as Pranet Technology Initiative. We believe that information and communication technology is the key to the strong and sustainable development of a country. Therefore, we leverage open educational resources to provide quality information technology education and materials for kids and schools in rural communities in Africa.",
    images: [
      {
        src: "/assets/images/kids-image-1.jpg",
        alt: "Hero Image 1",
      },
      {
        src: "/assets/images/kids-image-2.jpg",
        alt: "Hero Image 2",
      },
      {
        type: "block",
        color: "purple",
      },
      {
        src: "/assets/images/kids-image-3.jpg",
        alt: "Hero Image 3",
      },
      {
        src: "/assets/images/kids-image-4.jpg",
        alt: "Hero Image 4",
      },
      {
        type: "block",
        color: "orange",
      },
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
});
</script>
<template>
  <SiteHero
    :caption="content.heroSection.caption"
    :subtext="content.heroSection.subtext"
    :images="content.heroSection.images"
  />
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
          <article class="doings-card">
            <div class="wrapper">
              <header class="doings-card__header">
                <h3 class="doings-card__title">{{ card.title }}</h3>
                <p class="doings-card__text">{{ card.text }}</p>
              </header>
              <div class="doings-card__icon-cont">
                <UserGroupIcon
                  v-if="card.id == 'leadership'"
                  class="doings-card__icon icon"
                />
                <ArrowsPointingInIcon
                  v-else-if="card.id == 'collaboration'"
                  class="doings-card__icon icon"
                />
                <SpeakerWaveIcon
                  v-else-if="card.id == 'awareness'"
                  class="doings-card__icon icon"
                />
                <UserIcon
                  v-else-if="card.id == 'equality'"
                  class="doings-card__icon icon"
                />
                <GlobeEuropeAfricaIcon
                  v-else-if="card.id == 'sustainability'"
                  class="doings-card__icon icon"
                />
                <AcademicCapIcon
                  v-else-if="card.id == 'education'"
                  class="doings-card__icon icon"
                />
                <SparklesIcon v-else class="doings-card__icon icon" />
              </div>
            </div>
          </article>
        </li>
      </ul>
      <!-- <SiteHeroImagesGrid :images="content.heroSection.images" /> -->
    </div>
  </section>
</template>
<style scoped>
.card-list {
  @apply grid gap-8 lg:grid-cols-3;
}

.doings-card {
  @apply h-full rounded-3xl border  border-slate-100 p-8 dark:border-slate-800 dark:bg-slate-900;
}

.doings-card > .wrapper {
  @apply flex flex-col-reverse gap-4;
}

.doings-card__title {
  @apply text-2xl font-bold;
}

.doings-card__icon-cont {
  @apply flex w-fit items-center justify-center rounded-2xl border border-orange-200  bg-orange-100 p-4 shadow-inner shadow-orange-50 dark:border-orange-600 dark:bg-orange-800 dark:shadow-orange-700;
}

.doings-card__icon {
  @apply h-10 w-10 text-orange-500 dark:text-orange-300;
}
</style>
