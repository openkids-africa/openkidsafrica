<script setup lang="ts">
const { handleAddClassOnScroll, lightText, sticky, scrolled, siteHeader } =
  useSiteHeader();

// handleAddClassOnScroll();

const route = useRoute();
if (route.path == "/") lightText.value = true;
</script>
<template>
  <header
    ref="siteHeader"
    :class="`site-header scrolled ${
      lightText ? 'site-header--light-text' : ''
    } ${sticky ? 'site-header--sticky' : ''}`"
  >
    <div class="wrapper">
      <NuxtLink to="/">
        <SiteLogo />
      </NuxtLink>
      <SiteNav />
    </div>
  </header>
</template>
<style scoped>
.site-header {
  @apply fixed top-0 z-20 w-full border  border-transparent bg-transparent p-4  transition-all duration-300;
}

.site-header--sticky {
  @apply sticky top-0;
}

.site-header.scrolled {
  @apply border-b-slate-900 bg-slate-900   shadow-lg shadow-slate-600/[.05];
}

.site-header > .wrapper {
  @apply relative flex items-center justify-between;
  /* @apply rounded-3xl border-white/80 lg:border-2 lg:bg-white/80; */
  /* @apply lg:bg-clip-padding lg:backdrop-blur-md; */
  @apply m-auto max-w-6xl;
}

.site-header--light-text:deep(.site-logo__text) {
  @apply text-slate-200;
}
.scrolled:deep(.site-logo__text) {
  @apply text-slate-200;
}

.site-header--light-text:deep(.site-nav__links) {
  @apply text-slate-500;
}
.site-header.scrolled:deep(.site-nav__links) {
  @apply text-slate-500;
}
</style>
