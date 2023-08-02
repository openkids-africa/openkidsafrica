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
  @apply sticky top-0 w-full p-4;
}

.site-header > .wrapper {
  @apply relative flex items-center justify-between lg:p-1 lg:px-2;
  /* @apply rounded-3xl border-white/80 lg:border-2 lg:bg-white/80 lg:dark:border-slate-700/80 lg:dark:bg-slate-800/80; */
  @apply lg:bg-clip-padding lg:backdrop-blur-md;
  @apply m-auto max-w-6xl;
}
</style>
