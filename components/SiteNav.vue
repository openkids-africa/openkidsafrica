<script setup lang="ts">
import { XMarkIcon, Bars2Icon, ChevronDownIcon } from "@heroicons/vue/24/solid";

const route = useRoute();
const router = useRouter();
const { links } = useSiteNav();

const navActive = ref(false);
const openDropdown = ref<string | null>(null);

const toggleActive = () => {
  navActive.value = !navActive.value;
};

const toggleDropdown = (name: string) => {
  openDropdown.value = openDropdown.value === name ? null : name;
};

const closeAll = () => {
  openDropdown.value = null;
  navActive.value = false;
};

/* "/" is a prefix of every route, so the previous includes() test marked Home
   active everywhere. Home needs an exact match; the rest match by prefix. */
const isActive = (path: string) =>
  path === "/" ? route.path === "/" : route.path.startsWith(path);

router.afterEach(() => {
  navActive.value = false;
  openDropdown.value = null;
});
</script>
<template>
  <nav
    class="site-nav"
    :class="{ 'site-nav--active': navActive }"
    aria-label="Main"
    @keydown.esc="closeAll"
  >
    <div class="wrapper">
      <ul class="site-nav__links">
        <li
          v-for="link in links"
          :key="link.name"
          class="site-nav__link"
          :class="{ active: isActive(link.path) }"
        >
          <NuxtLink
            v-if="!link.subLinks"
            :to="link.path"
            :class="link.name.toLowerCase() === 'donate' ? 'btn' : ''"
            :aria-current="isActive(link.path) ? 'page' : undefined"
          >
            {{ link.name }}
          </NuxtLink>

          <template v-else>
            <button
              type="button"
              class="site-nav__trigger"
              :aria-expanded="openDropdown === link.name"
              @click="toggleDropdown(link.name)"
            >
              {{ link.name }}
              <ChevronDownIcon class="icon h-5 w-5" />
            </button>

            <div
              class="site-nav__dropdown"
              :class="{
                'site-nav__dropdown--open': openDropdown === link.name,
              }"
            >
              <ul class="site-nav__dropdown__links">
                <li
                  v-for="sublink in link.subLinks"
                  :key="sublink.name"
                  class="site-nav__dropdown__link"
                >
                  <NuxtLink
                    :to="sublink.path"
                    :aria-current="isActive(sublink.path) ? 'page' : undefined"
                  >
                    {{ sublink.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </template>
        </li>
      </ul>
    </div>
  </nav>

  <button
    type="button"
    class="site-nav-btn btn"
    :aria-expanded="navActive"
    :aria-label="navActive ? 'Close menu' : 'Open menu'"
    @click="toggleActive"
  >
    <XMarkIcon v-if="navActive" class="icon" />
    <Bars2Icon v-else class="icon" />
  </button>
</template>
<style scoped>
.site-nav {
  @apply fixed left-0 top-0 z-10 h-full w-full overflow-y-auto bg-slate-900 lg:relative lg:h-auto lg:w-fit lg:overflow-visible lg:!bg-transparent;
  @apply pointer-events-none invisible opacity-0 lg:pointer-events-auto lg:visible lg:opacity-100;
  @apply transition-opacity duration-300;
}

.site-nav--active {
  @apply pointer-events-auto visible opacity-100;
}

.site-nav > .wrapper {
  @apply ml-auto flex min-h-full max-w-6xl items-center justify-center p-8 lg:block lg:p-0;
}

.site-nav__links {
  @apply flex w-full flex-col items-center gap-6 lg:w-auto lg:flex-row lg:gap-6;
  @apply text-3xl font-bold lg:text-base;
}

.site-nav__link {
  @apply relative flex flex-col items-center lg:items-start;
}

.site-nav__link > a:hover,
.site-nav__trigger:hover {
  @apply text-brand-300;
}

.site-nav__link > a.btn:hover {
  @apply text-white;
}

/* The current page is marked with an underline rather than colour alone. */
.site-nav__link.active > a:not(.btn),
.site-nav__link.active > .site-nav__trigger {
  @apply underline decoration-brand-400 decoration-2 underline-offset-8;
}

.site-nav__trigger {
  @apply flex cursor-pointer items-center gap-1 font-bold;
}

/* DROPDOWN
   Below lg the submenu sits open beneath its parent, so nothing has to be
   operated to reach it. From lg up it becomes a real dropdown that opens on
   hover, on keyboard focus, and on click — the previous hover-only version on
   a non-focusable div was unreachable by keyboard and touch. */
.site-nav__dropdown {
  @apply mt-3 w-full lg:invisible lg:absolute lg:left-0 lg:top-full lg:mt-2 lg:w-64 lg:rounded-xl lg:border lg:border-slate-100 lg:bg-white lg:opacity-0 lg:shadow-lg lg:transition-all lg:duration-200;
}

.site-nav__link:hover > .site-nav__dropdown,
.site-nav__link:focus-within > .site-nav__dropdown,
.site-nav__dropdown--open {
  @apply lg:visible lg:opacity-100;
}

.site-nav__dropdown__links {
  @apply flex w-full flex-col;
}

.site-nav__dropdown__link {
  @apply border-slate-100 text-center text-xl lg:border-b lg:text-left lg:text-base lg:last-of-type:border-b-0;
}

.site-nav__dropdown__link > a {
  @apply flex w-full justify-center p-2 text-slate-300 hover:text-brand-300 lg:justify-start lg:px-4 lg:text-slate-600 lg:hover:bg-slate-50 lg:hover:text-brand-700;
}

.site-nav-btn {
  @apply fixed bottom-0 right-0 z-20 mb-6 mr-6 block p-3 lg:hidden;
}
</style>
