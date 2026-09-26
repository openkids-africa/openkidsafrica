<template>
  <NuxtLoadingIndicator color="#e4610c" />
  <SiteHeader />
  <main class="site-main">
    <slot />
  </main>
  <SiteFooter />
</template>
<style scoped>
/* Tinted sections round their corners inside this gutter on large screens. */
.site-main {
  @apply lg:px-4;
}
</style>
