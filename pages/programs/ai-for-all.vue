<script setup lang="ts">
import {
  AwardIcon,
  BrainCircuitIcon,
  CompassIcon,
  ImageIcon,
  MailIcon,
  MessageSquareIcon,
  RouteIcon,
  SearchCheckIcon,
  SparklesIcon,
} from "lucide-vue-next";

const SITE_URL = "https://www.openkidsafrica.org";
const PAGE_PATH = "/programs/ai-for-all";
const CONTACT_EMAIL = "info@openkidsafrica.org";

const pageTitle =
  "AI for All — Open Kids Africa × Tech She Can × Microsoft | Free AI training for Teacher CPD";
const pageDescription =
  "A free, internationally accredited AI training program for Nigerian teachers, delivered by Open Kids Africa in partnership with Tech She Can and Microsoft. Join the 2026 pilot across Nigeria.";

const content = ref({
  heroSection: {
    caption: "AI for All — Empowering Nigerian Teachers",
    subtext:
      "Open Kids Africa, in partnership with Tech She Can and Microsoft is bringing an internationally accredited AI training program to teachers across Nigeria, helping educators confidently understand, use, and teach AI concepts in their classrooms and beyond.",
    images: [
      {
        src: "/assets/images/photos/photo-1.jpeg",
        alt: "An educator working through a lesson with her students",
      },
      {
        src: "/assets/images/photos/photo-24.jpg",
        alt: "Students at a shared computer during a technology session",
      },
      {
        type: "block",
        color: "orange",
      },
      {
        src: "/assets/images/photos/photo-8.jpg",
        alt: "A classroom technology session in progress",
      },
      {
        src: "/assets/images/photos/photo-16.jpg",
        alt: "A mentor teaching a group of pupils",
      },
      {
        type: "block",
        color: "purple",
      },
    ],
  },
  partners: [
    {
      name: "Open Kids Africa",
      logo: "/android-chrome-512x512.png",
      heightClass: "h-9",
      wordmark: "Open Kids Africa",
    },
    {
      name: "Tech She Can",
      logo: "/assets/images/partners/tech-she-can-logo.svg",
      heightClass: "h-11",
    },
    {
      name: "Microsoft",
      logo: "/assets/images/partners/microsoft-logo.svg",
      heightClass: "h-7",
    },
  ],
  aboutSection: {
    eyebrow: "About the program",
    caption: "Practical AI knowledge, built for every educator",
    text: [
      '"AI for All" is a co-branded Continuing Professional Development (CPD) training designed to be accessible to every teacher, regardless of subject or role. This session is developed by Tech She Can in partnership with Microsoft and delivered through Open Kids Africa. This program equips Nigerian educators with the foundational knowledge, language, and confidence to engage meaningfully with AI, both in their own professional lives and in their classrooms.',
      "The curriculum has been formally reviewed and approved by Microsoft and adapted with a Nigeria-specific context, including locally relevant data, regional statistics, and accreditation pathways recognized within Nigeria.",
    ],
    outcomes: {
      title: "Learning Outcomes",
      items: [
        {
          id: "understanding",
          title: "Understanding AI",
          text: "Teachers gain a clear, practical foundation on AI — no tech background required.",
        },
        {
          id: "using",
          title: "Using AI at work",
          text: "Prompting, lesson planning, and reducing everyday teaching load.",
        },
        {
          id: "critical",
          title: "Critical thinking",
          text: "Fact-checking, recognizing bias, and responsible use of AI outputs.",
        },
        {
          id: "future",
          title: "Future impact",
          text: "How AI is shaping the jobs and opportunities students will encounter.",
        },
      ],
    },
  },
  gainSection: {
    eyebrow: "What teachers gain",
    caption: "Practical resources to take back to the classroom",
    text: "Every participating teacher walks away with a toolkit designed for immediate use:",
    items: [
      {
        id: "prompts",
        text: "A large resource of AI prompts for use across all subjects",
      },
      {
        id: "posters",
        text: "Classroom posters featuring AI and technology careers",
      },
      {
        id: "pathways",
        text: "Links to further CPD resources, including Microsoft learning pathways",
      },
      {
        id: "certificate",
        text: "A verified certificate of completion, recognized by the UK CPD Group",
      },
    ],
  },
  ctaSection: {
    eyebrow: "Get involved",
    caption: "Bring AI for All to your school",
    text: "Whether you are a school leader, education partner, or donor, we would love to hear from you. Get in touch to find out how your school can join the 2026 pilot.",
    actionText: `Reach out to us: ${CONTACT_EMAIL}`,
    actionUrl: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "AI for All — school enquiry",
    )}`,
    website: "www.openkidsafrica.org",
  },
});

useHead({
  /* The supplied title is already fully formed, so it opts out of the
     site-wide "| OpenKids Africa" suffix. */
  titleTemplate: "%s",
  title: pageTitle,
  meta: [
    { name: "description", content: pageDescription, key: "description" },
    {
      name: "keywords",
      content:
        "AI for teachers Nigeria, teacher CPD Africa, free AI training Nigeria, Open Kids Africa, Microsoft partnership education, Tech She Can, AI education Lagos, CPD certification",
    },
    { key: "og-title", property: "og:title", content: pageTitle },
    {
      key: "og-description",
      property: "og:description",
      content: pageDescription,
    },
    { key: "og-url", property: "og:url", content: `${SITE_URL}${PAGE_PATH}` },
    {
      key: "og-image",
      property: "og:image",
      content: `${SITE_URL}/assets/images/photos/photo-1.jpeg`,
    },
    { key: "twitter-title", name: "twitter:title", content: pageTitle },
    {
      key: "twitter-description",
      name: "twitter:description",
      content: pageDescription,
    },
    {
      key: "twitter-image",
      name: "twitter:image",
      content: `${SITE_URL}/assets/images/photos/photo-1.jpeg`,
    },
  ],
  link: [{ rel: "canonical", href: `${SITE_URL}${PAGE_PATH}` }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOccupationalProgram",
        name: "AI for All",
        description: pageDescription,
        url: `${SITE_URL}${PAGE_PATH}`,
        programType: "Continuing Professional Development",
        occupationalCategory: "Teachers",
        provider: {
          "@type": "NGO",
          name: "Open Kids Africa",
          url: `${SITE_URL}/`,
          email: CONTACT_EMAIL,
        },
        audience: {
          "@type": "EducationalAudience",
          educationalRole: "teacher",
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "NGN",
          category: "Free",
        },
        areaServed: { "@type": "Country", name: "Nigeria" },
      }),
    },
  ],
});
</script>
<template>
  <header class="page-header site-section ai-header">
    <div class="wrapper !max-w-[90rem]">
      <div class="page-header__text-cont 2xl:!ml-40">
        <h1 class="page-header__caption text-balance">
          {{ content.heroSection.caption }}
        </h1>
        <p class="page-header__subtext measure">
          {{ content.heroSection.subtext }}
        </p>
        <div class="action-cont !justify-start pt-2">
          <a :href="content.ctaSection.actionUrl" class="btn">
            <MailIcon class="icon" />
            <span class="text">Bring AI for All to your school</span>
          </a>
        </div>
      </div>
      <div class="page-header__media-cont img-cont">
        <SiteHeroImagesGrid
          class="images-grid"
          :images="content.heroSection.images || []"
        />
      </div>
    </div>
  </header>

  <section class="site-section partner-bar">
    <div class="wrapper">
      <PartnerLockup :partners="content.partners" />
    </div>
  </section>

  <section class="site-section about-section">
    <div class="wrapper">
      <div class="split">
        <header class="site-section__header site-section__header--left !mb-0">
          <p class="site-section__eyebrow">
            {{ content.aboutSection.eyebrow }}
          </p>
          <h2 class="site-section__caption text-balance">
            {{ content.aboutSection.caption }}
          </h2>
        </header>
        <div class="site-section__text-cont">
          <p v-for="(text, i) in content.aboutSection.text" :key="i">
            {{ text }}
          </p>
        </div>
      </div>

      <div class="outcomes">
        <h3 class="outcomes__title">
          {{ content.aboutSection.outcomes.title }}
        </h3>
        <ul class="outcomes__list">
          <li
            v-for="outcome in content.aboutSection.outcomes.items"
            :key="outcome.id"
          >
            <article class="card">
              <div class="icon-badge">
                <BrainCircuitIcon
                  v-if="outcome.id === 'understanding'"
                  class="icon"
                />
                <SparklesIcon v-else-if="outcome.id === 'using'" class="icon" />
                <SearchCheckIcon
                  v-else-if="outcome.id === 'critical'"
                  class="icon"
                />
                <CompassIcon v-else class="icon" />
              </div>
              <h4 class="card__title">{{ outcome.title }}</h4>
              <p class="card__text">{{ outcome.text }}</p>
            </article>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section class="site-section gain-section bg-slate-50">
    <div class="wrapper">
      <div class="split">
        <header class="site-section__header site-section__header--left !mb-0">
          <p class="site-section__eyebrow">{{ content.gainSection.eyebrow }}</p>
          <h2 class="site-section__caption text-balance">
            {{ content.gainSection.caption }}
          </h2>
          <p>{{ content.gainSection.text }}</p>
        </header>
        <ul class="checklist gain-section__list">
          <li
            v-for="item in content.gainSection.items"
            :key="item.id"
            class="checklist__item"
          >
            <span class="checklist__icon-cont">
              <MessageSquareIcon v-if="item.id === 'prompts'" class="icon" />
              <ImageIcon v-else-if="item.id === 'posters'" class="icon" />
              <RouteIcon v-else-if="item.id === 'pathways'" class="icon" />
              <AwardIcon v-else class="icon" />
            </span>
            <p>{{ item.text }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section class="site-section cta-section">
    <div class="wrapper">
      <header class="site-section__header">
        <p class="site-section__eyebrow">{{ content.ctaSection.eyebrow }}</p>
        <h2 class="site-section__caption text-balance">
          {{ content.ctaSection.caption }}
        </h2>
        <p class="measure mx-auto">{{ content.ctaSection.text }}</p>
      </header>
      <div class="cta-section__actions">
        <a :href="content.ctaSection.actionUrl" class="btn">
          <MailIcon class="icon" />
          <span class="text">{{ content.ctaSection.actionText }}</span>
        </a>
        <p class="cta-section__site">
          Website: <span>{{ content.ctaSection.website }}</span>
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped>
.ai-header .page-header__text-cont {
  @apply lg:max-w-xl xl:ml-16;
}

.ai-header .page-header__text-cont,
.ai-header .images-grid {
  @apply lg:flex-1;
}

/* SPLIT — section header beside its body copy on desktop */
.split {
  @apply flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,23rem)_minmax(0,1fr)] lg:gap-14;
}

/* A heading in a column this narrow wants a step down from the
   full-width section size. */
.split .site-section__caption {
  @apply lg:text-4xl;
}
/* END SPLIT */

/* PARTNER BAR */
.partner-bar {
  @apply border-y border-slate-200 bg-white !py-8;
}
/* END PARTNER BAR */

/* OUTCOMES */
.outcomes {
  @apply mt-16 flex flex-col gap-6;
}

.outcomes__title {
  @apply font-heading text-2xl font-bold text-slate-900;
}

.outcomes__list {
  @apply grid gap-4 md:grid-cols-2;
}
/* END OUTCOMES */

/* GAIN */
.gain-section__list {
  @apply w-full;
}
/* END GAIN */

/* CTA */
.cta-section {
  @apply bg-brand-50;
}

.cta-section__actions {
  @apply mt-8 flex flex-col items-center gap-4;
}

.cta-section__site {
  @apply text-base text-slate-600;
}

.cta-section__site > span {
  @apply font-semibold text-slate-800;
}
/* END CTA */
</style>
