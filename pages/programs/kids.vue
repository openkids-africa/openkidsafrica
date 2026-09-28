<script setup lang="ts">
const programsContent = ref({
  heroSection: {
    caption: "Empowering Every Child: The OpenKids Africa Kids Program",
    subtext:
      "In a world where thousands of children lack access to quality education, the OpenKids Africa Kids Program stands as a beacon of hope. We believe that every child, regardless of their background or circumstances, deserves the opportunity to thrive in today's digital age",
    images: [
      {
        src: "/assets/images/photos/photo-2.jpg",
        alt: "A pupil speaking up during a class session",
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
  },
  joinSection: {
    title: "Join Us",
    text: [
      "The OpenKids Africa Kids Program is more than just a program. It's a movement for change. Together, we can break down barriers and build a brighter future for children everywhere.",
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
  <div class="page">
    <PageIntro
      :caption="programsContent.heroSection.caption"
      :text="[programsContent.heroSection.subtext]"
      :images="programsContent.heroSection.images"
    >
      <template #eyebrow>Kids Program</template>
      <template #actions>
        <NuxtLink :to="programsContent.joinSection.actionLink.url" class="btn">
          {{ programsContent.joinSection.actionLink.text }}
        </NuxtLink>
      </template>
    </PageIntro>

    <!-- WHY + APPROACH: photo beside a panel, then mirrored -->
    <section class="site-section">
      <div class="wrapper flex flex-col gap-4">
        <div class="zigzag js-reveal" v-reveal.stagger>
          <PhotoTile
            class="zigzag__photo"
            src="/assets/images/photos/photo-15.jpg"
            alt="A child being helped into a virtual-reality headset"
          />
          <div class="panel flex h-full flex-col">
            <div class="panel__head">
              <h2 class="panel__title">
                {{ programsContent.whySection.title }}
              </h2>
            </div>
            <div class="panel__body grow">
              <p
                v-for="(text, index) in programsContent.whySection.text"
                :key="index"
              >
                {{ text }}
              </p>
            </div>
          </div>
        </div>
        <div class="zigzag zigzag--flip js-reveal" v-reveal.stagger>
          <PhotoTile
            class="zigzag__photo"
            src="/assets/images/photos/photo-39.jpg"
            alt="Pupils watching a lesson on screen"
          />
          <div class="panel flex h-full flex-col">
            <div class="panel__head">
              <h2 class="panel__title">
                {{ programsContent.approachSection.title }}
              </h2>
            </div>
            <div class="panel__body grow">
              <p
                v-for="(text, index) in programsContent.approachSection.text"
                :key="index"
              >
                {{ text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- OBJECTIVES: copy beside its photo, then arrow cards -->
    <section class="site-section pt-0">
      <div class="wrapper">
        <SplitFeature
          src="/assets/images/photos/photo-9.jpg"
          alt="A pupil presenting to her class"
          :title="programsContent.objectiveSection.title"
          :text="programsContent.joinSection.text[0]"
        >
          <ul class="card-row md:!grid-cols-2 lg:!grid-cols-2">
            <li
              v-for="objective in programsContent.objectiveSection.objectives"
              :key="objective.id"
            >
              <DoingsCard :card-content="objective" />
            </li>
          </ul>
        </SplitFeature>
      </div>
    </section>

    <CtaBand
      :title="programsContent.joinSection.title"
      :text="programsContent.joinSection.text[0]"
      :action-text="programsContent.joinSection.actionLink.text"
      :action-to="programsContent.joinSection.actionLink.url"
    />
  </div>
</template>
