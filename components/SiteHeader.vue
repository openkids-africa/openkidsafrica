<template>
  <header class="site-header">
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
  @apply sticky top-0 w-full  p-4;
}

.site-header.scrolled {
  @apply bg-white shadow-md dark:bg-slate-800;
}

.site-header > .wrapper {
  @apply relative flex items-center justify-between;
  /* @apply rounded-3xl border-white/80 lg:border-2 lg:bg-white/80 lg:dark:border-slate-700/80 lg:dark:bg-slate-800/80; */
  /* @apply lg:bg-clip-padding lg:backdrop-blur-md; */
  @apply m-auto max-w-6xl;
}

.site-header:deep(.site-logo__text) {
  @apply text-purple-200;
}
.scrolled:deep(.site-logo__text) {
  @apply text-purple-800 dark:text-purple-100;
}

.site-header:deep(.site-nav__links) {
  @apply text-purple-200;
}
.scrolled:deep(.site-nav__links) {
  @apply text-purple-800 dark:text-purple-100;
}
</style>
