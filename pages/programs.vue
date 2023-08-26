<script setup lang="ts">
const programsContent = ref({
  heroSection: {
    caption: "Every child deserves equal access to technology",
    subtext:
      "OpenKids Africa is reaching out to kids and schools in remote African areas using open educational resources.",
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
        color: "orange",
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
        color: "purple",
      },
    ],
  },
  whySection: {
    title: "Why start now?",
    text: [
      "The world is rapidly developing because of the way digital technologies and resources are shaping the educational sector. We believe that every child should be given the right to access open digital resources regardless of their location, gender, or income status. This way, kids can maximize technology resources to find solutions to common problems, innovate, and thrive in Africa’s emerging digital economy.",
      "OpenKids Africa is leveraging open educational resources to help kids gain early digital skills that will build their cognitive intelligence and engage their imaginations to build and create. Through these materials, they will acquire the foundational skills required to thrive as they grow and develop in their respective career choices. We teach the children to recognize problems in their immediate environment, creatively think of solutions, design an algorithm, and execute solutions. These active exercises build a solid structure of teamwork, critical thinking, communication, and creativity. It also builds major life skills such as patience, tolerance, and focus, which prepare them to surmount future problems.",
      "Also, we are teaching rural schools how to access free digital resources that will aid their teaching. We also provide them with refurbished computers powered by open-source technologies.",
    ],
    donateLink: {
      text: "Donate to OpenKids Africa",
      url: "http://paypal.me/openkidsafrica",
    },
  },
  objectiveSection: {
    title: "Our Objectives",
    objectives: [
      {
        title: "Focus On Underserved Communities In Africa",
        text: "To collaborate with organizations to educate, create, and distribute open digital resources to schools in rural communities.",
      },
      {
        title: "Advocate",
        text: "Advocate for the use of and access to open educational technologies and resources in rural schools in Africa.",
      },
      {
        title: "Changing The Ratio",
        text: "We are getting more women and girls to consider a future career in technology by partnering with TechSheCan UK and using digital lesson plans with female instructors.",
      },
      {
        title: "Collaborate",
        text: "To collaborate with organizations to educate, create, and distribute open digital resources to schools in rural communities.",
      },
    ],
  },
});
</script>
<template>
  <header class="page-header site-section programs-header">
    <div class="wrapper">
      <div class="page-header__text-cont">
        <h1 class="page-header__caption">
          {{ programsContent.heroSection.caption }}
        </h1>
        <p class="page-header__subtext">
          {{ programsContent.heroSection.subtext }}
        </p>
      </div>
      <SiteHeroImagesGrid
        class="programs-header__media-cont"
        :images="programsContent.heroSection.images"
      />
    </div>
  </header>
  <section class="site-section why-section">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">
          {{ programsContent.whySection.title }}
        </h2>
        <p class="site-section__subtext">
          {{ programsContent.whySection.text[0] }}
        </p>
      </header>
      <p
        v-for="(text, index) in programsContent.whySection.text.slice(1)"
        :key="index"
        class="site-section__text"
      >
        {{ text }}
      </p>
    </div>
  </section>
  <section class="site-section">
    <div class="wrapper"></div>
  </section>
</template>
<style scoped>
.programs-header {
}
.programs-header > .wrapper {
  @apply max-w-7xl flex-col-reverse gap-8 lg:flex-row;
}
.page-header__text-cont {
  @apply lg:max-w-xl xl:ml-16;
}
.page-header__text-cont,
.programs-header__media-cont {
  @apply lg:flex-1;
}

.programs-header__media-cont {
  @apply relative lg:w-[150%];
}

.why-section {
  @apply relative px-[calc(100%/9)];
}

.why-section::before,
.why-section::after {
  content: "";
  @apply absolute left-0 top-0 h-full max-h-96 w-[calc(100%/9)] bg-cover bg-center bg-no-repeat lg:max-h-full xl:bg-contain;
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

.why-section .site-section__header {
  @apply text-left;
}
</style>
