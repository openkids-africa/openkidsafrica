<script setup lang="ts">
import { XMarkIcon, Bars2Icon, ChevronDownIcon } from "@heroicons/vue/24/solid";
import { MailIcon } from "lucide-vue-next";

const route = useRoute();
const router = useRouter();
const { links } = useSiteNav();

const navActive = ref(false);
const openDropdown = ref<string | null>(null);

/* Contact becomes the pill on the right; Donate stays in the link row. */
const rowLinks = computed(() =>
  links.value.filter((l) => l.name.toLowerCase() !== "contact"),
);

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

const isActive = (path: string) =>
  path === "/" ? route.path === "/" : route.path.startsWith(path);

router.afterEach(() => {
  navActive.value = false;
  openDropdown.value = null;
});

watch(navActive, (open) => {
  if (import.meta.client) {
    document.body.style.overflow = open ? "hidden" : "";
  }
});

onUnmounted(() => {
  if (import.meta.client) document.body.style.overflow = "";
});
</script>
<template>
  <nav
    id="site-nav"
    class="site-nav"
    :class="{ 'site-nav--active': navActive }"
    aria-label="Main"
    @keydown.esc="closeAll"
  >
    <ul class="site-nav__links">
      <li
        v-for="link in rowLinks"
        :key="link.name"
        class="site-nav__link"
        :class="{ active: isActive(link.path) }"
      >
        <NuxtLink
          v-if="!link.subLinks"
          :to="link.path"
          class="site-nav__item"
          :aria-current="isActive(link.path) ? 'page' : undefined"
        >
          {{ link.name }}
        </NuxtLink>

        <template v-else>
          <span class="site-nav__group-label">{{ link.name }}</span>
          <button
            type="button"
            class="site-nav__item site-nav__trigger"
            :aria-expanded="openDropdown === link.name"
            @click="toggleDropdown(link.name)"
          >
            {{ link.name }}
            <ChevronDownIcon class="icon h-4 w-4" />
          </button>

          <div
            class="site-nav__dropdown"
            :class="{ 'site-nav__dropdown--open': openDropdown === link.name }"
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

    <NuxtLink to="/contact" class="btn site-nav__cta">
      <span>Contact Us</span>
      <MailIcon class="icon" />
    </NuxtLink>
  </nav>

  <button
    type="button"
    class="site-nav-btn"
    aria-controls="site-nav"
    :aria-expanded="navActive"
    :aria-label="navActive ? 'Close menu' : 'Open menu'"
    @click="toggleActive"
  >
    <XMarkIcon v-if="navActive" class="icon" />
    <Bars2Icon v-else class="icon" />
  </button>
</template>
<style scoped>
/* MOBILE PANEL — a rounded card that drops from the pill bar. The header
   is the containing block, so top:100% is the bar's bottom edge. */
.site-nav {
  @apply absolute left-0 right-0 top-full z-10 mt-2 flex max-h-[calc(100dvh-6rem)] flex-col gap-6 overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 shadow-card-hover;
  @apply pointer-events-none invisible opacity-0 lg:pointer-events-auto lg:visible lg:opacity-100;
  @apply lg:relative lg:top-auto lg:z-auto lg:mt-0 lg:max-h-none lg:flex-1 lg:flex-row lg:items-center lg:justify-between lg:overflow-visible lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none;
  @apply transition-opacity duration-200;
}

.site-nav--active {
  @apply pointer-events-auto visible opacity-100;
}

.site-nav__links {
  @apply flex flex-col gap-1 lg:mx-auto lg:flex-row lg:items-center lg:gap-1;
}

.site-nav__link {
  @apply relative flex flex-col lg:items-start;
}

.site-nav__item {
  @apply flex items-center gap-1 rounded-full px-4 py-2 font-heading text-lg font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 lg:text-[15px];
}

/* The current page reads as a filled pill, as the reference marks Home. */
.site-nav__link.active > .site-nav__item,
.site-nav__link.active > .site-nav__group-label {
  @apply bg-slate-100 text-slate-900;
}

.site-nav__trigger {
  @apply hidden cursor-pointer lg:flex;
}

.site-nav__group-label {
  @apply block rounded-full px-4 py-2 font-heading text-lg font-medium text-slate-700 lg:hidden;
}

.site-nav__dropdown {
  @apply w-full lg:invisible lg:absolute lg:left-0 lg:top-full lg:mt-2 lg:w-60 lg:rounded-2xl lg:border lg:border-slate-200 lg:bg-white lg:p-2 lg:opacity-0 lg:shadow-card-hover lg:transition-all lg:duration-200;
}

.site-nav__link:hover > .site-nav__dropdown,
.site-nav__link:focus-within > .site-nav__dropdown,
.site-nav__dropdown--open {
  @apply lg:visible lg:opacity-100;
}

.site-nav__dropdown__links {
  @apply flex w-full flex-col;
}

.site-nav__dropdown__link > a {
  @apply flex w-full rounded-xl px-6 py-2 text-base text-slate-600 hover:bg-slate-50 hover:text-slate-900 lg:px-3 lg:text-[15px];
}

.site-nav__cta {
  @apply w-full lg:w-auto;
}

/* TOGGLE — in the pill bar at the right on small screens. */
.site-nav-btn {
  @apply relative z-20 flex h-10 w-10 items-center justify-center rounded-full text-slate-900 transition-colors hover:bg-slate-100 lg:hidden;
}

.site-nav-btn > .icon {
  @apply h-6 w-6;
}
</style>
