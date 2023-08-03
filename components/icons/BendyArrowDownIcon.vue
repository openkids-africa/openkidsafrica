<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: "currentColor",
  },
  className: {
    type: String,
    default: "icon",
  },
  animate: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <svg
    width="55"
    height="73"
    viewBox="0 0 55 73"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="`${className} ${animate ? 'animated' : ''}`"
  >
    <path
      class="arrow__body"
      d="M9.54087 2.45828C9.29202 3.26706 8.5709 3.99204 8.17723 4.74726C7.19383 6.63377 6.23694 8.48127 5.59604 10.5184C3.77857 16.2954 2.63365 22.066 1.87037 28.0632C1.3121 32.4495 1.68026 36.3705 3.19749 40.5429C6.93678 50.826 23.8803 49.6827 32.3819 47.8482C42.7658 45.6074 48.9712 37.0509 52.2765 27.6857C54.4953 21.3991 50.9956 14.7073 44.2408 13.9032C38.939 13.272 33.2792 16.6903 30.6043 21.3423C27.6871 26.4158 25.2448 33.4023 24.7236 39.2402C24.4282 42.5488 25.2224 45.7419 25.929 48.944C26.8647 53.1849 28.5581 57.3459 29.8251 61.509C30.7009 64.3867 32.8629 67.0275 34.5248 69.5204"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      class="arrow__head"
      d="M25.3285 64.7644C25.4488 65.1654 26.3762 65.4354 26.6896 65.6244C27.8148 66.3028 29.0234 66.973 30.0986 67.7217C31.1102 68.4263 32.9044 69.92 34 70.5C36.2642 71.6987 34.6581 63.8016 34.7697 62.6485C34.8562 61.7549 34.5956 59.8704 34.7697 59"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
</template>
<style scoped>
.animated .arrow__body,
.animated .arrow__head {
  stroke-dashoffset: 500;
  stroke-dasharray: 500;
  animation: dash 5s linear infinite;
}
.animated .arrow__head {
  stroke-dashoffset: 100;
  stroke-dasharray: 100;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
