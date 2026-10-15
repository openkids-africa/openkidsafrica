<script setup lang="ts">
import about from "~/content/pages/about.json";
import team from "~/content/team.json";

/* The intro, journey and values copy lives in content/pages/about.json and
   the team in content/team.json. */
const aboutContent = ref<AboutPageContent>({
  heroSection: {
    title: about.intro.title,
    text: about.intro.text,
    images: [about.intro.image],
  },
  believeSection: {
    text: [
      "We believe that through tech lessons, children gain access to resources and skills that nurture both present and future innovation and creativity.",
    ],
  },
  journeySection: about.journey,
  valuesSection: about.values,
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
    team: team.members,
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
  title: "About Us",
});
</script>
<template>
  <div class="page">
    <PageIntro
      :caption="aboutContent.heroSection.title"
      :text="aboutContent.heroSection.text"
      :images="aboutContent.heroSection.images"
    />

    <!-- BELIEF -->
    <section class="site-section site-section--tight">
      <div class="wrapper">
        <div class="tile tile--tint belief js-reveal" v-reveal>
          <p class="belief__quote">{{ aboutContent.believeSection.text[0] }}</p>
        </div>
      </div>
    </section>

    <!-- JOURNEY + VALUES: photo beside a panel, then mirrored -->
    <section class="site-section">
      <div class="wrapper flex flex-col gap-4">
        <div class="zigzag js-reveal" v-reveal.stagger>
          <PhotoTile
            class="zigzag__photo"
            src="/assets/images/photos/photo-4.jpg"
            alt="A volunteer teaching a hall full of pupils"
          />
          <div class="panel flex h-full flex-col">
            <div class="panel__head">
              <h2 class="panel__title">
                {{ aboutContent.journeySection.title }}
              </h2>
            </div>
            <div class="panel__body grow">
              <p v-for="(text, i) in aboutContent.journeySection.text" :key="i">
                {{ text }}
              </p>
            </div>
          </div>
        </div>
        <div class="zigzag zigzag--flip js-reveal" v-reveal.stagger>
          <PhotoTile
            class="zigzag__photo"
            src="/assets/images/photos/photo-25.jpg"
            alt="A pupil standing to answer in class"
          />
          <NumberedPanel
            :title="aboutContent.valuesSection.title"
            :items="aboutContent.valuesSection.items"
          />
        </div>
      </div>
    </section>

    <!-- THE GAP -->
    <section class="site-section pt-0">
      <div class="wrapper">
        <header class="site-section__header js-reveal" v-reveal>
          <p class="site-section__eyebrow">The gap we work to close</p>
          <h2 class="site-section__caption">Why access matters</h2>
        </header>
        <ul class="infographics">
          <li
            v-for="(item, i) in aboutContent.infographicSection.items"
            :key="i"
          >
            <article
              class="zigzag js-reveal"
              :class="{ 'zigzag--flip': i % 2 }"
              v-reveal.stagger
            >
              <figure class="tile tile--tint zigzag__photo infographic__figure">
                <img :src="item.image" :alt="item.title" />
              </figure>
              <div class="panel flex h-full flex-col">
                <div class="panel__body grow justify-center">
                  <h3 class="infographic__title">{{ item.title }}</h3>
                  <p v-for="(text, n) in item.text" :key="n">{{ text }}</p>
                  <a
                    :href="item.link.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn--outline btn--sm w-fit"
                  >
                    {{ item.link.text }}
                  </a>
                </div>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </section>

    <!-- TEAM -->
    <section class="site-section bg-slate-50 lg:rounded-[3rem]">
      <div class="wrapper">
        <header class="site-section__header js-reveal" v-reveal>
          <h2 class="site-section__caption">
            {{ aboutContent.teamSection.title }}
          </h2>
        </header>
        <ul class="team js-reveal" v-reveal.stagger>
          <li
            v-for="(member, i) in aboutContent.teamSection.team"
            :key="member.name"
          >
            <TeamCard :member="member" :i="i" />
          </li>
        </ul>
        <div class="action-cont mt-10">
          <NuxtLink to="/about/team" class="btn btn--outline"
            >Meet the whole team</NuxtLink
          >
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="site-section">
      <div class="wrapper">
        <header class="site-section__header js-reveal" v-reveal>
          <h2 class="site-section__caption">Get in touch with us</h2>
          <p>
            We are constantly seeking volunteers, including teachers and
            technology enthusiasts. Please contact us below, and we will get
            back to you
          </p>
        </header>
        <div class="js-reveal mx-auto max-w-3xl" v-reveal>
          <ContactForm />
        </div>
      </div>
    </section>

    <PartnersSection :section-data="aboutContent.partnersSection" />
  </div>
</template>
<style scoped>
.belief {
  @apply px-8 py-12 text-center lg:px-20 lg:py-16;
}

.belief__quote {
  @apply mx-auto max-w-3xl font-heading text-2xl font-medium leading-snug text-slate-900 lg:text-3xl;
  text-wrap: balance;
}

.infographics {
  @apply flex flex-col gap-4;
}

.infographic__figure {
  @apply flex items-center justify-center p-8;
}

.infographic__figure > img {
  @apply max-h-64 w-auto;
}

.infographic__title {
  @apply font-heading text-2xl font-semibold leading-snug text-slate-900;
  text-wrap: balance;
}

.team {
  @apply grid gap-6 sm:grid-cols-2 lg:grid-cols-3;
}
</style>
