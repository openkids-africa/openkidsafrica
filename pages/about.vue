<script setup lang="ts">
import gsap from "gsap";
import { HelpingHandIcon, MailIcon } from "lucide-vue-next";

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
  infographicSection: {
    items: [
      {
        title:
          "90% of children in sub-Saharan Africa do not have access to a computer",
        text: [
          "The demand for Information Technology knowledge and skills is an urgent demand in Africa. Children need creative, communication, problem solving and collaboration skills to thrive in the modern economy as they prepare for future jobs.",
          "In West and Central Africa and Eastern and Southern Africa, over 300 million children and young people per region lack home internet access, totaling over 900 million without access. ",
        ],
        link: {
          text: "Unicef Report",
          link: "https://www.unicef.org/media/88381/file/How-many-children-and-young-people-have-internet-access-at-home-2020.pdf",
        },
        image: "/assets/images/svg/90percent.svg",
      },
      {
        title:
          "80% of African children do not enjoy a basic internet connection (UNESCO)",
        text: [
          "There is marked inequality in internet connectivity across the world’s regions. Only five percent of children and young people aged 25 years or younger in West and Central Africa, and just 13% in Eastern and Southern Africa, have internet access at home. Inaccessibility to Technology, lack of Internet, poor network has become a prevalent challenge for rural communities in Africa.",
        ],
        link: {
          text: "Unicef Report",
          link: "https://www.unicef.org/media/88381/file/How-many-children-and-young-people-have-internet-access-at-home-2020.pdf",
        },
        image: "/assets/images/svg/oneinfive.svg",
      },
    ],
  },
  teamSection: {
    title: "Our Team",
    team: [
      {
        name: "Regina Nkemchor",
        role: "FOUNDER, OPENKIDS AFRICA",
        image: "/assets/images/team/Regina Nkemchor.png",
        socials: [
          { name: "twitter", url: "https://twitter.com/reginaoradata" },
          {
            name: "linkedin",
            url: "https://www.linkedin.com/in/reginankem/",
          },
        ],
      },
      {
        name: "Adebola Ogunyemi",
        role: "EARLY CHILDHOOD EDUCATOR, OPENKIDS AFRICA",
        image: "/assets/images/team/Adebola Ogunyemi.png",
        socials: [],
      },
      {
        name: "Ibigbari",
        role: "PROGRAM COORDINATOR, OPENKIDS AFRICA",
        image: "/assets/images/team/Ibigbari.png",
        socials: [],
      },
      {
        name: "Uboho Essien",
        role: "WEB DESIGNER, OPENKIDS AFRICA",
        image: "/assets/images/team/Uboho Essien.png",
        socials: [],
      },
    ],
  },
});

onMounted(() => {
  sticky.value = true;
  lightText.value = false;
});
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
  <section class="site-section bg-purple-950 text-purple-100">
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
              <img
                :src="`/assets/images/svg/frame (${index + 1}).svg`"
                alt=""
              />
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
  <section class="site-section">
    <div class="wrapper">
      <ul class="infographic-list">
        <li
          v-for="(item, i) in aboutContent.infographicSection.items"
          :key="i"
          class="infographic-list__item"
        >
          <article
            :class="`infographic ${i % 2 ? 'lg:!flex-row-reverse' : ''}`"
          >
            <header class="infographic__header">
              <h2 class="infographic__title">
                {{ item.title }}
              </h2>
              <div class="img-cont">
                <img :src="item.image" :alt="item.title" />
              </div>
            </header>
            <div class="infographic__text-cont">
              <p v-for="text in item.text">
                {{ text }}
              </p>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
  <section class="site-section">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">
          {{ aboutContent.teamSection.title }}
        </h2>
      </header>

      <ul class="team-list">
        <li
          v-for="(item, i) in aboutContent.teamSection.team"
          :key="i"
          class="team-list__item"
        >
          <TeamCard :member="item" :i="i" />
        </li>
      </ul>
    </div>
  </section>
  <section class="site-section partner-section">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">Partner with us</h2>
        <p>
          At OpenKids Africa, we believe in the power of collaboration and
          partnership to make a lasting impact on the lives of African children.
          By partnering with us, you can contribute to the growth and
          development of young minds in underserved communities, empowering them
          with essential digital skills for a brighter future.
        </p>
        <div class="action-cont">
          <button class="btn">
            <HelpingHandIcon class="icon" />
            <span class="text"> Donate </span>
          </button>
          <button class="btn btn--secondary">
            <MailIcon class="icon" />
            <span class="text"> Contact Us </span>
          </button>
        </div>
      </header>

      <IllustrationsWorldMap />
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
  @apply flex flex-col justify-center gap-4 lg:min-h-[22rem] lg:flex-1 xl:min-h-[38rem] 2xl:min-h-[40rem];
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
  @apply flex h-full flex-col justify-between gap-4 overflow-clip rounded-3xl border border-purple-600;
}

.value-card__title {
  @apply p-6 font-heading text-lg font-medium leading-tight lg:text-2xl;
}

.value-card__img-cont {
  @apply h-24 w-full bg-purple-900;
}

.value-card__img-cont > img {
  @apply h-full w-full object-cover object-top;
}

.infographic-list {
  @apply flex flex-col gap-12;
}

.infographic {
  @apply flex flex-col items-center gap-6 lg:flex-row;
}

.infographic__header {
  @apply flex flex-1 flex-col-reverse gap-2 text-center;
}

.infographic__title {
  @apply font-heading text-2xl font-bold;
}

.infographic__text-cont {
  @apply flex flex-1 flex-col gap-2;
}

.team-list {
  @apply grid gap-6 sm:grid-cols-2 lg:grid-cols-4;
}

.partner-section {
  @apply px-0;
}

.partner-section > .wrapper {
  @apply flex max-w-[140rem] flex-col-reverse gap-6;
}

.partner-section .site-section__header {
  @apply m-auto max-w-6xl;
}
</style>
