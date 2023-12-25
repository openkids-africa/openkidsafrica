<script setup lang="ts">
import { HelpingHandIcon } from "lucide-vue-next";
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
  videoSection: {
    title: "Watch our video",
    text: "Watch our video to learn more about our mission and how you can help.",
    video: {
      src: "https://www.youtube.com/embed/2dRdmfElpy4?si=OlEPAb2Jz8D-OBJR",
      alt: "Video",
    },
  },
  faqSection: {
    caption: "Donate FAQs",
    subtext: "Questions About Donating",
    faqs: [
      {
        topic: "How do I donate?",
        content:
          "You can donate to us through our website by clicking the 'Donate' button on the top right corner of the page. Additionally, we offer the option to donate via PayPal for added convenience.",
      },
      // {
      //   topic: "What is the impact of my donation?",
      //   content:
      //     "Your donation will help us provide education, resources and shelter to children in need.",
      // },
      {
        topic: "Can I donate via check?",
        content:
          "Absolutely! If you prefer to donate via check, please reach out to us at openkidsafrica@gmail.com, and we will promptly provide you with the required details. Your commitment to empowering young minds in Africa is making a significant difference. Thank you for being a crucial part of our mission!",
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
    images: [
      {
        src: "/assets/images/photos/photo-11.jpg",
        alt: "Kids Image 1",
      },
      {
        src: "/assets/images/photos/photo-12.jpg",
        alt: "Kids Image 1",
      },
      {
        src: "/assets/images/photos/photo-13.jpg",
        alt: "Kids Image 2",
      },
      {
        src: "/assets/images/photos/photo-10.jpg",
        alt: "Kids Image 2",
      },
      {
        src: "/assets/images/photos/photo-14.jpg",
        alt: "Kids Image 3",
      },
      {
        src: "/assets/images/photos/photo-15.jpg",
        alt: "Kids Image 3",
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
  <section class="site-section video-section">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">
          {{ donateContent.videoSection.title }}
        </h2>
        <p class="site-section__subtext">
          {{ donateContent.videoSection.text }}
        </p>
      </header>

      <div class="site-section__media-cont">
        <iframe
          :src="donateContent.videoSection.video.src"
          :alt="donateContent.videoSection.video.alt"
          class="video h-[500px] w-full"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
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
  <!-- <section class="site-section">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">How to Make Donations</h2>
      </header>
      <p class="site-section__text">
        Making a difference is just a click away!
      </p>
      <p class="site-section__text">
        You can easily contribute by clicking the "Donate" button located in the
        top right corner of this page. We've also made it convenient for you to
        donate via PayPal by clicking the button below.
      </p>
    </div>
  </section> -->
  <section class="site-section">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">How to make Online Donations</h2>
        <p class="site-section__subtext">
          You can easily contribute by choosing any of the options available in
          this page. We've also made it convenient for you to donate via PayPal
          by clicking the button below.
        </p>
      </header>

      <div class="options flex flex-wrap gap-4">
        <article
          class="flex flex-1 flex-col gap-2 rounded-xl border border-slate-200 p-4"
        >
          <h3 class="font-heading text-3xl font-semibold">Donate via PayPal</h3>
          <p>
            Donating via PayPal is very simple. <br />
            You can donate to us via PayPal by clicking the button below.
          </p>
          <a
            href="http://paypal.me/openkidsafrica"
            class="btn btn--primary mt-auto !w-fit"
            :aria-label="`Donate to OpenKids Africa`"
          >
            <HelpingHandIcon class="icon" />
            <span class="text"> Donate via PayPal </span>
          </a>
        </article>
        <article
          class="flex flex-1 flex-col gap-2 rounded-xl border border-slate-200 p-4"
        >
          <h3 class="font-heading text-3xl font-semibold">Donate via Check</h3>
          <p>
            If you prefer to donate via check, kindly send an email to
            <a href="mailto:openkidsafrica@gmail.com">
              openkidsafrica@gmail.com </a
            >, and we'll provide you with the necessary details. Your support is
            highly valued, and we are here to assist you every step of the way.
          </p>
          <a
            href="mailto:openkidsafrica@gmail.com"
            class="btn btn--primary mt-auto !w-fit"
            :aria-label="`Email OpenKids Africa`"
          >
            <MailIcon class="icon" />
            <span class="text"> Email Us </span>
          </a>
        </article>
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
      <SiteSlideshow
        :images="donateContent.partnersSection.images"
        class="m-auto max-w-7xl"
      />
    </template>
  </PartnersSection>
</template>
<style scoped>
/* .page-header > .wrapper {
  @apply flex-row;
} */

.abstract-illustration {
  @apply absolute right-[0] top-1/2  h-[130%] w-2/3 -translate-y-[45.5%] max-sm:-right-[30%] md:w-1/2 lg:h-[110%] 2xl:w-auto;
}
</style>
