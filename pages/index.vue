<script setup lang="ts">
import {
  ArrowUpRightIcon,
  ArrowRightIcon,
  SparklesIcon,
  GraduationCapIcon,
  HeartHandshakeIcon,
} from "lucide-vue-next";

const content = ref({
  heroSection: {
    caption:
      "Connecting every African child to a digital future through the delivery of free tech lessons in rural schools",
    subtext: "Welcome to OpenKids Africa",
    images: [
      {
        src: "/assets/images/photos/photo-14.jpg",
        alt: "Hero Image 1",
      },
      {
        src: "/assets/images/photos/photo-26.jpg",
        alt: "Hero Image 2",
      },
      {
        type: "block",
        color: "purple",
      },
      {
        src: "/assets/images/photos/photo-2.jpg",
        alt: "Hero Image 3",
      },
      {
        src: "/assets/images/photos/photo-2.jpeg",
        alt: "Hero Image 4",
      },
      {
        type: "block",
        color: "orange",
      },
    ],
  },
  welcomeSection: {
    title: "Welcome to Openkids Africa",
    text: [
      "OpenKids Africa is a non-profit organization. We believe that information and communication technology is the key to the strong and sustainable development of a country.",
      "Therefore, we leverage free digital resources and open educational resources to provide quality information technology lessons and materials for kids and schools in rural communities in Africa.",
    ],
  },
  /* Figures the About page already states, gathered for the numbers panel. */
  statsSection: {
    title: "Why it matters",
    stats: [
      {
        value: "90%",
        label:
          "of children in sub-Saharan Africa do not have access to a computer",
      },
      {
        value: "80%",
        label:
          "of African children do not enjoy a basic internet connection (UNESCO)",
      },
      {
        value: "20,000",
        label: "children we aim to reach by the year 2030",
      },
    ],
  },
  whatWeDoSection: {
    title: "What We Do",
    text: "OpenKids Africa is a non-profit organization collaborating with government, schools, and industry to provide free, quality information technology lessons and resources for children in rural African communities.",
    photos: [
      { src: "/assets/images/photos/photo-8.jpg", alt: "A classroom session" },
      {
        src: "/assets/images/photos/photo-24.jpg",
        alt: "Students at a computer",
      },
      {
        src: "/assets/images/photos/photo-16.jpg",
        alt: "A mentor with pupils",
      },
      { src: "/assets/images/photos/photo-34.jpg", alt: "Children in class" },
    ],
    cards: [
      {
        id: "leadership",
        title: "Leadership",
        text: "We lead by advocating for the use and development of open educational resources and free digital materials for schools in underserved communities in Africa. This way, we can all work together to close the digital gap in our society.",
      },
      {
        id: "collaboration",
        title: "Collaboration",
        text: "We partner with organizations to provide free digital resources for schools in underserved communities, aiding in teaching and preparing children for a future career in technology.",
      },
      {
        id: "awareness",
        title: "Awareness",
        text: "We promote technology awareness for parents and guardians to inspire and motivate children to consider a career in technology in the future. Understanding the essence of technology in their future career pursuits is crucial for equipping children with the skills and mindset needed to thrive in the digital age.",
      },
      {
        id: "equality",
        title: "Equality",
        text: "To address the digital imbalance in the ICT industry, we promote information technology skills for girls in Africa. We collaborate with organizations that align with this mission.",
      },
      {
        id: "sustainability",
        title: "Sustainability",
        text: "To conserve resources and avoid e-waste, we accept donations of refurbished laptops from our partner organizations for children and schools in underserved communities.",
      },
      {
        id: "education",
        title: "Education",
        text: "With free educational materials, we empower African children in underserved communities to take the lead in Africa's emerging digital economy.",
      },
    ],
  },
  founderSection: {
    title: "Changing what a child can imagine for themselves",
    quote:
      "To address the challenge in Africa, where children in rural schools lack digital skills and risk being left behind in the rapidly advancing digital space, and considering the scarcity of women in technology roles, I founded OpenKids Africa and currently serve as its executive director.",
    name: "Regina Nkenchor",
    role: "Founder & Executive Director",
    image: "/assets/images/team/Regina Nkemchor.png",
  },
  championsSection: {
    text: "OpenKids Africa Education Champions are passionate volunteers dedicated to delivering tech lessons to children in rural schools using our combined free digital resources.",
  },
  partnersSection: {
    title: "Our Partners",
    donateLink: {
      text: "Donate to OpenKids Africa",
      url: "http://paypal.me/openkidsafrica",
    },
    contactCTA: {
      id: "partner",
      text: "Partner with Us",
    },
    partners: [
      {
        name: "Tech She Can",
        logo: "/assets/images/partners/tech-she-can-logo.svg",
      },
      {
        name: "Microsoft",
        logo: "/assets/images/partners/microsoft-logo.svg",
      },
    ],
  },
  ctaSection: {
    title: "Support the future of children in rural African schools",
    text: "Every month, your contribution plays a pivotal role in shaping the future of African children by providing access to our free tech lessons.",
  },
});

useHead({
  title: "Home",
});
</script>
<template>
  <!-- HERO -->
  <header class="hero">
    <div class="wrapper">
      <div class="hero__text">
        <p class="site-section__eyebrow">{{ content.heroSection.subtext }}</p>
        <h1 class="hero__caption">{{ content.heroSection.caption }}</h1>
        <p class="hero__subtext">{{ content.welcomeSection.text[0] }}</p>
        <div class="action-cont">
          <NuxtLink to="/donate" class="btn">
            Donate Now
            <ArrowUpRightIcon class="icon" />
          </NuxtLink>
          <NuxtLink to="/programs/ai-for-all" class="chip hero__announce">
            <span class="hero__announce-tag">New</span>
            AI for All — teacher training with Tech She Can × Microsoft
            <ArrowRightIcon class="icon h-4 w-4" />
          </NuxtLink>
        </div>
      </div>

      <!-- Bento: photo · facts · pillar · volunteer -->
      <div class="bento">
        <div class="bento__col">
          <SparklesIcon class="bento__spark" aria-hidden="true" />
          <figure class="tile tile--photo bento__photo">
            <NuxtImg
              :src="content.heroSection.images[0].src"
              :alt="content.heroSection.images[0].alt"
              format="webp"
              sizes="sm:100vw md:50vw lg:25vw"
              loading="eager"
              fetchpriority="high"
            />
          </figure>
          <span class="chip">
            <span class="chip__icon"><SparklesIcon class="icon" /></span>
            Free tech lessons in rural schools
          </span>
        </div>

        <div class="bento__col">
          <span class="chip">Over 1,000 children reached so far</span>
          <div class="tile tile--tint bento__stat">
            <p class="tile__stat">{{ content.statsSection.stats[0].value }}</p>
            <p class="tile__text">{{ content.statsSection.stats[0].label }}</p>
          </div>
        </div>

        <div class="bento__col">
          <div class="tile tile--tint bento__pillar">
            <span class="icon-badge"><GraduationCapIcon class="icon" /></span>
            <h2 class="tile__title">
              {{ content.whatWeDoSection.cards[5].title }}
            </h2>
            <p class="tile__text">
              {{ content.whatWeDoSection.cards[5].text }}
            </p>
          </div>
          <NuxtLink to="/programs" class="btn btn--outline w-full">
            See our programs
            <ArrowUpRightIcon class="icon" />
          </NuxtLink>
        </div>

        <div class="bento__col">
          <NuxtLink to="/about/team#champions" class="btn btn--outline w-full">
            Be an Education Champion
            <ArrowUpRightIcon class="icon" />
          </NuxtLink>
          <div class="tile tile--tint bento__volunteer">
            <figure class="bento__volunteer-photo">
              <NuxtImg
                :src="content.heroSection.images[1].src"
                :alt="content.heroSection.images[1].alt"
                format="webp"
                sizes="sm:100vw md:50vw lg:25vw"
                loading="lazy"
              />
            </figure>
            <h2 class="tile__title">Volunteer with us</h2>
            <p class="tile__text">{{ content.championsSection.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- NUMBERS -->
  <section class="site-section">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">{{ content.statsSection.title }}</h2>
        <p>{{ content.welcomeSection.text[1] }}</p>
      </header>
      <StatsPanel :stats="content.statsSection.stats" />
    </div>
  </section>

  <!-- WHAT WE DO -->
  <section class="site-section bg-slate-50 lg:rounded-[3rem]">
    <div class="wrapper">
      <div class="photo-strip mb-12">
        <figure v-for="p in content.whatWeDoSection.photos" :key="p.src">
          <NuxtImg
            :src="p.src"
            :alt="p.alt"
            format="webp"
            sizes="sm:50vw md:25vw"
            loading="lazy"
          />
        </figure>
      </div>
      <header class="site-section__header">
        <h2 class="site-section__caption">
          {{ content.whatWeDoSection.title }}
        </h2>
        <p>{{ content.whatWeDoSection.text }}</p>
      </header>
      <ul class="pillars">
        <li v-for="card in content.whatWeDoSection.cards" :key="card.id">
          <DoingsCard :card-content="card" />
        </li>
      </ul>
    </div>
  </section>

  <!-- FOUNDER -->
  <section class="site-section">
    <div class="wrapper">
      <div class="founder">
        <div class="founder__text">
          <p class="site-section__eyebrow">From our founder</p>
          <h2 class="site-section__caption">
            {{ content.founderSection.title }}
          </h2>
          <NuxtLink to="/about/team" class="btn btn--outline">
            Meet the team
            <ArrowUpRightIcon class="icon" />
          </NuxtLink>
        </div>
        <figure class="tile tile--outline founder__quote">
          <blockquote>
            <p>“{{ content.founderSection.quote }}”</p>
          </blockquote>
          <figcaption class="founder__who">
            <span class="founder__avatar">
              <NuxtImg
                :src="content.founderSection.image"
                :alt="content.founderSection.name"
                format="webp"
                width="96"
                height="96"
                loading="lazy"
              />
            </span>
            <span>
              <strong>{{ content.founderSection.name }}</strong>
              <span class="block text-sm text-slate-500">{{
                content.founderSection.role
              }}</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- PARTNERS + GALLERY -->
  <PartnersSection :section-data="content.partnersSection">
    <template #illustration>
      <div class="mt-16">
        <header class="site-section__header !mb-8">
          <h2 class="site-section__caption !text-3xl lg:!text-4xl">
            From our classrooms
          </h2>
        </header>
        <SiteSlideshow />
      </div>
    </template>
  </PartnersSection>

  <!-- CTA -->
  <CtaBand
    :title="content.ctaSection.title"
    :text="content.ctaSection.text"
    action-text="Donate Now"
    action-to="/donate"
  >
    <template #secondary>
      <NuxtLink to="/contact" class="btn btn--outline">
        Partner with us
        <HeartHandshakeIcon class="icon" />
      </NuxtLink>
    </template>
  </CtaBand>
</template>
<style scoped>
/* HERO */
.hero {
  @apply px-4 pb-10 pt-14 lg:pb-16 lg:pt-24;
}

.hero > .wrapper {
  @apply mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:gap-16;
}

.hero__text {
  @apply flex max-w-4xl flex-col items-center gap-5 text-center;
}

.hero__caption {
  @apply font-heading text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl lg:text-[3.6rem] lg:leading-[1.06];
  text-wrap: balance;
}

.hero__subtext {
  @apply max-w-2xl text-base text-slate-600 lg:text-lg;
}

.hero__announce {
  @apply max-w-full text-left;
}

.hero__announce-tag {
  @apply rounded-full bg-brand-600 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white;
}

/* BENTO */
.bento {
  @apply grid w-full gap-4 md:grid-cols-2 lg:grid-cols-4;
}

.bento__col {
  @apply relative flex flex-col gap-4;
}

.bento__spark {
  @apply absolute -left-2 -top-8 hidden h-8 w-8 text-slate-900 lg:block;
}

.bento__photo {
  @apply aspect-[4/3] w-full lg:aspect-square;
}

.bento__stat {
  @apply flex flex-1 flex-col justify-end gap-2;
}

.bento__pillar {
  @apply flex flex-1 flex-col gap-3;
}

.bento__volunteer {
  @apply flex flex-1 flex-col gap-3;
}

.bento__volunteer-photo {
  @apply aspect-[4/3] w-full overflow-hidden rounded-2xl;
}

.bento__volunteer-photo > img {
  @apply h-full w-full object-cover;
}

/* PILLARS */
.pillars {
  @apply grid gap-4 md:grid-cols-2 lg:grid-cols-3;
}

/* FOUNDER */
.founder {
  @apply grid items-center gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16;
}

.founder__text {
  @apply flex flex-col items-start gap-4;
}

.founder__text .site-section__caption {
  @apply lg:text-4xl;
}

.founder__quote {
  @apply flex flex-col gap-6 p-8 lg:p-10;
}

.founder__quote blockquote p {
  @apply font-heading text-xl font-medium leading-snug text-slate-900 lg:text-2xl;
}

.founder__who {
  @apply flex items-center gap-3 text-base text-slate-800;
}

.founder__avatar {
  @apply h-12 w-12 shrink-0 overflow-hidden rounded-full bg-brand-100;
}

.founder__avatar > img {
  @apply h-full w-full object-cover object-top;
}
</style>
