<script setup lang="ts">
import { ArrowDownIcon } from "@heroicons/vue/24/solid";
</script>
<template>
  <button class="scroll-down-btn">
    <div class="icon-cont">
      <IconsBendyArrowDownIcon className="icon !h-32 !w-32" :animate="true" />
    </div>
    <slot />
  </button>
</template>
<style scoped>
.scroll-down-btn {
  @apply relative font-heading  font-bold text-purple-200;
}
.scroll-down-btn > .icon-cont {
  @apply relative;
}
.scroll-down-btn:deep(.text) {
  @apply absolute -right-2/3   top-1/2 -translate-y-1/2 transform text-left;
}
</style>
