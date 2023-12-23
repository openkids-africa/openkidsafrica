<script setup lang="ts">
import { MailIcon } from "lucide-vue-next";

const { lightText, sticky } = useSiteHeader();
const donateContent = ref({
  heroSection: {
    caption: "Donate to Openkids Africa",
    subtext:
      "Support the Future of Children: Donate Monthly to Empower Children and Schools in Rural African Communities.",
    // images: [
    //   {
    //     src: "/assets/images/svg/Donate.svg",
    //     alt: "Donate Illustration",
    //   },
    // ],
    images: [
      {
        src: "/assets/images/photos/photo-23.jpg",
        alt: "Hero Image 1",
      },
      {
        type: "block",
        color: "orange",
      },
      {
        src: "/assets/images/photos/photo-24.jpg",
        alt: "Hero Image 2",
      },
      {
        src: "/assets/images/photos/photo-25.jpg",
        alt: "Hero Image 3",
      },
      {
        type: "block",
        color: "purple",
      },
      {
        src: "/assets/images/photos/photo-22.jpg",
        alt: "Hero Image 4",
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
          "Your donation will help us provide education, resources and shelter to children in need.",
      },
    ],
  },
  partnersSection: {
    title: "Partner with us",
    description:
      "At OpenKids Africa, we believe in the power of collaboration and partnership to make a lasting impact on the lives of African children. By partnering with us, you can contribute to the growth and development of young minds in underserved communities, empowering them with essential digital skills for a brighter future.",
    // donateLink: {
    //   text: "Donate",
    //   url: "http://paypal.me/openkidsafrica",
    // },
    contactCTA: {
      id: "contact",
      text: "Contact Us",
    },
    partners: [
      {
        name: "Tech She Can",
        logo: "/assets/images/partners/tech-she-can-logo.svg",
      },
    ],
    hidePartners: true,
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
    <div class="wrapper !max-w-[90rem]">
      <div class="page-header__text-cont 2xl:!ml-40">
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
      <!-- <div class="page-header__media-cont">
        <img
          :src="donateContent.heroSection.images[0].src"
          :alt="donateContent.heroSection.images[0].alt"
          class="abstract-illustration"
        />
      </div> -->
      <div class="page-header__media-cont img-cont">
        <!-- <IllustrationsAbstract1 class="abstract-illustration" /> -->
        <SiteHeroImagesGrid
          class="images-grid programs-header__media-cont"
          :images="donateContent.heroSection.images || []"
        />
      </div>
    </div>
  </header>
  <section class="site-section bg-slate-100 text-slate-950">
    <div class="wrapper">
      <header class="site-section__header site-section__header--left">
        <h2 class="site-section__caption">Your impact</h2>
      </header>
      <div class="site-section__text-cont">
        <p class="site-section__subtext">
          Every month, your contribution plays a pivotal role in shaping the
          future of African kids, particularly those in rural areas.
          <br />
          Your generosity creates a lasting impact, providing essential
          resources to empower the next generation.
        </p>
      </div>
    </div>
  </section>
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
  <PartnersSection :section-data="donateContent.partnersSection">
    <template #illustration>
      <SiteSlideshow class="m-auto max-w-7xl" />
    </template>
  </PartnersSection>
</template>
<style scoped>
.page-header > .wrapper {
  @apply flex-row;
}

.abstract-illustration {
  @apply absolute right-[0] top-1/2  h-[130%] w-2/3 -translate-y-[45.5%] max-sm:-right-[30%] md:w-1/2 lg:h-[110%] 2xl:w-auto;
}
</style>
