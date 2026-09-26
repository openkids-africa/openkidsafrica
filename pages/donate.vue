<script setup lang="ts">
import { ArrowUpRightIcon, MailIcon } from "lucide-vue-next";

const donateContent = ref({
  heroSection: {
    caption: "Donate to Openkids Africa",
    subtext:
      "Support the Future of Children in Rural African Schools: Donate Now",
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
      src: "https://www.youtube.com/embed/_MtO_fHlkG4?si=m3fvsb9YxK9rXnNE",
      alt: "Video",
    },
  },
  impactSection: {
    title: "Your impact",
    text: [
      "Every month, your contribution plays a pivotal role in shaping the future of African children by providing access to our free tech lessons. Through your donations, we ensure that children in underserved regions are not left behind in this rapidly evolving digital economy.",
      "Your support directly funds our school outreach programs, providing essential resources and training for both children and educators in rural schools.",
    ],
  },
  donateSection: {
    donateOptions: [
      {
        title: "$50 Monthly Donation",
        description:
          "With your $50 monthly donation, we can provide 4 free tech lessons and resources to rural schools every month. This enables 15 more children in rural schools annually to learn tech lessons, opening up new possibilities and opportunities for their education and future.",
      },
      {
        title: "$100 Monthly Donation",
        description:
          "With your $100 monthly donation, we can provide 8 free tech lessons and resources to rural schools every month. This enables 30 more children in rural schools annually to learn tech lessons, opening up new possibilities and opportunities for their education and future.",
      },
      {
        title: "$150 Monthly Donation",
        description:
          "With your $150 monthly donation, we can provide 12 free tech lessons to rural schools every month. This enables 45 more children in rural schools annually to learn tech lessons, opening up new possibilities and opportunities for their education and future.",
      },
      {
        title: "$500 Monthly Donation",
        description:
          "With your $500 monthly donation, we can provide 16 free tech lessons to rural schools every month. This enables 150 more children in rural schools annually to learn tech lessons, opening up new possibilities and opportunities for their education and future.",
      },
      {
        title: "Custom Donations",
        description:
          "Your custom donation empowers children in rural African schools with essential tech lessons and resources, shaping their educational journey and future opportunities.",
      },
    ],
  },
  waysSection: {
    title: "How to make Online Donations",
    text: "You can easily contribute by choosing any of the options available in this page. We've also made it convenient for you to donate via PayPal by clicking the button below.",
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
useHead({
  title: donateContent.value.heroSection.caption,
  meta: [
    {
      name: "description",
      content: donateContent.value.heroSection.subtext,
      key: "description",
    },
    {
      key: "og-title",
      property: "og:title",
      content: donateContent.value.heroSection.caption,
    },
    {
      key: "og-description",
      property: "og:description",
      content: donateContent.value.heroSection.subtext,
    },
    {
      key: "twitter-title",
      name: "twitter:title",
      content: donateContent.value.heroSection.caption,
    },
    {
      key: "twitter-description",
      name: "twitter:description",
      content: donateContent.value.heroSection.subtext,
    },
  ],
});
</script>
<template>
  <PageIntro
    :caption="donateContent.heroSection.caption"
    :text="[donateContent.heroSection.subtext]"
    :images="donateContent.heroSection.images"
  >
    <template #actions>
      <a href="#give" class="btn">
        Give now
        <ArrowUpRightIcon class="icon" />
      </a>
      <a href="#video-section" class="btn btn--outline">Watch our video</a>
    </template>
  </PageIntro>

  <!-- IMPACT + VIDEO -->
  <section id="video-section" class="site-section scroll-mt-24">
    <div class="wrapper">
      <div class="impact">
        <div class="tile tile--tint impact__text">
          <h2 class="site-section__caption !text-3xl lg:!text-4xl">
            {{ donateContent.impactSection.title }}
          </h2>
          <p
            v-for="(text, i) in donateContent.impactSection.text"
            :key="i"
            class="tile__text"
          >
            {{ text }}
          </p>
        </div>
        <figure class="impact__video">
          <iframe
            :src="donateContent.videoSection.video.src"
            :title="donateContent.videoSection.title"
            frameborder="0"
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
            "
            allowfullscreen
          ></iframe>
          <figcaption>{{ donateContent.videoSection.text }}</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- WHAT YOUR GIFT DOES -->
  <section class="site-section bg-slate-50 lg:rounded-[3rem]">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">What your monthly gift does</h2>
      </header>
      <ul class="tiers">
        <li
          v-for="(option, index) in donateContent.donateSection.donateOptions"
          :key="index"
        >
          <article class="tile tile--outline tier">
            <h3 class="tier__title">{{ option.title }}</h3>
            <p class="tile__text">{{ option.description }}</p>
          </article>
        </li>
      </ul>
    </div>
  </section>

  <!-- GIVE -->
  <section id="give" class="site-section scroll-mt-24">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">
          Donate to Empower Children in Rural Schools in Africa
        </h2>
      </header>
      <div class="mx-auto max-w-3xl">
        <DonateForm />
      </div>
    </div>
  </section>

  <!-- WAYS -->
  <section class="site-section bg-slate-50 lg:rounded-[3rem]">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">
          {{ donateContent.waysSection.title }}
        </h2>
        <p>{{ donateContent.waysSection.text }}</p>
      </header>
      <div class="ways">
        <article class="tile tile--outline way">
          <h3 class="tile__title">Donate via PayPal</h3>
          <p class="tile__text">
            Donating via PayPal is very simple. You can donate to us via PayPal
            by clicking the button below.
          </p>
          <a
            href="http://paypal.me/openkidsafrica"
            target="_blank"
            rel="noopener noreferrer"
            class="btn mt-auto w-fit"
          >
            Donate via PayPal
            <ArrowUpRightIcon class="icon" />
          </a>
        </article>
        <article class="tile tile--outline way">
          <h3 class="tile__title">Donate Educational Resources</h3>
          <p class="tile__text">
            If you would like to contribute educational resources, such as
            refurbished laptops or digital learning materials for children,
            please send an email to
            <a class="underline" href="mailto:openkidsafrica@gmail.com"
              >openkidsafrica@gmail.com</a
            >
          </p>
          <p class="tile__text">
            We will promptly provide you with the necessary details. Your
            support is immensely appreciated, and we are committed to assisting
            you throughout the entire process.
          </p>
          <p class="tile__text">
            Thank you for making a difference in the lives of children through
            education.
          </p>
          <a
            href="mailto:openkidsafrica@gmail.com"
            class="btn btn--outline mt-auto w-fit"
          >
            Email Us
            <MailIcon class="icon" />
          </a>
        </article>
        <article class="tile tile--outline way">
          <h3 class="tile__title">Donate via Check</h3>
          <p class="tile__text">
            If you prefer to donate via check, kindly send an email to
            <a class="underline" href="mailto:openkidsafrica@gmail.com"
              >openkidsafrica@gmail.com</a
            >, and we'll provide you with the necessary details. Your support is
            highly valued, and we are here to assist you every step of the way.
          </p>
          <a
            href="mailto:openkidsafrica@gmail.com"
            class="btn btn--outline mt-auto w-fit"
          >
            Email Us
            <MailIcon class="icon" />
          </a>
        </article>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="site-section">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">
          {{ donateContent.faqSection.caption }}
        </h2>
        <p>{{ donateContent.faqSection.subtext }}</p>
      </header>
      <ul class="mx-auto flex max-w-3xl flex-col gap-3">
        <li v-for="(faq, index) in donateContent.faqSection.faqs" :key="index">
          <FAQItem :faq="faq" :index="index" />
        </li>
      </ul>
    </div>
  </section>

  <PartnersSection :section-data="donateContent.partnersSection">
    <template #illustration>
      <div class="mt-16">
        <SiteSlideshow :images="donateContent.partnersSection.images" />
      </div>
    </template>
  </PartnersSection>
</template>
<style scoped>
.impact {
  @apply grid gap-6 lg:grid-cols-2 lg:gap-8;
}

.impact__text {
  @apply flex flex-col gap-4 p-8 lg:p-10;
}

.impact__video {
  @apply flex flex-col gap-3;
}

.impact__video > iframe {
  @apply aspect-video w-full rounded-tile bg-slate-900;
}

.impact__video > figcaption {
  @apply text-sm text-slate-500;
}

.tiers {
  @apply grid gap-4 md:grid-cols-2 lg:grid-cols-3;
}

.tier__title {
  @apply font-heading text-2xl font-semibold text-slate-900;
}

.ways {
  @apply grid gap-4 lg:grid-cols-3;
}

.way {
  @apply flex flex-col gap-3;
}
</style>
