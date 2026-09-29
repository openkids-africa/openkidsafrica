<script setup lang="ts">
/* The hero visual: photographs cut to the outline of Africa, cross-fading
   in turn. Small round photographs, coloured dots and whatever the page
   slots in float around it, and the layers drift apart slightly as the
   pointer moves. */
import { gsap } from "gsap";

interface Photo {
  src: string;
  alt: string;
  /* Where to anchor the crop, as a CSS object-position value. */
  position?: string;
  /* How far to enlarge the photograph about that anchor. */
  zoom?: number;
}

const props = defineProps<{
  photos: Photo[];
  bubbles?: Photo[];
}>();

const root = ref<HTMLElement | null>(null);
const active = ref(0);

/* Only the photograph on show and the one after it are in the page, so a
   long rotation does not load every picture up front. */
const ready = ref(1);
const loaded = computed(() => props.photos.slice(0, ready.value + 1));

const frame = (photo: Photo) => ({
  objectPosition: photo.position,
  transformOrigin: photo.position,
  "--zoom": photo.zoom,
});
let timer: ReturnType<typeof setInterval> | undefined;
let ctx: gsap.Context | undefined;
let onMove: ((e: PointerEvent) => void) | undefined;
let onLeave: (() => void) | undefined;

onMounted(() => {
  const el = root.value;
  if (!el) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  if (props.photos.length > 1) {
    timer = setInterval(() => {
      active.value = (active.value + 1) % props.photos.length;
      ready.value = Math.max(ready.value, active.value + 1);
    }, 4800);
  }

  ctx = gsap.context(() => {
    gsap.fromTo(
      ".africa__shape",
      { autoAlpha: 0, scale: 0.9, rotate: -5 },
      { autoAlpha: 1, scale: 1, rotate: 0, duration: 1.3, ease: "power3.out" },
    );
    gsap.fromTo(
      ".africa__float",
      { autoAlpha: 0, scale: 0.6 },
      {
        autoAlpha: 1,
        scale: 1,
        duration: 0.7,
        delay: 0.6,
        stagger: 0.09,
        ease: "back.out(1.6)",
      },
    );
    gsap.utils.toArray<HTMLElement>(".africa__float").forEach((node, i) => {
      gsap.to(node, {
        y: i % 2 ? 12 : -12,
        x: i % 3 ? -6 : 6,
        duration: 3.2 + (i % 4) * 0.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.2 + i * 0.15,
      });
    });
  }, el);

  const layers = Array.from(el.querySelectorAll<HTMLElement>(".africa__layer"));
  onMove = (e: PointerEvent) => {
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
    const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
    layers.forEach((layer) => {
      const depth = Number(layer.dataset.depth || 0);
      gsap.to(layer, {
        x: dx * depth,
        y: dy * depth,
        duration: 0.9,
        ease: "power2.out",
        overwrite: "auto",
      });
    });
  };
  onLeave = () =>
    gsap.to(layers, { x: 0, y: 0, duration: 1.1, ease: "power2.out" });
  el.addEventListener("pointermove", onMove);
  el.addEventListener("pointerleave", onLeave);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
  if (root.value && onMove)
    root.value.removeEventListener("pointermove", onMove);
  if (root.value && onLeave)
    root.value.removeEventListener("pointerleave", onLeave);
  ctx?.revert();
});
</script>
<template>
  <div ref="root" class="africa">
    <div class="africa__layer" data-depth="18">
      <div class="africa__shape africa__mask">
        <NuxtImg
          v-for="(photo, i) in loaded"
          :key="photo.src"
          :src="photo.src"
          :alt="i === active ? photo.alt : ''"
          :class="{ 'is-active': i === active }"
          :style="frame(photo)"
          format="webp"
          sizes="sm:100vw lg:50vw"
          :loading="i === 0 ? 'eager' : 'lazy'"
          :fetchpriority="i === 0 ? 'high' : undefined"
        />
      </div>
    </div>

    <div class="africa__layer" data-depth="34" aria-hidden="true">
      <span class="africa__float africa__dot africa__dot--a"></span>
      <span class="africa__float africa__dot africa__dot--b"></span>
      <span class="africa__float africa__dot africa__dot--c"></span>
    </div>

    <div v-if="bubbles && bubbles.length" class="africa__layer" data-depth="42">
      <figure
        v-for="(bubble, i) in bubbles"
        :key="bubble.src"
        class="africa__float africa__bubble"
        :class="`africa__bubble--${i + 1}`"
      >
        <NuxtImg
          :src="bubble.src"
          :alt="bubble.alt"
          format="webp"
          width="240"
          height="240"
          loading="lazy"
        />
      </figure>
    </div>

    <div class="africa__layer africa__layer--chips" data-depth="52">
      <slot />
    </div>
  </div>
</template>
<style scoped>
.africa {
  @apply relative mx-auto w-full max-w-[34rem];
  aspect-ratio: 495 / 518;
}

.africa__layer {
  @apply pointer-events-none absolute inset-0;
}

.africa__mask {
  -webkit-mask: url("/assets/images/svg/africa-map.svg") center / contain
    no-repeat;
  mask: url("/assets/images/svg/africa-map.svg") center / contain no-repeat;
}

.africa__shape {
  @apply absolute inset-0 bg-brand-200;
}

.africa__shape > img {
  @apply absolute inset-0 h-full w-full object-cover opacity-0;
  transform: scale(calc(var(--zoom, 1) * 1.12));
  transition:
    opacity 1.4s ease,
    transform 6.5s ease-out;
}

.africa__shape > img.is-active {
  @apply opacity-100;
  transform: scale(var(--zoom, 1));
}

.africa__dot {
  @apply absolute rounded-full;
}

.africa__dot--a {
  @apply left-[8%] top-[10%] h-4 w-4 bg-brand-500;
}

.africa__dot--b {
  @apply right-[6%] top-[22%] h-3 w-3 bg-slate-900;
}

.africa__dot--c {
  @apply bottom-[6%] left-[16%] h-3 w-3 bg-sky-500;
}

.africa__bubble {
  @apply absolute overflow-hidden rounded-full border-4 border-white bg-brand-100 shadow-card-hover;
}

.africa__bubble > img {
  @apply h-full w-full object-cover;
}

.africa__bubble--1 {
  @apply left-[-3%] top-[44%] h-24 w-24 lg:h-32 lg:w-32;
}

.africa__bubble--2 {
  @apply bottom-[2%] right-[2%] h-20 w-20 lg:h-28 lg:w-28;
}

.africa__layer--chips :deep(.africa__chip) {
  @apply pointer-events-auto absolute;
}
</style>
