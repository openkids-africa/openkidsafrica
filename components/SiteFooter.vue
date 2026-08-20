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
      <section class="site-footer__section site-section">
        <div class="wrapper">
          <div
            class="flex max-w-xs flex-col items-center gap-4 text-center lg:items-start lg:text-left"
          >
            <NuxtLink to="/">
              <SiteLogo class="!z-0 !px-0" />
            </NuxtLink>
            <p class="text-base">
              Connecting every African child to a digital future through the
              delivery of free tech lessons.
            </p>
          </div>

          <ul class="site-links">
            <li v-for="(link, i) in links" class="site-links__item">
              <NuxtLink :to="link.path">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>

          <ul class="social-links">
            <li
              v-for="(link, i) in socialLinks.map((i) => ({
                ...i,
                name: i.name.toLowerCase(),
              }))"
              class="social-links__item"
            >
              <a
                :aria-label="link.name"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon
                  v-if="link.name == 'twitter'"
                  class="icon social-links__icon"
                />
                <LinkedinIcon
                  v-else-if="link.name == 'linkedin'"
                  class="icon social-links__icon"
                />
                <YoutubeIcon
                  v-else-if="link.name == 'youtube'"
                  class="icon social-links__icon"
                />
                <FacebookIcon
                  v-else-if="link.name == 'facebook'"
                  class="icon social-links__icon"
                />
                <InstagramIcon
                  v-else-if="link.name == 'instagram'"
                  class="icon social-links__icon"
                />
                <ExternalLinkIcon v-else class="icon social-links__icon" />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section class="site-section site-footer__section bg-slate-800">
        <div class="wrapper text-center">
          <p class="w-full text-base text-slate-100">
            © {{ year }} Openkids Africa. Registered charity number 8025460588
          </p>
        </div>
      </section>
    </div>
  </footer>
</template>
<style scoped>
.site-footer {
  @apply p-0;
}

.site-footer__section:first-of-type {
  @apply bg-slate-900 text-slate-200;
}

.site-footer__section:nth-of-type(2) {
  @apply py-8;
}
.site-footer__section > .wrapper {
  @apply flex flex-col items-center justify-between gap-4 md:flex-row;
}

.site-links,
.social-links {
  @apply flex flex-row flex-wrap items-center justify-center gap-4 gap-y-2;
}

:deep(.site-logo__text) {
  @apply text-slate-100;
}
</style>
