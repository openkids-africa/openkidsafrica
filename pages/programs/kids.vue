<script setup lang="ts">
import { HelpingHandIcon } from "lucide-vue-next";
const programsContent = ref({
  heroSection: {
    caption: "Empowering Every Child: The OpenKids Africa Kids Program",
    subtext:
      "In a world where thousands of children lack access to quality education, the OpenKids Africa Kids Program stands as a beacon of hope. We believe that every child, regardless of their background or circumstances, deserves the opportunity to thrive in today's digital age",
    images: [
      {
        src: "/assets/images/photos/photo-33.jpeg",
        alt: "Hero Image 1",
      },
      {
        src: "/assets/images/photos/photo-34.jpg",
        alt: "Hero Image 2",
      },
      {
        type: "block",
        color: "orange",
      },
      {
        src: "/assets/images/photos/photo-35.jpg",
        alt: "Hero Image 3",
      },
      {
        src: "/assets/images/photos/photo-36.jpg",
        alt: "Hero Image 4",
      },
      {
        type: "block",
        color: "purple",
      },
    ],
  },
  whySection: {
    title: "Why Act Now?",
    text: [
      "The Kids Program is a vital lifeline for children in rural schools, where access to quality education is limited. By delivering tech lessons and innovative learning experiences, we empower these children to unlock their full potential and shape their futures.",
      "At OpenKids Africa, we understand that education is the key to unlocking endless opportunities. Through the Kids Program, we strive to equip children with the digital skills and knowledge needed to succeed in an increasingly interconnected world. By fostering creativity, problem-solving, critical-thinking, and collaboration, we prepare children to thrive in Africa's emerging digital economy.",
    ],
  },
  approachSection: {
    title: "Our Approach",
    text: [
      "The heart of the Kids Program lies in its delivery of tech lessons to children in rural schools. Through interactive lessons and hands-on activities, we engage children in the learning process, igniting their curiosity and passion for technology. From coding and robotics to digital literacy and beyond, our curriculum is designed to be inclusive and accessible to all.",
      "But our impact doesn't stop there. We also work closely with schools to ensure they have the tools and resources they need to support their students' learning journeys. From providing access to free digital resources to supplying refurbished computers, we empower schools to create environments where every child can succeed.",
    ],
    images: [
      {
        src: "/assets/images/photos/photo-12.jpg",
        alt: "Approach Image 1",
      },
      {
        src: "/assets/images/photos/photo-13.jpg",
        alt: "Approach Image 2",
      },
      {
        src: "/assets/images/photos/photo-14.jpg",
        alt: "Approach Image 3",
      },
      {
        src: "/assets/images/photos/photo-15.jpg",
        alt: "Approach Image 4",
      },
      {
        src: "/assets/images/photos/photo-16.jpg",
        alt: "Approach Image 3",
      },
      {
        src: "/assets/images/photos/photo-17.jpg",
        alt: "Approach Image 4",
      },
    ],
  },
  joinSection: {
    title: "Join Us",
    text: [
      "The OpenKids Africa Kids Program is more than just a program—it's a movement for change. Together, we can break down barriers and build a brighter future for children everywhere.",
    ],
    actionLink: {
      text: "Support Us",
      url: "/donate",
    },
  },
  objectiveSection: {
    title: "Our Objectives",
    objectives: [
      {
        id: "africa",
        title: "Empowering Underserved Communities in Africa",
        text: "We collaborate with organizations to provide tech lessons to schools in rural communities, fostering education and innovation.",
      },
      {
        id: "advocate",
        title: "Advocate",
        text: "Advocate for the utilization of free digital resources and open educational technologies in rural schools across Africa",
      },
      {
        id: "ratio",
        title: "Changing The Ratio",
        text: "Empowering women and girls to pursue careers in technology.",
      },
      {
        id: "collaboration",
        title: "Collaborate",
        text: "We collaborate directly with rural schools in educating, creating, and delivering our tech lessons to communities in rural areas.",
      },
    ],
  },
});

useHead({
  title: "Programs",
  meta: [
    {
      name: "description",
      content: programsContent.value.heroSection.subtext,
      key: "description",
    },
    {
      property: "og:title",
      content: "Contact Us",
    },
    {
      property: "og:description",
      content: programsContent.value.heroSection.subtext,
    },
    {
      property: "twitter:title",
      content: "Contact Us",
    },
    {
      property: "twitter:description",
      content: programsContent.value.heroSection.subtext,
    },
  ],
});
</script>
<template>
  <header class="page-header site-section programs-header">
    <div class="wrapper !max-w-[90rem]">
      <div class="page-header__text-cont 2xl:!ml-40">
        <h1 class="page-header__caption">
          {{ programsContent.heroSection.caption }}
        </h1>
        <p class="page-header__subtext">
          {{ programsContent.heroSection.subtext }}
        </p>
      </div>
      <!-- <SiteHeroImagesGrid
        class="images-grid programs-header__media-cont"
        :images="programsContent.heroSection.images"
      /> -->
      <div class="page-header__media-cont img-cont">
        <!-- <IllustrationsAbstract1 class="abstract-illustration" /> -->
        <SiteHeroImagesGrid
          class="images-grid programs-header__media-cont"
          :images="programsContent.heroSection.images || []"
        />
      </div>
    </div>
  </header>
  <section class="site-section why-section">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">
          {{ programsContent.whySection.title }}
        </h2>
        <!-- <p class="site-section__subtext">
          {{ programsContent.whySection.text[0] }}
        </p> -->
      </header>
      <p
        v-for="(text, index) in programsContent.whySection.text"
        :key="index"
        class="site-section__text"
      >
        {{ text }}
      </p>
    </div>
  </section>
  <section class="site-section approach-section">
    <div
      class="wrapper flex !max-w-7xl flex-col items-center gap-4 lg:grid lg:grid-cols-5 lg:gap-8"
    >
      <div class="cont lg:col-span-2 lg:col-start-4 lg:row-start-1">
        <header class="site-section__header site-section__header--left">
          <h2 class="site-section__caption">
            {{ programsContent.approachSection.title }}
          </h2>
        </header>
        <p
          v-for="(text, index) in programsContent.approachSection.text"
          :key="index"
          class="site-section__text"
        >
          {{ text }}
        </p>
      </div>
      <div class="cont lg:col-span-3 lg:col-start-1 lg:row-start-1">
        <SiteHeroImagesGrid
          class="images-grid programs-header__media-cont"
          :images="programsContent.approachSection.images"
        />
      </div>
    </div>
  </section>
  <section class="site-section join-section bg-brand-50">
    <div class="wrapper text-center">
      <header class="site-section__header">
        <h2 class="site-section__caption">
          {{ programsContent.joinSection.title }}
        </h2>
      </header>
      <p
        v-for="(text, index) in programsContent.joinSection.text"
        :key="index"
        class="site-section__text"
      >
        {{ text }}
      </p>
      <div class="action-cont py-8">
        <a
          :href="programsContent.joinSection.actionLink.url"
          target="_blank"
          rel="noopener noreferrer"
          class="btn"
        >
          <HelpingHandIcon class="icon" />
          <span class="text">
            {{ programsContent.joinSection.actionLink.text }}
          </span>
        </a>
      </div>
    </div>
  </section>
  <section class="site-section objectives-section">
    <div class="wrapper">
      <div class="objectives-section__text-cont">
        <!-- <header class="site-section__header">
          <h2 class="site-section__caption">
            {{ programsContent.objectiveSection.title }}
          </h2>
        </header> -->
        <ul class="objectives">
          <li
            v-for="(objective, i) in programsContent.objectiveSection
              .objectives"
            class="objectives__item"
          >
            <DoingsCard :card-content="objective" />
          </li>
        </ul>
      </div>
      <!-- <figure class="objectives-section__media-cont illustration-cont">
        <IllustrationsStats class="objectives-section__illustration" />
        <figcaption class="text-center">
          Our goal is to reach 1,000 kids by 2025
        </figcaption>
      </figure> -->
    </div>
  </section>
</template>
<style scoped>
.programs-header {
}
/* .programs-header > .wrapper {
  @apply max-w-7xl flex-col-reverse gap-8 lg:flex-row;
} */
.page-header__text-cont {
  @apply lg:max-w-xl xl:ml-16;
}
.page-header__text-cont,
.programs-header__media-cont {
  @apply lg:flex-1;
}

.programs-header__media-cont {
  /* @apply relative lg:w-[150%]; */
}

.why-section {
  @apply relative px-[calc(100%/7)];
}

.why-section::before,
.why-section::after {
  content: "";
  @apply absolute left-0 top-0 h-full max-h-96 w-[calc(100%/7)] bg-cover bg-center bg-no-repeat lg:max-h-full xl:bg-contain;
}

.why-section::before {
  @apply bg-right xl:bg-left;
  background-image: url("/assets/images/svg/LeftIllustrationabstract.svg");
}
.why-section::after {
  @apply left-auto right-0 bg-left xl:bg-right;
  background-image: url("/assets/images/svg/RightIllustrationabstract.svg");
}
.why-section > .wrapper {
  @apply flex flex-col gap-4;
}

.why-section .site-section__header,
.objectives-section .site-section__header {
  @apply text-left;
}

.objectives-section > .wrapper {
  @apply flex flex-col gap-4 lg:flex-row;
}

.objectives-section__text-cont,
.objectives-section__media-cont {
  @apply flex-1;
}

.objectives {
  @apply grid gap-4 md:grid-cols-2;
}

.objectives-section__media-cont {
  @apply flex flex-col items-center justify-center gap-4;
}

.objectives-section__illustration {
  @apply lg:h-[30rem];
}
</style>
