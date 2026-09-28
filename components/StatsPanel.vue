<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const props = defineProps<{
  stats: { value: string; label: string }[];
}>();

const panel = ref<HTMLElement | null>(null);
const shown = ref(props.stats.map((s) => s.value));

/* Counts each figure up from zero when the panel scrolls into view,
   keeping its prefix, suffix and thousands separators. */
onMounted(() => {
  if (!panel.value) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  gsap.registerPlugin(ScrollTrigger);

  props.stats.forEach((stat, i) => {
    const m = stat.value.match(/^([^\d]*)([\d,]+)(.*)$/);
    if (!m) return;
    const [, prefix, digits, suffix] = m;
    const target = Number(digits.replace(/,/g, ""));
    const counter = { n: 0 };
    shown.value[i] = `${prefix}0${suffix}`;
    gsap.to(counter, {
      n: target,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: { trigger: panel.value, start: "top 85%", once: true },
      onUpdate: () => {
        shown.value[i] =
          `${prefix}${Math.round(counter.n).toLocaleString("en-US")}${suffix}`;
      },
    });
  });
});
</script>
<template>
  <dl ref="panel" class="stats" v-reveal.stagger>
    <div
      v-for="(stat, i) in stats"
      :key="stat.label"
      class="stats__item js-reveal"
    >
      <dt class="stats__value">{{ shown[i] }}</dt>
      <dd class="stats__label">{{ stat.label }}</dd>
    </div>
  </dl>
</template>
