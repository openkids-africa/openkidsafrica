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

const teamContent = ref<TeamPageContent>({
  teamSection: {
    title: "Our Team",
    team: [
      {
        name: "Regina Nkenchor",
        role: "Founder & Executive Director OpenKids Africa",
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
        name: "Adebola Temitayo Ogunyemi",
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
          {
            name: "twitter",
            url: "https://x.com/D_Repairer",
          },
          {
            name: "instagram",
            url: "https://www.instagram.com/officialrepairer",
          },
        ],
      },
      {
        name: "Anita Ihuman",
        role: "Program Coordinator",
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
  educationChampionsSection: {
    title: "Join Us as an OpenKids Africa Educational Champion!",
    description: [
      "OpenKids Africa Education Champions are passionate volunteers dedicated to delivering tech lessons to children in rural schools using our combined free digital resources.",
      "Our free digital educational resources are designed for use by everyone, so you don't need any specialist knowledge to be able to deliver the tech lessons to students. However, some of our partners may require that you first register as a STEM Ambassador before delivering any content to students (this is a free process and a requirement for all our volunteers). Registering as a STEM Ambassador provides you with:",
    ],
    additionalInfo: [
      {
        title: "Benefits of Registering as a STEM Ambassador",
        list: [
          "A free DBS check",
          "An induction to working with young people",
          "Access to a variety of STEM resources",
          "Access to a community of like-minded STEM volunteers",
        ],
      },
    ],
    mentoringInfo:
      "In addition, our champions will receive one-on-one mentoring from our team of educationists and our partners. It's an exciting opportunity to make a difference in the lives of children and communities.",
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
  <!-- <header class="page-header site-section">
    <div class="wrapper !max-w-[90rem]">
      <div class="page-header__text-cont 2xl:!ml-40">
        <h1 class="page-header__caption">
          {{ teamContent.heroSection.title }}
        </h1>
        <p
          v-for="(text, i) in teamContent.heroSection.text"
          :key="i"
          class="page-header__subtext"
        >
          {{ text }}
        </p>
      </div>
      <div class="page-header__media-cont img-cont">
        <SiteHeroImagesGrid
          class="images-grid programs-header__media-cont"
          :images="teamContent.heroSection.images || []"
        />
      </div>
    </div>
  </header> -->

  <section class="site-section">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">
          {{ teamContent.teamSection.title }}
        </h2>
      </header>

      <ul class="team-list">
        <li
          v-for="(item, i) in teamContent.teamSection.team"
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
              <!-- <p>
                Our work at OpenKids Africa have been recognized and supported
                by our partners at
                <a
                  class="text-orange-600 underline"
                  href="https://techshecan.org/"
                  >Tech She Can</a
                >.
              </p> -->
            </template>
            <template v-else-if="item.name == 'Adebola Temitayo Ogunyemi'">
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

  <!-- New Section for Educational Champions -->
  <section class="site-section bg-orange-200 p-12 text-orange-800">
    <div class="wrapper">
      <header class="site-section__header site-section__header--left">
        <h2 class="site-section__caption">
          {{ teamContent.educationChampionsSection.title }}
        </h2>
        <p
          v-for="(text, i) in teamContent.educationChampionsSection.description"
          class="site-section__subtext"
        >
          {{ text }}
        </p>
      </header>
      <div class="py-8">
        <!-- <h3
          class="mb-4 font-heading text-xl font-bold leading-tight lg:text-3xl"
        >
          {{ teamContent.educationChampionsSection.additionalInfo[0].title }}
        </h3> -->
        <ul
          v-if="teamContent.educationChampionsSection.additionalInfo[0].list"
          class="flex flex-wrap gap-4 lg:grid lg:grid-cols-2"
        >
          <li
            v-for="(item, index) in teamContent.educationChampionsSection
              .additionalInfo[0].list"
            :key="index"
            class="grow rounded-3xl bg-orange-100 p-6 text-2xl font-medium text-orange-800"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <p class="py-8">
        {{ teamContent.educationChampionsSection.mentoringInfo }}
      </p>
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
  <PartnersSection :section-data="teamContent.partnersSection">
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
