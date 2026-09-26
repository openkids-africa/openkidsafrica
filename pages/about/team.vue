<script setup lang="ts">
import { CheckIcon, ArrowUpRightIcon } from "lucide-vue-next";

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

useHead({
  title: "Our Team",
});
</script>
<template>
  <PageIntro
    :caption="teamContent.teamSection.title"
    :text="[
      'The people behind OpenKids Africa, and the volunteers who deliver our tech lessons in rural schools.',
    ]"
  />

  <section class="site-section pt-0">
    <div class="wrapper">
      <ul class="team">
        <li v-for="(item, i) in teamContent.teamSection.team" :key="i">
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

  <!-- CHAMPIONS -->
  <section
    id="champions"
    class="site-section scroll-mt-24 bg-slate-50 lg:rounded-[3rem]"
  >
    <div class="wrapper">
      <div class="champions">
        <header class="site-section__header site-section__header--left !mb-0">
          <p class="site-section__eyebrow">Volunteer</p>
          <h2 class="site-section__caption">
            {{ teamContent.educationChampionsSection.title }}
          </h2>
          <p
            v-for="(text, i) in teamContent.educationChampionsSection
              .description"
            :key="i"
          >
            {{ text }}
          </p>
        </header>
        <div class="champions__side">
          <div class="tile tile--tint">
            <h3 class="tile__title mb-4">
              {{
                teamContent.educationChampionsSection.additionalInfo[0].title
              }}
            </h3>
            <ul class="checklist">
              <li
                v-for="(item, index) in teamContent.educationChampionsSection
                  .additionalInfo[0].list"
                :key="index"
                class="checklist__item !bg-white"
              >
                <span class="checklist__icon-cont"
                  ><CheckIcon class="icon"
                /></span>
                <p>{{ item }}</p>
              </li>
            </ul>
          </div>
          <p class="text-base text-slate-600">
            {{ teamContent.educationChampionsSection.mentoringInfo }}
          </p>
          <NuxtLink to="/contact" class="btn w-fit">
            Become a champion
            <ArrowUpRightIcon class="icon" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <section class="site-section">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">Get in touch with us</h2>
        <p>
          We are constantly seeking volunteers, including teachers and
          technology enthusiasts. Please contact us below, and we will get back
          to you
        </p>
      </header>
      <div class="mx-auto max-w-3xl">
        <ContactForm />
      </div>
    </div>
  </section>

  <PartnersSection :section-data="teamContent.partnersSection">
    <template #illustration>
      <div class="mt-16"><SiteSlideshow /></div>
    </template>
  </PartnersSection>
</template>
<style scoped>
.team {
  @apply grid gap-6 sm:grid-cols-2 lg:grid-cols-3;
}

.champions {
  @apply grid gap-8 lg:grid-cols-2 lg:gap-16;
}

.champions .site-section__caption {
  @apply lg:text-4xl;
}

.champions__side {
  @apply flex flex-col gap-6;
}
</style>
