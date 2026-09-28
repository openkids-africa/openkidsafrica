<script setup lang="ts">
import {
  AwardIcon,
  BrainCircuitIcon,
  CompassIcon,
  ImageIcon,
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
        src: "/assets/images/photos/photo-24.jpg",
        alt: "A facilitator presenting to a class",
      },
    ],
  },
  partners: [
    {
      name: "Open Kids Africa",
      logo: "/android-chrome-512x512.png",
      heightClass: "h-12",
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
  <div class="page">
    <PageIntro
      :caption="content.heroSection.caption"
      :text="[content.heroSection.subtext]"
      :images="content.heroSection.images"
    >
      <template #eyebrow>Open Kids Africa × Tech She Can × Microsoft</template>
      <template #actions>
        <a :href="content.ctaSection.actionUrl" class="btn">
          Bring AI for All to your school
        </a>
      </template>
    </PageIntro>

    <section class="site-section site-section--tight">
      <div class="wrapper">
        <div class="tile tile--outline partner-bar js-reveal" v-reveal>
          <PartnerLockup :partners="content.partners" />
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="site-section">
      <div class="wrapper">
        <div class="split js-reveal" v-reveal.stagger>
          <header class="site-section__header site-section__header--left !mb-0">
            <p class="site-section__eyebrow">
              {{ content.aboutSection.eyebrow }}
            </p>
            <h2 class="site-section__caption">
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
          <h3 class="outcomes__title js-reveal" v-reveal>
            {{ content.aboutSection.outcomes.title }}
          </h3>
          <ul class="outcomes__list js-reveal" v-reveal.stagger>
            <li
              v-for="outcome in content.aboutSection.outcomes.items"
              :key="outcome.id"
            >
              <article class="tile tile--tint outcome">
                <span class="icon-badge !bg-white">
                  <BrainCircuitIcon
                    v-if="outcome.id === 'understanding'"
                    class="icon"
                  />
                  <SparklesIcon
                    v-else-if="outcome.id === 'using'"
                    class="icon"
                  />
                  <SearchCheckIcon
                    v-else-if="outcome.id === 'critical'"
                    class="icon"
                  />
                  <CompassIcon v-else class="icon" />
                </span>
                <h4 class="tile__title">{{ outcome.title }}</h4>
                <p class="tile__text">{{ outcome.text }}</p>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- GAIN -->
    <section class="site-section bg-slate-50 lg:rounded-[3rem]">
      <div class="wrapper">
        <div class="split js-reveal" v-reveal.stagger>
          <header class="site-section__header site-section__header--left !mb-0">
            <p class="site-section__eyebrow">
              {{ content.gainSection.eyebrow }}
            </p>
            <h2 class="site-section__caption">
              {{ content.gainSection.caption }}
            </h2>
            <p>{{ content.gainSection.text }}</p>
          </header>
          <ul class="checklist">
            <li
              v-for="item in content.gainSection.items"
              :key="item.id"
              class="checklist__item !bg-white"
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

    <!-- CTA -->
    <section class="site-section site-section--tight">
      <div class="wrapper">
        <div class="cta-band js-reveal" v-reveal>
          <div class="wrapper">
            <p class="site-section__eyebrow">
              {{ content.ctaSection.eyebrow }}
            </p>
            <h2 class="cta-band__title">{{ content.ctaSection.caption }}</h2>
            <p class="cta-band__text">{{ content.ctaSection.text }}</p>
            <div class="action-cont !justify-start">
              <a :href="content.ctaSection.actionUrl" class="btn">
                {{ content.ctaSection.actionText }}
              </a>
            </div>
            <p class="text-sm text-slate-600">
              Website:
              <strong class="text-slate-900">{{
                content.ctaSection.website
              }}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.partner-bar {
  @apply py-8;
}

.split {
  @apply flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16;
}

.split .site-section__caption {
  @apply lg:text-4xl;
}

.outcomes {
  @apply mt-16 flex flex-col gap-6;
}

.outcomes__title {
  @apply font-heading text-2xl font-semibold text-slate-900;
}

.outcomes__list {
  @apply grid gap-4 md:grid-cols-2;
}

.outcome {
  @apply flex h-full flex-col gap-3;
}
</style>
