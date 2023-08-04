<script setup lang="ts">
// write a function to add the ".scrolled" class to the .site-header element when the user scrolls down past the height of the site header element
// use the "onMounted" lifecycle hook to add an event listener to the window object for the "scroll" event
// use the "onUnmounted" lifecycle hook to remove the event listener from the window object

const siteHeader = ref<HTMLElement>();

const handleAddClassOnScroll = () => {
  const handleScroll = () => {
    if (!siteHeader.value) return;
    if (window.scrollY > siteHeader.value.offsetHeight) {
      siteHeader.value.classList.add("scrolled");
    } else {
      siteHeader.value.classList.remove("scrolled");
    }
  };
  onMounted(() => {
    console.log("mounted");
    window.addEventListener("scroll", handleScroll);
  });
  onUnmounted(() => {
    console.log("unmounted");
    window.removeEventListener("scroll", handleScroll);
  });
};

onMounted(() => {
  console.log({
    siteHeader: siteHeader.value,
  });
});
handleAddClassOnScroll();
</script>
<template>
  <header ref="siteHeader" class="site-header">
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

.site-header.scrolled {
  @apply bg-white  shadow-2xl  dark:bg-slate-900;
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
  @apply text-purple-600;
}

.site-header:deep(.site-nav__links) {
  @apply text-purple-200;
}
.site-header.scrolled:deep(.site-nav__links) {
  @apply text-purple-600 dark:!text-purple-100;
}
</style>
