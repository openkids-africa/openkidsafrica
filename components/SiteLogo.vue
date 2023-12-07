<template>
  <figure class="site-logo">
    <NuxtImg
      src="/android-chrome-512x512.png"
      alt="Openkids Africa Logo"
      width="42"
      height="42"
    />
    <span class="site-logo__text"> Openkids Africa </span>
  </figure>
</template>
<style scoped>
.site-logo {
  @apply relative z-20 flex flex-row items-center gap-1 px-3;
}

.site-logo__text {
  @apply font-heading text-xl font-black text-slate-700 dark:!text-slate-100;
}
</style>
