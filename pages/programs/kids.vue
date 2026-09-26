<script setup lang="ts">
import { ArrowUpRightIcon } from "lucide-vue-next";
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
  title: "Kids Program",
  meta: [
    {
      name: "description",
      content: programsContent.value.heroSection.subtext,
      key: "description",
    },
    { key: "og-title", property: "og:title", content: "Kids Program" },
    {
      key: "og-description",
      property: "og:description",
      content: programsContent.value.heroSection.subtext,
    },
    { key: "twitter-title", name: "twitter:title", content: "Kids Program" },
    {
      key: "twitter-description",
      name: "twitter:description",
      content: programsContent.value.heroSection.subtext,
    },
  ],
});
</script>
<template>
  <PageIntro
    :caption="programsContent.heroSection.caption"
    :text="[programsContent.heroSection.subtext]"
    :images="programsContent.heroSection.images"
  >
    <template #eyebrow>Kids Program</template>
    <template #actions>
      <NuxtLink :to="programsContent.joinSection.actionLink.url" class="btn">
        {{ programsContent.joinSection.actionLink.text }}
        <ArrowUpRightIcon class="icon" />
      </NuxtLink>
    </template>
  </PageIntro>

  <!-- WHY -->
  <section class="site-section">
    <div class="wrapper">
      <div class="split">
        <header class="site-section__header site-section__header--left !mb-0">
          <h2 class="site-section__caption">
            {{ programsContent.whySection.title }}
          </h2>
        </header>
        <div class="site-section__text-cont">
          <p
            v-for="(text, index) in programsContent.whySection.text"
            :key="index"
          >
            {{ text }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- APPROACH -->
  <section class="site-section bg-slate-50 lg:rounded-[3rem]">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">
          {{ programsContent.approachSection.title }}
        </h2>
        <p
          v-for="(text, index) in programsContent.approachSection.text"
          :key="index"
        >
          {{ text }}
        </p>
      </header>
      <SiteHeroImagesGrid :images="programsContent.approachSection.images" />
    </div>
  </section>

  <!-- OBJECTIVES -->
  <section class="site-section">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">
          {{ programsContent.objectiveSection.title }}
        </h2>
      </header>
      <ul class="objectives">
        <li
          v-for="objective in programsContent.objectiveSection.objectives"
          :key="objective.id"
        >
          <DoingsCard :card-content="objective" />
        </li>
      </ul>
    </div>
  </section>

  <CtaBand
    :title="programsContent.joinSection.title"
    :text="programsContent.joinSection.text[0]"
    :action-text="programsContent.joinSection.actionLink.text"
    :action-to="programsContent.joinSection.actionLink.url"
  />
</template>
<style scoped>
.split {
  @apply flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16;
}

.split .site-section__caption {
  @apply lg:text-4xl;
}

.objectives {
  @apply grid gap-4 md:grid-cols-2;
}
</style>
