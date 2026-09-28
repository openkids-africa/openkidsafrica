/* Motion layer: scroll reveals, parallax, and a refresh after page
   transitions. Everything is skipped when the visitor prefers reduced
   motion, and the reveal keeps content visible if this plugin never runs
   (see .js-reveal in main.css). */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) {
    nuxtApp.vueApp.directive("reveal", { getSSRProps: () => ({}) });
    nuxtApp.vueApp.directive("parallax", { getSSRProps: () => ({}) });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const show = (els: Element[]) =>
    els.forEach((el) => {
      el.classList.remove("js-reveal");
      el.classList.add("is-armed");
    });

  /* v-reveal            — fade and rise when the element scrolls into view
     v-reveal.stagger    — the element's children, one after another
     v-reveal="0.3"      — extra delay in seconds */
  nuxtApp.vueApp.directive("reveal", {
    mounted(el: HTMLElement, binding) {
      const targets = binding.modifiers.stagger
        ? (Array.from(el.children) as HTMLElement[])
        : [el];
      el.classList.add("is-armed");
      targets.forEach((t) => t.classList.add("is-armed"));
      if (reduce || !targets.length) {
        show([el, ...targets]);
        return;
      }
      const delay = typeof binding.value === "number" ? binding.value : 0;
      gsap.fromTo(
        targets,
        { autoAlpha: 0, y: 26 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          delay,
          stagger: binding.modifiers.stagger ? 0.08 : 0,
          overwrite: true,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
          onStart: () => show([el, ...targets]),
        },
      );
    },
    unmounted(el: HTMLElement) {
      ScrollTrigger.getAll()
        .filter((t) => t.trigger === el)
        .forEach((t) => t.kill());
    },
  });

  /* v-parallax="18" — drifts the element by ±18px as the page scrolls past. */
  nuxtApp.vueApp.directive("parallax", {
    mounted(el: HTMLElement, binding) {
      if (reduce) return;
      const amount = typeof binding.value === "number" ? binding.value : 16;
      gsap.fromTo(
        el,
        { y: -amount },
        {
          y: amount,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        },
      );
    },
    unmounted(el: HTMLElement) {
      ScrollTrigger.getAll()
        .filter((t) => t.trigger === el)
        .forEach((t) => t.kill());
    },
  });

  nuxtApp.hook("page:transition:finish", () => {
    ScrollTrigger.refresh();
  });

  return { provide: { reduceMotion: reduce } };
});
