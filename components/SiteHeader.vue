<template>
  <header class="site-header">
    <div class="wrapper">
      <NuxtLink to="/" aria-label="OpenKids Africa home">
        <SiteLogo />
      </NuxtLink>
      <SiteNav />
    </div>
  </header>
</template>
<style scoped>
/* One solid, sticky treatment on every page. The transparent-to-solid
   behaviour this replaces depended on a scroll handler that was never
   called, so .scrolled was hardcoded and the transition never ran. */
.site-header {
  @apply sticky top-0 z-20 w-full bg-slate-900/95 p-4 shadow-header backdrop-blur-md;
}

.site-header > .wrapper {
  @apply relative m-auto flex max-w-6xl items-center justify-between;
}

:deep(.site-logo__text) {
  @apply text-slate-100;
}

:deep(.site-nav__links) {
  @apply text-slate-100;
}
</style>
