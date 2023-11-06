L
<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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
      key: "og-url",
      property: "og:url",
      content: `https://openkidsafrica.vercel.app/`, // Update with OpenKids Africa's website URL
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
      content: `https://openkidsafrica.vercel.app/assets/images/photos/photo (4).jpg`, // Update with OpenKids Africa's image URL
    },
    //Twitter
    {
      key: "twitter-card",
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      key: "twitter-url",
      property: "twitter:url",
      content: `https://openkidsafrica.vercel.app/`, // Update with OpenKids Africa's website URL
    },
    {
      key: "twitter-title",
      property: "twitter:title",
      content: metaTitle,
    },
    {
      key: "twitter-description",
      property: "twitter:description",
      content: metaDescription,
    },
    {
      key: "twitter-image",
      property: "twitter:image",
      content: `https://openkidsafrica.vercel.app/assets/images/photos/photo (4).jpg`, // Update with OpenKids Africa's image URL
    },
  ],
  link: [
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
  htmlAttrs: {
    // class: "dark",
  },
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
