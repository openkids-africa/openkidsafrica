<template>
  <NuxtLoadingIndicator :color="`#f97316`" />
  <SiteHeader />
  <main class="site-main">
    <slot />
  </main>
  <SiteFooter />
</template>
