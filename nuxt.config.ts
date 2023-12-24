// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
  modules: ["@nuxtjs/sanity", "@nuxt/image", "@vue-email/nuxt"],
  sanity: {
    projectId: "xhwhqbhq",
    apiVersion: "2023-09-08",
  },
  image: {
    domains: ["cdn.sanity.io"],
  },
  vueEmail: {
    baseUrl: "https://www.openkidsafrica.org/",
    autoImport: true,
  },
});
