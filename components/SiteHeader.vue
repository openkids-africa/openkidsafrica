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
   called, so .scrolled was hardcoded and the transition never ran.

   No backdrop-filter here, deliberately: it makes the header a containing
   block for position:fixed descendants, which collapsed the mobile menu
   overlay and its toggle button to the size of the header. The background
   is opaque, so there was nothing to blur anyway. */
.site-header {
  @apply sticky top-0 z-20 w-full bg-slate-900 p-4 shadow-header;
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
