<script setup lang="ts">
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  GraduationCapIcon,
  HeartHandshakeIcon,
  MegaphoneIcon,
  RecycleIcon,
  ScaleIcon,
  UsersIcon,
} from "lucide-vue-next";
import { gsap } from "gsap";
import home from "~/content/pages/home.json";
import about from "~/content/pages/about.json";
import team from "~/content/team.json";

/* No photograph appears twice on this page. The rotation inside the map
   also borrows group photographs from other pages. */
const photo = (
  file: string,
  alt: string,
  frame: { position?: string; zoom?: number } = {},
) => ({
  src: `/assets/images/photos/${file}`,
  alt,
  ...frame,
});

/* The copy of the hero, numbers, programs, founder, volunteer, FAQ and
   closing bands lives in content/pages/home.json; the values list and the
   team come from content/pages/about.json and content/team.json. */
const content = ref({
  heroSection: {
    eyebrow: home.hero.eyebrow,
    captionParts: [
      home.hero.headingBefore,
      home.hero.headingAccent,
      home.hero.headingAfter,
    ],
    map: home.hero.mapPhotos,
    bubbles: home.hero.bubbles,
    reached: home.hero.reached,
  },
  welcomeSection: {
    title: "Welcome to Openkids Africa",
    text: [
      home.hero.subtext,
      "Therefore, we leverage free digital resources and open educational resources to provide quality information technology lessons and materials for kids and schools in rural communities in Africa.",
    ],
    photos: [
      photo("photo-31.jpg", "A pupil standing to speak in class"),
      photo("photo-34.jpg", "A pupil listening during a lesson"),
      photo("photo-11.jpg", "Pupils gathered close during a school visit"),
    ],
  },
  /* Figures the About page already states, gathered for the numbers panel. */
  statsSection: home.stats,
  whatWeDoSection: {
    title: "What We Do",
    text: "OpenKids Africa is a non-profit organization collaborating with government, schools, and industry to provide free, quality information technology lessons and resources for children in rural African communities.",
    photo: photo(
      "photo-23.jpg",
      "A tech lesson projected at the front of a classroom",
    ),
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
  /* The lists below repeat copy from the About, Programs, Donate and
     Educators pages, where each has its full treatment. */
  valuesSection: about.values,
  programsSection: home.programs,
  gallerySection: {
    title: "From our classrooms",
    text: "Moments from our visits to rural schools.",
    rows: [
      [
        photo(
          "photo-1.jpg",
          "Children in yellow and blue uniforms raising their hands",
        ),
        photo(
          "photo-19.jpg",
          "Pupils in blue uniforms gathered on the school playground",
        ),
        photo(
          "photo-22.jpg",
          "Pupils and a volunteer holding up what they made",
        ),
        photo("photo-29.jpeg", "A class at their desks with hands raised"),
        photo("photo-3.jpg", "Pupils with their hands up to answer a question"),
        photo("photo-6.jpg", "A speaker addressing pupils at a school event"),
      ],
      [
        photo("photo-35.jpg", "A pupil presenting beside classroom artwork"),
        photo("photo-43.jpg", "Pupils and teachers at a school assembly"),
        photo("photo-46.jpg", "A pupil filling in a worksheet"),
        photo("photo-37.jpg", "A pupil standing to answer in class"),
        photo("photo-26.jpg", "A pupil trying a virtual reality headset"),
        photo("photo-2.jpeg", "A lesson slide projected for a class"),
      ],
    ],
  },
  founderSection: home.founder,
  teamSection: {
    avatars: team.members.map(({ name, image }) => ({ name, image })),
  },
  championsSection: home.volunteer,
  partnersSection: {
    title: "Our Partners",
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
  faqSection: home.faq,
  ctaSection: home.cta,
});

const pillarIcons: Record<string, unknown> = {
  leadership: UsersIcon,
  collaboration: HeartHandshakeIcon,
  awareness: MegaphoneIcon,
  equality: ScaleIcon,
  sustainability: RecycleIcon,
  education: GraduationCapIcon,
};

/* Hero copy enters as a sequence; the map animates itself. */
onMounted(() => {
  const copy = gsap.utils.toArray<HTMLElement>(".hero__text > .js-reveal");
  copy.forEach((el) => el.classList.add("is-armed"));
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  gsap.fromTo(
    copy,
    { autoAlpha: 0, y: 26 },
    { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.09, ease: "power3.out" },
  );
});

useHead({
  title: "Home",
});
</script>
<template>
  <div class="page">
    <!-- HERO: copy beside photographs cut to the outline of Africa -->
    <header class="hero">
      <div class="wrapper">
        <div class="hero__text">
          <p class="site-section__eyebrow js-reveal">
            {{ content.heroSection.eyebrow }}
          </p>
          <h1 class="hero__caption js-reveal">
            {{ content.heroSection.captionParts[0]
            }}<span class="hero__accent">{{
              content.heroSection.captionParts[1]
            }}</span
            >{{ content.heroSection.captionParts[2] }}
          </h1>
          <p class="hero__subtext js-reveal">
            {{ content.welcomeSection.text[0] }}
          </p>
          <div class="action-cont js-reveal !justify-start">
            <NuxtLink to="/donate" class="btn">Donate Now</NuxtLink>
            <NuxtLink to="/programs" class="btn btn--outline">
              Explore our programs
            </NuxtLink>
          </div>
          <div class="hero__proof js-reveal">
            <ul class="hero__faces">
              <li
                v-for="person in content.teamSection.avatars"
                :key="person.name"
              >
                <NuxtImg
                  :src="person.image"
                  :alt="person.name"
                  format="webp"
                  width="96"
                  height="96"
                  loading="lazy"
                />
              </li>
            </ul>
            <p>{{ content.heroSection.reached }}</p>
          </div>
        </div>

        <div class="hero__visual">
          <AfricaMap
            :photos="content.heroSection.map"
            :bubbles="content.heroSection.bubbles"
          >
            <NuxtLink
              to="/programs/ai-for-all"
              class="chip africa__chip africa__float hero__chip hero__chip--new"
            >
              <span class="hero__chip-tag">New</span>
              AI for All
              <ArrowRightIcon class="icon h-4 w-4" />
            </NuxtLink>
            <span
              class="chip africa__chip africa__float hero__chip hero__chip--free"
            >
              Free tech lessons in rural schools
            </span>
          </AfricaMap>
        </div>
      </div>
    </header>

    <!-- PARTNERS -->
    <section class="partners-strip js-reveal" v-reveal>
      <div class="wrapper">
        <p class="partners-strip__label">In partnership with</p>
        <ul class="partners-strip__list">
          <li
            v-for="partner in content.partnersSection.partners"
            :key="partner.name"
          >
            <NuxtImg :src="partner.logo" :alt="partner.name" />
          </li>
        </ul>
      </div>
    </section>

    <!-- NUMBERS -->
    <section class="site-section">
      <div class="wrapper">
        <header class="site-section__header js-reveal" v-reveal>
          <h2 class="site-section__caption">
            {{ content.statsSection.title }}
          </h2>
          <p>{{ content.welcomeSection.text[1] }}</p>
        </header>
        <StatsPanel :stats="content.statsSection.stats" />
      </div>
    </section>

    <!-- WHO WE ARE: a cluster of round photographs beside the copy -->
    <section class="site-section pt-0">
      <div class="wrapper">
        <div class="about js-reveal" v-reveal.stagger>
          <PhotoCluster :photos="content.welcomeSection.photos" />
          <div class="about__text">
            <p class="site-section__eyebrow">About us</p>
            <h2 class="split-feature__title">
              {{ content.welcomeSection.title }}
            </h2>
            <p>{{ content.whatWeDoSection.text }}</p>
            <ul class="about__values">
              <li v-for="(item, i) in content.valuesSection.items" :key="i">
                <span class="checklist__icon-cont"
                  ><CheckIcon class="icon"
                /></span>
                <span>{{ item }}</span>
              </li>
            </ul>
            <NuxtLink to="/about" class="btn">Learn more</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- WHAT WE DO: copy beside its photo, then the six pillars -->
    <section class="site-section bg-slate-50 lg:rounded-[3rem]">
      <div class="wrapper">
        <SplitFeature
          :src="content.whatWeDoSection.photo.src"
          :alt="content.whatWeDoSection.photo.alt"
          :title="content.whatWeDoSection.title"
          :text="content.welcomeSection.text[1]"
          eyebrow="How we work"
        />
        <ul class="pillars js-reveal" v-reveal.stagger>
          <li v-for="card in content.whatWeDoSection.cards" :key="card.id">
            <article class="pillar">
              <span class="icon-badge">
                <component :is="pillarIcons[card.id]" class="icon" />
              </span>
              <h3 class="tile__title">{{ card.title }}</h3>
              <p class="tile__text">{{ card.text }}</p>
            </article>
          </li>
        </ul>
      </div>
    </section>

    <!-- PROGRAMS: each with its own photograph -->
    <section class="site-section">
      <div class="wrapper">
        <header class="site-section__header js-reveal" v-reveal>
          <p class="site-section__eyebrow">Our programs</p>
          <h2 class="site-section__caption">
            {{ content.programsSection.title }}
          </h2>
          <p>{{ content.programsSection.text }}</p>
        </header>
        <ul class="programs js-reveal" v-reveal.stagger>
          <li
            v-for="program in content.programsSection.programs"
            :key="program.id"
          >
            <NuxtLink :to="program.path" class="program">
              <figure class="program__photo">
                <NuxtImg
                  :src="program.photo.src"
                  :alt="program.photo.alt"
                  format="webp"
                  sizes="sm:100vw md:50vw lg:33vw"
                  loading="lazy"
                />
                <span v-if="program.badge" class="program__badge">
                  {{ program.badge }}
                </span>
              </figure>
              <div class="program__body">
                <h3 class="tile__title">{{ program.title }}</h3>
                <p class="tile__text">{{ program.text }}</p>
                <span class="program__more">
                  Read more
                  <ArrowUpRightIcon class="icon h-4 w-4" />
                </span>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <!-- GALLERY: two rows drifting in opposite directions -->
    <section class="gallery">
      <header class="site-section__header js-reveal px-4" v-reveal>
        <h2 class="site-section__caption">
          {{ content.gallerySection.title }}
        </h2>
        <p>{{ content.gallerySection.text }}</p>
      </header>
      <PhotoMarquee :rows="content.gallerySection.rows" />
    </section>

    <!-- FOUNDER -->
    <section class="site-section">
      <div class="wrapper">
        <header class="site-section__header js-reveal" v-reveal>
          <h2 class="site-section__caption">
            {{ content.founderSection.title }}
          </h2>
        </header>
        <figure class="voice js-reveal" v-reveal>
          <ul class="voice__avatars">
            <li
              v-for="(person, i) in content.teamSection.avatars"
              :key="person.name"
              :class="{ 'is-active': i === 0 }"
            >
              <NuxtImg
                :src="person.image"
                :alt="person.name"
                format="webp"
                width="112"
                height="112"
                loading="lazy"
              />
            </li>
          </ul>
          <blockquote class="voice__quote">
            <p>“{{ content.founderSection.quote }}”</p>
          </blockquote>
          <figcaption class="voice__who">
            {{ content.founderSection.name }}, {{ content.founderSection.role }}
          </figcaption>
          <NuxtLink to="/about/team" class="btn btn--outline btn--sm">
            Meet the team
          </NuxtLink>
        </figure>
      </div>
    </section>

    <!-- VOLUNTEER: copy beside its photo, in a tinted band -->
    <section class="site-section pt-0">
      <div class="wrapper">
        <div class="volunteer js-reveal" v-reveal.stagger>
          <div class="volunteer__text">
            <p class="site-section__eyebrow">Become a volunteer</p>
            <h2 class="split-feature__title">
              {{ content.championsSection.title }}
            </h2>
            <p>{{ content.championsSection.text }}</p>
            <NuxtLink to="/about/team#champions" class="btn">
              Be an Education Champion
            </NuxtLink>
          </div>
          <PhotoTile
            class="volunteer__photo"
            :src="content.championsSection.photo.src"
            :alt="content.championsSection.photo.alt"
          />
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="site-section pt-0">
      <div class="wrapper">
        <header class="site-section__header js-reveal" v-reveal>
          <h2 class="site-section__caption">{{ content.faqSection.title }}</h2>
          <p>{{ content.faqSection.text }}</p>
        </header>
        <ul class="panel faq-list js-reveal" v-reveal.stagger>
          <li v-for="(faq, index) in content.faqSection.faqs" :key="index">
            <FAQItem :faq="faq" :index="index" />
          </li>
        </ul>
      </div>
    </section>

    <!-- CTA -->
    <CtaBand
      :title="content.ctaSection.title"
      :text="content.ctaSection.text"
      action-text="Donate Now"
      action-to="/donate"
    >
      <template #secondary>
        <NuxtLink to="/contact" class="btn btn--outline"
          >Partner with us</NuxtLink
        >
      </template>
    </CtaBand>
  </div>
</template>
<style scoped>
/* HERO */
.hero {
  @apply overflow-x-clip px-4 pb-12 pt-10 lg:pb-20 lg:pt-16;
}

.hero > .wrapper {
  @apply mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,11fr)_minmax(0,10fr)] lg:gap-10;
}

.hero__text {
  @apply flex flex-col items-start gap-5;
}

.hero__caption {
  @apply font-heading text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl lg:text-[3.35rem] lg:leading-[1.08];
  text-wrap: balance;
}

.hero__accent {
  @apply text-brand-600;
}

.hero__subtext {
  @apply max-w-xl text-base text-slate-600 lg:text-lg;
}

.hero__proof {
  @apply flex items-center gap-3 pt-2 text-sm font-medium text-slate-700;
}

.hero__faces {
  @apply flex;
}

.hero__faces > li {
  @apply -ml-3 h-11 w-11 overflow-hidden rounded-full border-2 border-white bg-brand-100 first:ml-0;
}

.hero__faces img {
  @apply h-full w-full object-cover object-top;
}

.hero__visual {
  @apply px-4 lg:px-0;
}

.hero__chip {
  @apply whitespace-nowrap;
}

.hero__chip--new {
  @apply right-[-2%] top-[6%] lg:right-[-4%];
}

.hero__chip--free {
  @apply bottom-[16%] left-[-4%] hidden sm:inline-flex;
}

.hero__chip-tag {
  @apply rounded-full bg-brand-600 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white;
}

/* PARTNERS */
.partners-strip {
  @apply px-4;
}

.partners-strip > .wrapper {
  @apply mx-auto flex max-w-6xl flex-col items-center gap-5 rounded-tile border border-slate-200 px-6 py-6 sm:flex-row sm:justify-center sm:gap-12;
}

.partners-strip__label {
  @apply font-heading text-xs font-semibold uppercase tracking-[0.16em] text-slate-500;
}

.partners-strip__list {
  @apply flex flex-wrap items-center justify-center gap-x-12 gap-y-4;
}

.partners-strip__list img {
  @apply h-10 w-auto object-contain;
}

/* ABOUT */
.about {
  @apply grid items-center gap-10 lg:grid-cols-2 lg:gap-16;
}

.about__text {
  @apply flex flex-col items-start gap-4 text-base text-slate-600 lg:text-lg;
}

.about__values {
  @apply flex flex-col gap-3 py-1;
}

.about__values > li {
  @apply flex items-start gap-3 text-base text-slate-700;
}

/* PILLARS */
.pillars {
  @apply mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3;
}

.pillar {
  @apply flex h-full flex-col gap-3 rounded-tile bg-white p-6 transition-transform duration-300 hover:-translate-y-1;
}

/* PROGRAMS */
.programs {
  @apply grid gap-5 md:grid-cols-2 lg:grid-cols-3;
}

.programs > li {
  @apply h-full;
}

.program {
  @apply flex h-full flex-col overflow-hidden rounded-tile border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover;
}

.program__photo {
  @apply relative aspect-[4/3] overflow-hidden bg-brand-100;
}

.program__photo > img {
  @apply h-full w-full object-cover transition-transform duration-700;
}

.program:hover .program__photo > img {
  @apply scale-105;
}

.program__badge {
  @apply absolute left-4 top-4 rounded-full bg-brand-600 px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wider text-white;
}

.program__body {
  @apply flex grow flex-col gap-2 p-6;
}

.program__more {
  @apply mt-auto flex items-center gap-1 pt-3 text-sm font-semibold text-brand-700;
}

/* GALLERY */
.gallery {
  @apply py-8 lg:py-12;
}

/* FOUNDER */
.voice {
  @apply relative flex flex-col items-center gap-6 overflow-hidden rounded-tile border border-brand-200 bg-white px-6 py-10 text-center lg:px-16 lg:py-14;
}

.voice::before,
.voice::after {
  content: "";
  @apply pointer-events-none absolute bottom-0 hidden h-40 w-48 opacity-70 lg:block;
  background-image: repeating-linear-gradient(
    -50deg,
    rgb(253 186 116 / 0.7) 0 5px,
    transparent 5px 18px
  );
  mask-image: repeating-linear-gradient(
    40deg,
    black 0 16px,
    transparent 16px 26px
  );
  -webkit-mask-image: repeating-linear-gradient(
    40deg,
    black 0 16px,
    transparent 16px 26px
  );
}

.voice::before {
  @apply -left-6;
  transform: scaleX(-1);
}

.voice::after {
  @apply -right-6;
}

.voice__avatars {
  @apply flex items-center gap-3;
}

.voice__avatars > li {
  @apply h-11 w-11 overflow-hidden rounded-full bg-brand-100 opacity-60 grayscale;
}

.voice__avatars > li.is-active {
  @apply h-14 w-14 opacity-100 ring-2 ring-brand-400 ring-offset-2 grayscale-0;
}

.voice__avatars img {
  @apply h-full w-full object-cover object-top;
}

.voice__quote {
  @apply relative z-10 max-w-3xl;
}

.voice__quote p {
  @apply font-heading text-xl font-medium leading-snug text-slate-900 lg:text-2xl;
}

.voice__who {
  @apply relative z-10 text-sm text-slate-600;
}

/* VOLUNTEER */
.volunteer {
  @apply grid items-center gap-8 overflow-hidden rounded-tile bg-brand-100 p-6 lg:grid-cols-2 lg:gap-12 lg:p-10;
}

.volunteer__text {
  @apply flex flex-col items-start gap-4 text-base text-slate-700 lg:text-lg;
}

.volunteer__photo {
  @apply aspect-[4/3] w-full;
}

.faq-list {
  @apply mx-auto flex max-w-4xl flex-col gap-3;
}
</style>
