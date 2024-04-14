<script setup>
import { XMarkIcon, Bars2Icon, ChevronDownIcon } from "@heroicons/vue/24/solid";
const router = useRouter();
const { links } = useSiteNav();
const navActive = ref(false);

const toggleActive = () => {
  navActive.value = !navActive.value;
};

router.afterEach(() => {
  console.log("routed");
  navActive.value = false;
});
</script>
<template>
  <nav class="site-nav" :class="`${navActive ? 'site-nav--active' : ''}`">
    <div class="wrapper">
      <ul class="site-nav__links !justify-start pt-[20vh]">
        <li
          v-for="link in links"
          :key="link.name"
          :class="`site-nav__link group relative flex  flex-col justify-center max-lg:items-center ${
            router.currentRoute.value.fullPath.includes(link.path)
              ? 'active'
              : ''
          }`"
        >
          <NuxtLink
            v-if="!link.subLinks"
            :class="` ${link.name.toLowerCase() == 'donate' ? 'btn' : ''}`"
            :to="link.path"
          >
            {{ link.name }}
          </NuxtLink>
          <div v-else class="!flex cursor-pointer items-center gap-1">
            {{ link.name }}
            <ChevronDownIcon class="icon h-5 w-5" v-if="link.subLinks" />
          </div>

          <div
            v-if="link.subLinks"
            class="site-nav__dropdown pointer-events-none max-h-0 min-w-64 rounded-xl border-slate-100 bg-white shadow-lg shadow-slate-600/[.05] transition-all duration-300 group-hover:pointer-events-auto group-hover:max-h-56 group-hover:border dark:border-b-slate-800 dark:border-t-slate-800 dark:bg-slate-800 dark:shadow-slate-900/[.05] lg:!absolute lg:!top-full lg:!hidden lg:max-h-[999px] lg:group-hover:!flex"
          >
            <ul class="site-nav__dropdown__links w-full">
              <!-- <li
                class="site-nav__dropdown__link border-b border-slate-100 text-left dark:border-slate-800"
              >
                <NuxtLink
                  :to="link.path"
                  class="flex w-full p-2 px-4 !text-slate-600"
                  >{{ link.name }}</NuxtLink
                >
              </li> -->
              <li
                v-for="sublink in link.subLinks"
                :key="sublink.name"
                class="site-nav__dropdown__link border-b border-slate-100 last-of-type:border-b-0 dark:border-slate-800 lg:text-left"
              >
                <NuxtLink
                  class="flex w-full justify-center p-2 px-4 text-center !text-slate-600 lg:justify-start lg:text-left"
                  :to="sublink.path"
                  >{{ sublink.name }}</NuxtLink
                >
              </li>
            </ul>
          </div>
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
  @apply fixed left-0 top-0 z-10 h-full w-full bg-white dark:bg-slate-800 lg:relative lg:w-fit lg:!bg-transparent;
  @apply pointer-events-none invisible opacity-0 lg:pointer-events-auto lg:visible lg:opacity-100;
  @apply transition-all duration-300;
}

.site-nav--active {
  @apply pointer-events-auto visible opacity-100;
}

.site-nav > .wrapper {
  @apply ml-auto h-full max-w-6xl p-4 px-8 text-right lg:p-0;
}

.site-nav__links {
  @apply flex h-full flex-col justify-center gap-4 lg:flex-row lg:items-center lg:gap-6;
  @apply text-4xl font-bold lg:text-base lg:text-slate-700 dark:lg:!text-slate-100;
}

.site-nav__link {
  @apply py-1 hover:text-slate-500 dark:hover:text-slate-100 lg:!overflow-y-visible;
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
  @apply fixed bottom-0 right-0 z-20 mb-6 mr-6 block lg:hidden;
}

.site-nav-btn__icon {
  @apply h-0;
}

.site-nav-btn__icon--active {
  @apply h-6 translate-y-0;
}

.router-link-active {
  @apply text-slate-100;
}
</style>
