<template>
  <header class="site-header">
    <div class="site-header__bar">
      <NuxtLink
        to="/"
        class="site-header__brand"
        aria-label="OpenKids Africa home"
      >
        <SiteLogo />
      </NuxtLink>
      <SiteNav />
    </div>
  </header>
</template>
<style scoped>
/* A floating pill bar, as the reference design frames its navigation.
   Sticky with an inset so the pill hovers over the page; no
   backdrop-filter, which would make the header the containing block for
   the mobile panel and collapse it to the bar's height. */
.site-header {
  @apply sticky top-0 z-30 px-3 pt-3 lg:px-4 lg:pt-4;
}

.site-header__bar {
  @apply relative mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border border-slate-200 bg-white/95 py-2 pl-2 pr-2 shadow-pill;
}

.site-header__brand {
  @apply flex items-center;
}
</style>
