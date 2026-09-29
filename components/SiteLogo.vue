<template>
  <figure class="site-logo">
    <span class="site-logo__mark">
      <NuxtImg
        src="/android-chrome-512x512.png"
        alt=""
        width="28"
        height="28"
      />
    </span>
    <span class="site-logo__text">OpenKids Africa</span>
  </figure>
</template>
<style scoped>
.site-logo {
  @apply flex items-center gap-2 pr-2;
}

/* The mark sits in a tinted circle, the way the reference sets its logo. */
.site-logo__mark {
  @apply flex h-10 w-10 items-center justify-center rounded-full bg-brand-100;
}

.site-logo__mark > img {
  @apply h-7 w-7 object-contain;
}

.site-logo__text {
  @apply font-heading text-base font-semibold tracking-tight text-slate-900;
}
</style>
