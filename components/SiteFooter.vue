<script setup lang="ts">
import {
  TwitterIcon,
  ExternalLinkIcon,
  LinkedinIcon,
  YoutubeIcon,
  FacebookIcon,
  InstagramIcon,
} from "lucide-vue-next";
const { links, socialLinks } = useSiteNav();
const year = new Date().getFullYear();
</script>
<template>
  <footer class="site-footer">
    <div class="wrapper">
      <div class="site-footer__top">
        <div class="site-footer__brand">
          <NuxtLink to="/" aria-label="OpenKids Africa home">
            <SiteLogo />
          </NuxtLink>
          <p class="site-footer__tagline">
            Connecting every African child to a digital future through the
            delivery of free tech lessons.
          </p>
        </div>

        <ul class="site-footer__links">
          <li v-for="link in links" :key="link.name">
            <NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
          </li>
        </ul>

        <ul class="site-footer__socials">
          <li
            v-for="link in socialLinks.map((i) => ({
              ...i,
              name: i.name.toLowerCase(),
            }))"
            :key="link.name"
          >
            <a
              :aria-label="link.name"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="site-footer__social"
            >
              <TwitterIcon v-if="link.name == 'twitter'" class="icon" />
              <LinkedinIcon v-else-if="link.name == 'linkedin'" class="icon" />
              <YoutubeIcon v-else-if="link.name == 'youtube'" class="icon" />
              <FacebookIcon v-else-if="link.name == 'facebook'" class="icon" />
              <InstagramIcon
                v-else-if="link.name == 'instagram'"
                class="icon"
              />
              <ExternalLinkIcon v-else class="icon" />
            </a>
          </li>
        </ul>
      </div>

      <div class="site-footer__bottom">
        <p>
          © {{ year }} OpenKids Africa. Registered charity number 8025460588
        </p>
        <p>Registered in Sweden, operating in Nigeria.</p>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.site-footer {
  @apply px-4 pb-8 pt-4;
}

.site-footer > .wrapper {
  @apply mx-auto flex max-w-6xl flex-col gap-8 border-t border-slate-200 pt-10;
}

.site-footer__top {
  @apply flex flex-col items-center gap-8 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left;
}

.site-footer__brand {
  @apply flex max-w-xs flex-col items-center gap-3 lg:items-start;
}

.site-footer__tagline {
  @apply text-sm text-slate-600;
}

.site-footer__links {
  @apply flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-slate-700;
}

.site-footer__links a:hover {
  @apply text-slate-900;
}

.site-footer__socials {
  @apply flex items-center gap-2;
}

.site-footer__social {
  @apply flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-colors hover:bg-brand-100 hover:text-brand-800;
}

.site-footer__social > .icon {
  @apply h-4 w-4;
}

.site-footer__bottom {
  @apply flex flex-col items-center gap-1 text-center text-xs text-slate-500 lg:flex-row lg:justify-between;
}
</style>
