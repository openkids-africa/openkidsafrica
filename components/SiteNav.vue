<script setup>
import { XMarkIcon, Bars2Icon } from "@heroicons/vue/24/solid";
const links = [
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Programs",
    path: "/programs",
  },
  {
    name: "News",
    path: "/news",
  },
  // {
  //   name: "Contact",
  //   path: "/contact",
  // },
];
const navActive = ref(false);

const toggleActive = () => {
  navActive.value = !navActive.value;
};
</script>
<template>
  <nav class="site-nav" :class="`${navActive ? 'site-nav--active' : ''}`">
    <div class="wrapper">
      <ul class="site-nav__links">
        <li v-for="link in links" :key="link.name" class="site-nav__link">
          <NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
        </li>
        <li class="site-nav__link">
          <NuxtLink to="/contact">
            <button class="btn">Get In Touch</button>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
  <button @click="toggleActive" class="site-nav-btn btn">
    <XMarkIcon
      class="icon site-nav-btn__icon"
      :class="`${navActive ? 'site-nav-btn__icon--active' : ''}`"
    />
    <Bars2Icon
      class="icon site-nav-btn__icon"
      :class="`${!navActive ? 'site-nav-btn__icon--active' : ''}`"
    />
  </button>
</template>
<style scoped>
.site-nav {
  @apply fixed left-0 top-0 z-10 h-full w-full bg-white dark:bg-slate-800 lg:relative lg:w-fit lg:bg-transparent;
  @apply pointer-events-none invisible opacity-0 lg:pointer-events-auto lg:visible lg:opacity-100;
  @apply transition-all duration-300;
}

.site-nav--active {
  @apply pointer-events-auto visible opacity-100;
}

.site-nav > .wrapper {
  @apply ml-auto h-full max-w-6xl p-4 px-8 text-right lg:p-0;
}

.site-nav .site-nav__links {
  @apply flex h-full flex-col justify-center gap-4 lg:flex-row lg:items-center lg:gap-6;
  @apply text-4xl font-bold lg:text-base lg:text-indigo-500 dark:lg:text-indigo-100;
}

.site-nav__link {
  @apply py-1 hover:text-indigo-800 dark:hover:text-indigo-100 lg:overflow-visible;
}

.site-nav__link,
.site-nav-btn {
  @apply relative overflow-y-clip;
}

.site-nav__link > *,
.site-nav-btn__icon {
  @apply relative top-0 block translate-y-full transform lg:lg:translate-y-0;
  @apply transition-transform duration-300 ease-in-out;
}

.site-nav--active .site-nav__link > *,
.site-nav-btn__icon--active {
  @apply translate-y-0;
}

.site-nav-btn {
  @apply fixed bottom-0 right-0 z-20 mb-6 mr-6 lg:hidden;
}

.site-nav-btn__icon {
  @apply h-0;
}

.site-nav-btn__icon--active {
  @apply h-6 translate-y-0;
}
</style>
