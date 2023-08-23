<script setup lang="ts">
import gsap from "gsap";

const { lightText, sticky } = useSiteHeader();

// const main = ref();
// let tl: gsap.core.Timeline;
// let ctx: gsap.Context;

// const toggleTimeline = () => {
//   tl.reversed(!tl.reversed());
// };
// onMounted(() => {
//   ctx = gsap.context((self) => {
//     if (!self.selector) return;
//     const boxes = self.selector(".box");
//     tl = gsap
//       .timeline()
//       .to(boxes[0], { x: 120, rotation: 360 })
//       .to(boxes[1], { x: -120, rotation: -360 }, "<")
//       .to(boxes[2], { y: -166 })
//       .reverse();
//   }, main.value); // <- Scope!
// });

// onUnmounted(() => {
//   ctx.revert(); // <- Easy Cleanup!
// });

const aboutContent = ref({
  heroSection: {
    title: "Our Journey",
    text: [
      "OpenKids Africa was previously referred to as Pranet Technology Initiative. It was started in 2019 by Regina Nkemchor with the aim of giving students in underserved communities equitable access to information technology skills. Recognizing that a single organization cannot do this, we are cooperating with other groups, schools, and the government to promote the OpenKids Africa mission.",
      "Starting in Nigeria, we are utilizing the Tech She Can open digital resources to expose children to technology and its advantages for future professions, with over 200 kids gaining a foundational grasp of the internet and technology-related career sectors. We utilize Tech She Can's resources to introduce kids to animation courses in technology for medical, agriculture, education, safety, and security, as well as space. We anticipate that these exposures will develop future innovators in technology.",
    ],
  },
  valuesSection: {
    title: "Our Values",
    items: [
      "We are champions of change; we believe every African child in underserved communities deserves equal access to information technology resources and skills.",
      "We recognize the importance of children having equal access to technology skills and resources.",
      "We believe that through open educational resources, children can have access to resources that will help their present and future innovation and creativity.",
      "We believe that parents and guardians have a role to play in inspiring children to learn digital skills and possibly explore a technology career in the future.",
    ],
  },
});

sticky.value = true;
lightText.value = false;
</script>
<template>
  <header class="page-header site-section">
    <div class="wrapper">
      <div class="page-header__text-cont">
        <h1 class="page-header__caption">
          {{ aboutContent.heroSection.title }}
        </h1>
        <p class="page-header__subtext">
          {{ aboutContent.heroSection.text[0] }}
        </p>
      </div>
    </div>
  </header>
  <!-- <section class="boxes-container" ref="main">
    <h1>Use the button to toggle a Timeline</h1>
    <div>
      <button @click="toggleTimeline">Toggle Timeline</button>
    </div>
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
  </section> -->
</template>
<style scoped>
.page-header > .wrapper {
  @apply relative flex items-center justify-between;
}

.page-header:has(.page-header__img-cont) {
  @apply flex-col-reverse lg:flex-row;
}

.page-header__text-cont {
  @apply flex flex-col gap-2;
}

.page-header__caption {
  @apply text-4xl font-bold;
}
</style>
