<script setup lang="ts">
import { MailIcon } from "lucide-vue-next";

const contactContent = ref({
  heroSection: {
    caption: "Get in touch",
    subtext:
      "If you would like to get in touch with OpenKids Africa or donate to our projects, email us. We will be happy to get in touch with you.",
    images: [
      {
        src: "/assets/images/photos/photo-29.jpeg",
        alt: "Hero Image 1",
      },
      {
        src: "/assets/images/photos/photo-30.jpg",
        alt: "Hero Image 2",
      },
      {
        type: "block",
        color: "orange",
      },
      {
        src: "/assets/images/photos/photo-31.jpg",
        alt: "Hero Image 3",
      },
      {
        src: "/assets/images/photos/photo-32.jpeg",
        alt: "Hero Image 4",
      },
      {
        type: "block",
        color: "purple",
      },
    ],
  },
});
useHead({
  title: "Contact Us",
  meta: [
    {
      name: "description",
      content: contactContent.value.heroSection.subtext,
      key: "description",
    },
    { key: "og-title", property: "og:title", content: "Contact Us" },
    {
      key: "og-description",
      property: "og:description",
      content: contactContent.value.heroSection.subtext,
    },
    { key: "twitter-title", name: "twitter:title", content: "Contact Us" },
    {
      key: "twitter-description",
      name: "twitter:description",
      content: contactContent.value.heroSection.subtext,
    },
  ],
});
</script>
<template>
  <PageIntro
    :caption="contactContent.heroSection.caption"
    :text="[contactContent.heroSection.subtext]"
    :images="contactContent.heroSection.images"
  >
    <template #actions>
      <a href="mailto:openkidsafrica@gmail.com" class="btn">Email Us</a>
    </template>
  </PageIntro>

  <section class="site-section">
    <div class="wrapper">
      <div class="contact" v-reveal.stagger>
        <aside class="tile tile--tint contact__aside js-reveal">
          <h2 class="tile__title">Contact Us</h2>
          <p class="tile__text">
            Send us a message and we will get back to you.
          </p>
          <a href="mailto:openkidsafrica@gmail.com" class="chip w-fit">
            <span class="chip__icon"><MailIcon class="icon" /></span>
            openkidsafrica@gmail.com
          </a>
        </aside>
        <div class="js-reveal"><ContactForm /></div>
      </div>
    </div>
  </section>
</template>
<style scoped>
/* minmax(0, …) on every column: a long unbreakable e-mail address in the
   chip must not set the grid's minimum width and push the page sideways. */
.contact {
  @apply grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-8;
}

.contact > * {
  @apply min-w-0;
}

.contact__aside {
  @apply flex flex-col gap-4;
}

.contact__aside .chip {
  @apply whitespace-normal break-all;
}
</style>
