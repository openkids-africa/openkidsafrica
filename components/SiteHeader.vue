<script setup lang="ts">
const { handleAddClassOnScroll, lightText, sticky, scrolled, siteHeader } =
  useSiteHeader();

handleAddClassOnScroll();
</script>
<template>
  <header
    ref="siteHeader"
    :class="`site-header ${lightText ? 'site-header--light-text' : ''} ${
      sticky ? 'site-header--sticky' : ''
    }`"
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
  @apply fixed top-0 z-20  w-full bg-transparent p-4  transition-all duration-300;
}

.site-header--sticky {
  @apply sticky top-0;
}

.site-header.scrolled {
  @apply bg-white  shadow-2xl  dark:bg-slate-900;
}

.site-header > .wrapper {
  @apply relative flex items-center justify-between;
  /* @apply rounded-3xl border-white/80 lg:border-2 lg:bg-white/80 lg:dark:border-slate-700/80 lg:dark:bg-slate-800/80; */
  /* @apply lg:bg-clip-padding lg:backdrop-blur-md; */
  @apply m-auto max-w-6xl;
}

.site-header--light-text:deep(.site-logo__text) {
  @apply text-purple-200;
}
.scrolled:deep(.site-logo__text) {
  @apply text-purple-600;
}

.site-header--light-text:deep(.site-nav__links) {
  @apply text-purple-200;
}
.site-header.scrolled:deep(.site-nav__links) {
  @apply text-purple-600 dark:!text-purple-100;
}
</style>
