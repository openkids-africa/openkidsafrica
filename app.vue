<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const SITE_URL = "https://www.openkidsafrica.org";

const route = useRoute();
const metaTitle = (route.meta.title || "Home") as string;
const description = `OpenKids Africa is a non-profit organization that empowers young minds through education. Explore a vibrant portfolio of educational programs, activities, and partnerships for children in rural communities in Africa. Join us in shaping a brighter future for the next generation. Discover the magic of learning with OpenKids Africa today!`;
const metaDescription = (route.meta.description || description) as string;

useHead({
  titleTemplate: (titleChunk) => {
    return `${titleChunk} | OpenKids Africa`;
  },
  title: metaTitle,
  meta: [
    {
      name: "description",
      content: metaDescription,
      key: "description",
    },
    //Open Graph
    {
      key: "og-type",
      property: "og:type",
      content: "website",
    },
    {
      key: "og-site-name",
      property: "og:site_name",
      content: "OpenKids Africa",
    },
    {
      key: "og-locale",
      property: "og:locale",
      content: "en_NG",
    },
    {
      key: "og-url",
      property: "og:url",
      content: `${SITE_URL}${route.path}`,
    },
    {
      key: "og-title",
      property: "og:title",
      content: metaTitle,
    },
    {
      key: "og-description",
      property: "og:description",
      content: metaDescription,
    },
    {
      key: "og-image",
      property: "og:image",
      content: `${SITE_URL}/assets/images/photos/photo-4.jpg`,
    },
    //Twitter
    {
      key: "twitter-card",
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      key: "twitter-url",
      name: "twitter:url",
      content: `${SITE_URL}${route.path}`,
    },
    {
      key: "twitter-title",
      name: "twitter:title",
      content: metaTitle,
    },
    {
      key: "twitter-description",
      name: "twitter:description",
      content: metaDescription,
    },
    {
      key: "twitter-image",
      name: "twitter:image",
      content: `${SITE_URL}/assets/images/photos/photo-4.jpg`,
    },
  ],
  link: [
    {
      key: "canonical",
      rel: "canonical",
      href: `${SITE_URL}${route.path}`,
    },
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#5bbad5",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900;0,9..40,1000;1,9..40,100;1,9..40,200;1,9..40,300;1,9..40,400;1,9..40,500;1,9..40,600;1,9..40,700;1,9..40,800;1,9..40,900;1,9..40,1000&family=Schibsted+Grotesk:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "NGO",
        name: "OpenKids Africa",
        alternateName: "Open Kids Africa",
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}/android-chrome-512x512.png`,
        email: "info@openkidsafrica.org",
        description:
          "OpenKids Africa is a non-profit organization delivering free technology lessons to children and educators in underserved communities across Africa.",
        areaServed: { "@type": "Place", name: "Africa" },
        sameAs: [
          "https://twitter.com/openkidsafrica",
          "https://www.instagram.com/openkidsafrica/",
          "https://www.linkedin.com/company/openkidsafrica/",
          "https://www.youtube.com/@openkidsafrica",
          "https://www.facebook.com/openkidsafrica",
        ],
      }),
    },
  ],
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
