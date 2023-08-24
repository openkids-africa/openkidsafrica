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
        <p
          v-for="(text, i) in aboutContent.heroSection.text"
          :key="i"
          class="page-header__subtext"
        >
          {{ text }}
        </p>
      </div>
      <div class="page-header__media-cont img-cont">
        <IllustrationsAbstract1 class="abstract-illustration" />
      </div>
    </div>
  </header>
  <section class="site-section">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">
          {{ aboutContent.valuesSection.title }}
        </h2>
      </header>
      <ul class="value-list">
        <li
          v-for="(item, index) in aboutContent.valuesSection.items"
          :key="index"
          class="card-list__item"
        >
          <article class="value-card">
            <h3 class="value-card__title">{{ item }}</h3>
            <div class="value-card__img-cont img-cont">
              <img :src="`/assets/images/svg/frame (${index + 1}).svg`" alt="">
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
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
.page-header {
  @apply relative  overflow-x-clip;
}
.page-header > .wrapper {
  @apply flex h-full items-center justify-between gap-4;
}

.page-header > .wrapper:has(.page-header__media-cont) {
  @apply flex-col-reverse lg:flex-row;
}

.page-header__text-cont {
  @apply flex flex-col justify-center gap-4 lg:min-h-[22rem] xl:min-h-[38rem] 2xl:min-h-[40rem] lg:flex-1;
}

.page-header__caption {
  @apply font-heading text-4xl font-bold;
}

.page-header__media-cont {
  @apply w-full lg:flex-1;
}

.abstract-illustration {
  @apply h-96 w-full lg:absolute lg:-right-[3.85%] lg:top-1/2 lg:m-0 lg:h-[110%]  lg:w-1/2 lg:-translate-y-[45.5%] 2xl:left-[52.5%] 2xl:w-[45%];
}

.value-list {
  @apply grid gap-6 md:grid-cols-2;
}

.value-card {
  @apply flex flex-col h-full justify-between gap-4 bg-white rounded-3xl overflow-clip border border-slate-200;
}

.value-card__title {
  @apply font-heading text-lg lg:text-2xl font-medium leading-tight p-6;
}

.value-card__img-cont {
  @apply w-full h-24 ;
}

.value-card__img-cont > img {
  @apply w-full h-full object-cover object-top;
}
</style>
