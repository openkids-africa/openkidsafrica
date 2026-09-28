<script setup lang="ts">
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  SparklesIcon,
  GraduationCapIcon,
} from "lucide-vue-next";
import { gsap } from "gsap";

/* Hero entrance: copy first, then the bento columns in sequence. */
onMounted(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document
      .querySelectorAll(".hero .js-reveal")
      .forEach((el) => el.classList.add("is-armed"));
    return;
  }
  const copy = gsap.utils.toArray<HTMLElement>(".hero__text > .js-reveal");
  const cols = gsap.utils.toArray<HTMLElement>(".hero .bento__col");
  [...copy, ...cols].forEach((el) => el.classList.add("is-armed"));
  gsap
    .timeline({ defaults: { ease: "power3.out" } })
    .fromTo(
      copy,
      { autoAlpha: 0, y: 24 },
      { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.09 },
    )
    .fromTo(
      cols,
      { autoAlpha: 0, y: 34, scale: 0.98 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.9, stagger: 0.1 },
      "-=0.45",
    );
});

const content = ref({
  heroSection: {
    caption:
      "Connecting every African child to a digital future through the delivery of free tech lessons in rural schools",
    subtext: "Welcome to OpenKids Africa",
    images: [
      {
        src: "/assets/images/photos/photo-14.jpg",
        alt: "A pupil trying a virtual-reality headset during a tech lesson",
      },
      {
        src: "/assets/images/photos/photo-40.jpeg",
        alt: "A volunteer leading a hall of pupils with their arms raised",
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
    photos: {
      values: {
        src: "/assets/images/photos/photo-18.jpg",
        alt: "Pupils in blue uniforms cheering outside their school",
      },
      objectives: {
        src: "/assets/images/photos/photo-7.jpg",
        alt: "Pupils holding up their certificates after a session",
      },
      whatWeDo: {
        src: "/assets/images/photos/photo-23.jpg",
        alt: "A tech lesson projected at the front of a classroom",
      },
      programs: {
        src: "/assets/images/photos/photo-30.jpg",
        alt: "A full classroom of pupils during a lesson",
      },
    },
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
  /* The lists below repeat copy from the About, Kids, Programs, Donate and
     Educators pages, where each has its full treatment. */
  valuesSection: {
    title: "Our Values",
    items: [
      "We are champions of change; we believe every African child in underserved communities deserves equal access to information technology resources and skills.",
      "We recognize the importance of children having equal access to technology skills and resources.",
      "We believe that through tech lessons, children gain access to resources and skills that nurture both present and future innovation and creativity.",
      "We believe that parents and guardians have a role to play in inspiring children to learn digital skills and possibly explore a technology career in the future.",
    ],
  },
  objectivesSection: {
    title: "Our Objectives",
    items: [
      {
        title: "Empowering Underserved Communities in Africa",
        text: "We collaborate with organizations to provide tech lessons to schools in rural communities, fostering education and innovation.",
      },
      {
        title: "Advocate",
        text: "Advocate for the utilization of free digital resources and open educational technologies in rural schools across Africa",
      },
      {
        title: "Changing The Ratio",
        text: "Empowering women and girls to pursue careers in technology.",
      },
      {
        title: "Collaborate",
        text: "We collaborate directly with rural schools in educating, creating, and delivering our tech lessons to communities in rural areas.",
      },
    ],
  },
  programsSection: {
    title: "Programs",
    text: "We offer a variety of programs to help children in underserved and underdeveloped communities in Africa.",
    programs: [
      {
        id: "ai-for-all",
        title: "AI for All",
        text: "Internationally accredited AI training for Nigerian teachers, delivered with Tech She Can and Microsoft. Free, CPD-certified, and built for every subject.",
        path: "/programs/ai-for-all",
      },
      {
        id: "educators",
        title: "Educators Program",
        text: "We provide free tech lessons to educators in Africa to help them teach their students better.",
        path: "/programs/educators",
      },
      {
        id: "kids",
        title: "Kids Program",
        text: "We provide free tech lessons to kids in Africa to help them learn better.",
        path: "/programs/kids",
      },
    ],
  },
  teamSection: {
    avatars: [
      {
        name: "Regina Nkenchor",
        image: "/assets/images/team/Regina Nkemchor.png",
      },
      {
        name: "Adebola Temitayo Ogunyemi",
        image: "/assets/images/team/Adebola Ogunyemi.png",
      },
      { name: "Anita Ihuman", image: "/assets/images/team/Anita Ihuman.png" },
    ],
  },
  faqSection: {
    title: "Frequently Asked Questions",
    text: "Questions About Donating",
    faqs: [
      {
        topic: "How do I donate?",
        content:
          "You can donate to us through our website by clicking the 'Donate' button on the top right corner of the page. Additionally, we offer the option to donate via PayPal for added convenience.",
      },
      {
        topic: "Can I donate via check?",
        content:
          "Absolutely! If you prefer to donate via check, please reach out to us at openkidsafrica@gmail.com, and we will promptly provide you with the required details. Your commitment to empowering young minds in Africa is making a significant difference. Thank you for being a crucial part of our mission!",
      },
      {
        topic:
          "I am an aspiring educator but have not taught in school, can I apply?",
        content:
          "Yes, aspiring educators are encouraged to apply and gain experience through our program.",
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
  <div class="page">
    <!-- HERO -->
    <header class="hero">
      <div class="wrapper">
        <div class="hero__text">
          <p class="site-section__eyebrow js-reveal">
            {{ content.heroSection.subtext }}
          </p>
          <h1 class="hero__caption js-reveal">
            {{ content.heroSection.caption }}
          </h1>
          <p class="hero__subtext js-reveal">
            {{ content.welcomeSection.text[0] }}
          </p>
          <div class="action-cont js-reveal">
            <NuxtLink to="/donate" class="btn">Donate Now</NuxtLink>
            <NuxtLink to="/programs/ai-for-all" class="chip hero__announce">
              <span class="hero__announce-tag">New</span>
              AI for All — teacher training with Tech She Can × Microsoft
              <ArrowRightIcon class="icon h-4 w-4" />
            </NuxtLink>
          </div>
        </div>

        <!-- Bento: photo · facts · pillar · volunteer -->
        <div class="bento">
          <div class="bento__col js-reveal">
            <SparklesIcon class="bento__spark" aria-hidden="true" />
            <PhotoTile
              class="bento__photo"
              :src="content.heroSection.images[0].src"
              :alt="content.heroSection.images[0].alt"
              sizes="sm:100vw md:50vw lg:25vw"
              eager
            />
            <span class="chip">
              <span class="chip__icon"><SparklesIcon class="icon" /></span>
              Free tech lessons in rural schools
            </span>
          </div>

          <div class="bento__col js-reveal">
            <span class="chip">Over 1,000 children reached so far</span>
            <div class="tile tile--tint bento__stat">
              <p class="tile__stat">
                {{ content.statsSection.stats[0].value }}
              </p>
              <p class="tile__text">
                {{ content.statsSection.stats[0].label }}
              </p>
            </div>
          </div>

          <div class="bento__col js-reveal">
            <div class="tile tile--tint bento__pillar">
              <span class="icon-badge !bg-white"
                ><GraduationCapIcon class="icon"
              /></span>
              <h2 class="tile__title">
                {{ content.whatWeDoSection.cards[5].title }}
              </h2>
              <p class="tile__text">
                {{ content.whatWeDoSection.cards[5].text }}
              </p>
            </div>
            <NuxtLink to="/programs" class="btn btn--outline w-full"
              >See our programs</NuxtLink
            >
          </div>

          <div class="bento__col js-reveal">
            <NuxtLink
              to="/about/team#champions"
              class="btn btn--outline w-full"
            >
              Be an Education Champion
            </NuxtLink>
            <div class="tile tile--tint bento__volunteer">
              <PhotoTile
                class="bento__volunteer-photo !rounded-2xl"
                :src="content.heroSection.images[1].src"
                :alt="content.heroSection.images[1].alt"
                sizes="sm:100vw md:50vw lg:25vw"
              />
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
        <header class="site-section__header js-reveal" v-reveal>
          <h2 class="site-section__caption">
            {{ content.statsSection.title }}
          </h2>
          <p>{{ content.welcomeSection.text[1] }}</p>
        </header>
        <StatsPanel :stats="content.statsSection.stats" />
      </div>
    </section>

    <!-- WHO WE ARE: photo beside a numbered panel, then mirrored -->
    <section class="site-section pt-0">
      <div class="wrapper">
        <header class="site-section__header js-reveal" v-reveal>
          <h2 class="site-section__caption">
            {{ content.welcomeSection.title }}
          </h2>
          <p>{{ content.whatWeDoSection.text }}</p>
        </header>
        <div class="flex flex-col gap-4">
          <div class="zigzag js-reveal" v-reveal.stagger>
            <PhotoTile
              class="zigzag__photo"
              :src="content.whatWeDoSection.photos.values.src"
              :alt="content.whatWeDoSection.photos.values.alt"
              dashes
            />
            <NumberedPanel
              :title="content.valuesSection.title"
              :items="content.valuesSection.items"
              link-to="/about"
            />
          </div>
          <div class="zigzag zigzag--flip js-reveal" v-reveal.stagger>
            <PhotoTile
              class="zigzag__photo"
              :src="content.whatWeDoSection.photos.objectives.src"
              :alt="content.whatWeDoSection.photos.objectives.alt"
              dashes
            />
            <NumberedPanel
              :title="content.objectivesSection.title"
              :items="content.objectivesSection.items"
              link-to="/programs/kids"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- WHAT WE DO: copy beside its photo, then six arrow cards -->
    <section class="site-section pt-0">
      <div class="wrapper">
        <SplitFeature
          :src="content.whatWeDoSection.photos.whatWeDo.src"
          :alt="content.whatWeDoSection.photos.whatWeDo.alt"
          :title="content.whatWeDoSection.title"
          :text="content.welcomeSection.text[0]"
        >
          <ul class="card-row">
            <li v-for="card in content.whatWeDoSection.cards" :key="card.id">
              <DoingsCard :card-content="card" />
            </li>
          </ul>
        </SplitFeature>
      </div>
    </section>

    <!-- PROGRAMS: photo beside its copy, then three linked cards -->
    <section class="site-section pt-0">
      <div class="wrapper">
        <SplitFeature
          :src="content.whatWeDoSection.photos.programs.src"
          :alt="content.whatWeDoSection.photos.programs.alt"
          :title="content.programsSection.title"
          :text="content.programsSection.text"
          flip
        >
          <template #actions>
            <NuxtLink to="/programs" class="btn btn--outline"
              >All programs</NuxtLink
            >
          </template>
          <ul class="card-row">
            <li
              v-for="program in content.programsSection.programs"
              :key="program.id"
            >
              <NuxtLink :to="program.path" class="mini-card">
                <span class="mini-card__head">
                  <span class="mini-card__title">{{ program.title }}</span>
                  <span class="mini-card__arrow" aria-hidden="true">
                    <ArrowUpRightIcon class="icon" />
                  </span>
                </span>
                <span class="mini-card__text">{{ program.text }}</span>
              </NuxtLink>
            </li>
          </ul>
        </SplitFeature>
      </div>
    </section>

    <!-- FOUNDER -->
    <section class="site-section pt-0">
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
            — {{ content.founderSection.name }},
            {{ content.founderSection.role }}
          </figcaption>
          <NuxtLink to="/about/team" class="btn btn--outline btn--sm"
            >Meet the team</NuxtLink
          >
        </figure>
      </div>
    </section>

    <!-- PARTNERS + GALLERY -->
    <PartnersSection :section-data="content.partnersSection">
      <template #illustration>
        <div class="js-reveal mt-16" v-reveal>
          <header class="site-section__header !mb-8">
            <h2 class="site-section__caption !text-3xl lg:!text-4xl">
              From our classrooms
            </h2>
          </header>
          <SiteSlideshow />
        </div>
      </template>
    </PartnersSection>

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
  @apply grid w-full gap-4 md:grid-cols-2 lg:grid-cols-4 lg:items-end;
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
  @apply flex flex-col gap-2 lg:pt-16;
}

.bento__pillar,
.bento__volunteer {
  @apply flex flex-col gap-3;
}

.bento__volunteer-photo {
  @apply aspect-[4/3] w-full;
}

/* FOUNDER — the reference's testimonial panel, with the team as its row
   of faces. */
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

.faq-list {
  @apply mx-auto flex max-w-4xl flex-col gap-3;
}
</style>
