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

const aboutContent = ref<AboutPageContent>({
  heroSection: {
    title: "About Us",
    text: [
      "OpenKids Africa was established in 2020 by Regina Nkenchor. The organization's primary objective is to provide students in underserved communities with equitable access to information technology skills.",
      "Recognizing that achieving this goal requires collaborative efforts, we actively partner with other groups, schools, and governmental bodies to advance the mission of OpenKids Africa.",
      "Our initiative began in Nigeria, where we leverage free digital resources to introduce children in rural communities to the world of technology and its potential for shaping their future careers. To date, we have successfully equipped over 5,000 children with a foundational understanding of the internet and how technology relates to different career fields. Our goal is to reach 20,000 children by 2030",
    ],
    images: [
      {
        src: "/assets/images/photos/photo-29.jpeg",
        alt: "Hero Image 1",
      },
      {
        type: "block",
        color: "orange",
      },
      {
        src: "/assets/images/photos/photo-14.jpg",
        alt: "Hero Image 2",
      },
      {
        src: "/assets/images/photos/photo-30.jpg",
        alt: "Hero Image 3",
      },
      {
        src: "/assets/images/photos/photo-31.jpg",
        alt: "Hero Image 4",
      },
      {
        type: "block",
        color: "purple",
      },
    ],
  },
  journeySection: {
    title: "Our Journey",
    text: [
      "OpenKids Africa was established in 2019 by Regina Nkenchor with the primary goal of providing students in underserved communities with equitable access to information technology skills. Recognizing the magnitude of this task, we have formed collaborations with other organizations, schools, and governmental bodies to advance the mission of OpenKids Africa.",
      "Commencing our efforts in Nigeria, we harness freely available digital resources to introduce children to the realm of technology and its potential benefits for their future careers. To date, we have successfully enabled over 1000 children to grasp the fundamentals of the internet and various technology-related vocational sectors.",
      "Our curriculum includes introductory courses in basic animation and technology applications for fields such as medicine, agriculture, education, safety, security, and even space exploration. Our aspiration is that these early exposures will nurture the growth of future technology innovators.",
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
        name: "Regina Nkenchor",
        role: "Founder, OpenKids Africa ",
        image: "/assets/images/team/Regina Nkemchor.png",
        socials: [
          { name: "twitter", url: "https://twitter.com/reginankenchor" },
          {
            name: "linkedin",
            url: "https://www.linkedin.com/in/reginankenchor/",
          },
        ],
      },
      {
        name: "Adebola Ogunyemi",
        role: "Early Child Educator & Program Coordinator",
        image: "/assets/images/team/Adebola Ogunyemi.png",
        socials: [
          {
            name: "facebook",
            url: "https://www.facebook.com/AmBeulah?mibextid=ZbWKwL",
          },
          {
            name: "linkedin",
            url: "https://www.linkedin.com/in/jesutimilehin-temitayo-ogunyemi-a260aa13a",
          },
        ],
      },
      {
        name: "Anita Ihuman",
        role: "Program Coordinator  & Fundraising Assistant, OpenKids Africa ",
        image: "/assets/images/team/Anita Ihuman.png",
        socials: [
          {
            name: "twitter",
            url: "https://twitter.com/Anita_ihuman",
          },
          {
            name: "linkedin",
            url: "https://www.linkedin.com/in/anita-ihuman/",
          },
        ],
      },
      // {
      //   name: "Ibigbari",
      //   role: "PROGRAM COORDINATOR, OpenKids Africa ",
      //   image: "/assets/images/team/Ibigbari.png",
      //   socials: [],
      // },
      // {
      //   name: "Uboho Essien",
      //   role: "WEB DESIGNER, OpenKids Africa ",
      //   image: "/assets/images/team/Uboho Essien.png",
      //   socials: [],
      // },
    ],
  },
  partnersSection: {
    title: "Partner with us",
    description:
      "At OpenKids Africa, we believe in the power of collaboration and partnership to make a lasting impact on the lives of African children. By partnering with us, you can contribute to the growth and development of young minds in underserved communities, empowering them with essential digital skills for a brighter future.",
    donateLink: {
      text: "Donate",
      url: "http://paypal.me/openkidsafrica",
    },
    contactCTA: {
      id: "contact",
      text: "Contact Us",
    },
    partners: [
      {
        name: "Tech She Can",
        logo: "/assets/images/partners/tech-she-can-logo.svg",
      },
    ],
    hidePartners: true,
  },
});

onMounted(() => {
  sticky.value = true;
  lightText.value = false;
});

useHead({
  title: "About Us",
});
</script>
<template>
  <header class="page-header site-section">
    <div class="wrapper !max-w-[90rem]">
      <div class="page-header__text-cont 2xl:!ml-40">
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
        <!-- <IllustrationsAbstract1 class="abstract-illustration" /> -->
        <SiteHeroImagesGrid
          class="images-grid programs-header__media-cont"
          :images="aboutContent.heroSection.images || []"
        />
      </div>
    </div>
  </header>
  <!-- <section class="site-section bg-orange-100 text-orange-950">
    <div class="wrapper">
      <header class="site-section__header site-section__header--left">
        <h2 class="site-section__caption">
          {{ aboutContent.journeySection.title }}
        </h2>
      </header>
      <div class="site-section__text-cont">
        <p
          v-for="(text, i) in aboutContent.journeySection.text"
          :key="i"
          class="site-section__subtext"
        >
          {{ text }}
        </p>
      </div>
    </div>
  </section> -->
  <section class="site-section bg-slate-950 text-slate-100">
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
          <TeamCard :member="item" :i="i">
            <template v-if="item.name == 'Regina Nkenchor'">
              <p>
                To address the challenge in Africa, where children in rural
                schools lack digital skills and risk being left behind in the
                rapidly advancing digital space, and considering the scarcity of
                women in technology roles, I founded OpenKids Africa and
                currently serve as its executive director.
              </p>
              <p>
                My vision is to ensure that all children have equal rights to
                quality education and exposure to digital skills, regardless of
                their gender, race, or location.
              </p>
              <p>
                Early exposure to digital skills empowers children to make
                informed career choices, paving the way for them to become
                future leaders in technology, business, or even in the field of
                medicine.
              </p>
              <p>
                Our work at OpenKids Africa have been recognized and supported
                by our partners at
                <a
                  class="text-orange-600 underline"
                  href="https://techshecan.org/"
                  >Tech She Can</a
                >.
              </p>
            </template>
            <template v-else-if="item.name == 'Adebola Ogunyemi'">
              <p>
                With a background in Computer Science and a Postgraduate degree
                in Early Childhood and Educational Foundation, I am passionate
                about fostering digital literacy in children.
              </p>
              <p>
                Having joined OpenKids Africa in 2020 as an Early Childhood
                Educator, my focus extends to reaching schools in low-tech and
                rural communities. I am committed to bridging the digital gap
                and firmly believe in nurturing the innovative potential of
                today's children.
              </p>
              <p>
                As part of OpenKids Africa, I take pride in igniting children's
                interest in technology, especially among girls, and aspire to
                contribute to the organization's future impact, connecting more
                children to a digital future.
              </p>
            </template>
            <template v-else-if="item.name == 'Anita Ihuman'">
              <p>
                As a program coordinator at Openkids Africa, I am in charge of
                managing programs and ensuring that each project coincides with
                our organizational goals and delivers exceptional results. I am
                enthusiastic about topics that strongly resonate with values
                promoting growth, inclusivity, and sustainability, all of which
                contribute to shaping the future of technology.
              </p>
              <p>
                I am passionate about empowering the next generation of
                technologists through mentorships and onboarding.
              </p>
              <p>
                With a background in technology and open source, I am uniquely
                positioned to educate children on technology and how it can
                translate to their career choices. In my role as a program
                manager, I can play a part in introducing children to a digital
                future, particularly those from marginalized groups.
              </p>
            </template>
          </TeamCard>
        </li>
      </ul>
    </div>
  </section>
  <section class="site-section contact-section">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">Get in touch with us</h2>
        <p class="site-section__subtext">
          We are constantly seeking volunteers, including teachers and
          technology enthusiasts. Please contact us below, and we will get back
          to you
        </p>
      </header>

      <ContactForm />
    </div>
  </section>
  <PartnersSection :section-data="aboutContent.partnersSection">
    <template #illustration>
      <SiteSlideshow class="m-auto max-w-7xl" />
    </template>
  </PartnersSection>

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
.value-list {
  @apply grid gap-6 md:grid-cols-2;
}

.value-card {
  @apply flex h-full flex-col justify-between gap-4 overflow-clip rounded-3xl border border-slate-600;
}

.value-card__title {
  @apply p-6 font-heading text-lg font-medium leading-tight lg:text-2xl;
}

.value-card__img-cont {
  @apply h-24 w-full bg-slate-900;
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
  @apply grid gap-12 sm:grid-cols-2 lg:grid-cols-3;
  /* @apply flex flex-wrap justify-center gap-6; */
}

.team-list__item {
  @apply min-w-[12rem] max-w-lg;
}
</style>
