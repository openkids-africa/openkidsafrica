// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["gsap"],
  },
  modules: ["@nuxt/content", "@nuxt/image", "@vue-email/nuxt"],
  content: {
    markdown: {
      anchorLinks: false,
    },
  },
  vueEmail: {
    baseUrl: "https://www.openkidsafrica.org/",
    autoImport: true,
  },
});
