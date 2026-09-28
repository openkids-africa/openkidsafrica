<script setup lang="ts">
import {
  ArrowUpRightIcon,
  BanknoteIcon,
  GraduationCapIcon,
  HelpingHandIcon,
} from "lucide-vue-next";
const programsContent = ref({
  cohortClosed: {
    title: "Applications for this cohort are closed",
    text: "The mentorship round described on this page ran in 2024. A date for the next round has not been announced yet.",
    linkText: "See AI for All, our current teacher training",
    linkUrl: "/programs/ai-for-all",
  },
  heroSection: {
    caption: "OpenKids Africa Educator Program",
    subtext:
      "Join the OpenKids Africa Educator Program and become a catalyst for change in primary and secondary education!",
    images: [
      {
        src: "/assets/images/photos/photo-16.jpg",
        alt: "A volunteer teaching at the front of a classroom",
      },
    ],
  },
  actionsSection: {
    text: [
      "We are thrilled to invite passionate and dedicated educators to apply for this unique opportunity to promote a comprehensive awareness of technology in primary schools.",
    ],
    actions: [
      {
        id: "register",
        text: "Register as an Educator",
        link: "https://forms.gle/hatWEecV94sZ3vgj6",
      },
      {
        id: "volunteer",
        text: "Volunteer as a mentor",
        link: "https://forms.gle/VmLq1F1Vijwzc8bn6",
      },
      {
        id: "sponsor",
        text: "Sponsor this program",
        link: "https://forms.gle/R6Q7HJbYmFbp4QZM8",
      },
    ],
  },
  howItWorksSection: {
    caption: "How The Program Works",
    text: [
      "The OpenKids Africa Educator Program is a transformative initiative that aims to attract, educate and empower educators across other countries in Africa on technology.",
      "Through comprehensive digital exposure and awareness, we strive to bridge the knowledge gap and equip educators with the tools and expertise they need to prepare students for the digital age",
    ],
  },
  whyParticipateSection: {
    caption: "Why Participate In the OpenKids Africa Educator Program?",
    details: [
      {
        title: "Comprehensive Training",
        text: "Gain valuable skills in integrating technology into your curriculum, encompassing aspects like digital literacy, introduction to technology, and online learning platforms.",
      },
      {
        title: "Expert Mentorship",
        text: "Receive personalized guidance and support from experts in technology and how it works in various fields, who will help you navigate your digital learning journey.",
      },
      {
        title: "Collaborative Community",
        text: "Connect with a network of passionate educators, share best practices, and foster a vibrant learning environment via Slack.",
      },
      {
        title: "Career Advancement",
        text: "Equip yourself with the skills and knowledge to stand out in the evolving educational space.",
      },
    ],
  },
  programDetails: {
    title: "Program Overview",
    sections: [
      {
        title: "How It Works",
        text: "The OpenKids Africa Educator Program aims to educate and empower educators with the tools and expertise needed to prepare students for the digital age. Participants will receive comprehensive training, expert mentorship, and support within a collaborative community.",
      },
      {
        title: "Why Participate?",
        text: [
          "Gain essential skills in technology integration for your curriculum.",
          "Receive mentorship from technology experts.",
          "Join a community of like-minded educators and enhance your career prospects.",
        ],
      },
    ],
  },
  whoCanApplySection: {
    title: "Who Can Apply?",
    criteria: [
      {
        role: "Mentees",
        requirements: [
          "Secondary and primary school teachers across Africa who are eager to integrate technology into their classrooms and empower their students",
        ],
      },
      {
        role: "Mentors",
        requirements: [
          "Experienced individuals with a strong background in technology integration and a passion for supporting quality education in Africa.",
        ],
      },
    ],
  },
  applicationDetails: {
    title: "About this program",
    steps: [
      {
        step: "Step 1: Apply",
        description:
          "Our online application is in two separate tracks: Mentor and Mentee. In your application, we'll ask you what you want out of the program, your skills and interests, and your availability.",
      },
      {
        step: "Step 2: Match",
        description:
          "Based on information that you provide in your application, our team will try to find you a mentor/mentee match based on what you want out of the program, your skills and interests, and your availability. \n You'll be paired with a dedicated mentor, who will provide guidance and support throughout your program journey.",
      },
      {
        step: "Step 3: Launch",
        description:
          "Once the project resumes, learning will go on for a duration of six weeks. During that period, we'll use our (optional) Slack group to provide interactive support along the way, and a mix of Slack and email to contact you. \n You will be added to the mentor or mentee channel so that you can meet and support one another.",
      },
    ],
  },
  eligibility: {
    title: "Eligibility Criteria",
    criteria: [
      {
        role: "As a mentee",
        requirements: [
          "Be proficient in written and spoken English.",
          "Be elementary school teachers and leaders passionate about integrating technology into their classrooms.",
          "Have a demonstrated track record of teaching or tutoring kids or teenagers",
          "Preferably, we are targeting candidates from schools in rural areas across Africa",
          "Access to a Smartphone or laptop device to participate",
          "Demonstrate a willingness to participate in the educator program",
          "This is a self-paced learning program that requires the availability of 10 hours a month for eight weeks. ",
        ],
      },
      {
        role: "As a mentor",
        requirements: [
          "Be proficient in written and spoken English.",
          "Possess skills and experiences with a strong background in technology ",
          "Be familiar with emerging technologies and their potential application in education.",
          "Be passionate about educating others on technological concepts through discussions and one-on-one sessions. ",
          "Possess excellent interpersonal skills and be able to work well with people from diverse backgrounds, cultures, and personality types.",
          "Be able to listen, communicate, and teach with empathy; we ask that you make an effort to understand your mentee's perspective and position",
          "Have the ability to foster a growth mindset in mentees and encourage them to experiment with new technologies.",
          "Able to devote 2 hours weekly of their time to personalized one-on-one learning.",
        ],
      },
    ],
  },
  benefits: {
    title: "Program Benefits",
    items: [
      `<span>Participants will acquire digital literacy skills related to technology</span>`,
      `<span>Participants will learn foundational tech skills.</span>`,
      `<span>Participants will gain open-source training on Git & GitHub </span>`,
      `<span>Participants will develop the skills to educate children in the non-coding aspects of technology.</span>`,
      `<span>Be recognized as an OpenKids Africa  Ambassador.
  </span>`,
      `<span>Ambassadors will receive training resources to help them educate students.</span>`,
      `<span>Receive a certification for the experience.</span>`,
    ],
  },
  programTimeline: {
    title: "2024 Program Timeline",
    events: [
      {
        date: "June 15 - July 7, 2024",
        description: "Application Period",
        activities: [
          `Applicants will fill out our 
            <a href="https://forms.gle/hatWEecV94sZ3vgj6" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">
            application form 
            </a>
            `,
        ],
      },
      {
        date: "July 12 - 14, 2024",
        description: "Accepted applicants are notified",
        activities: [
          `Accepted applicants will be notified after the final decision, and we'll introduce their mentor/mentee for the duration of the program.`,
          `Otherwise, we'll let you know that we were unable to match you this year.`,
        ],
      },
      {
        date: "July 20th -  August 24th, 2024",
        description: "Mentorship Period",
        activities: [
          `Invitation to the general program onboarding `,
          `Continuous learning based on mentor/mentee schedule`,
          `Weekly progress report`,
        ],
      },
      {
        date: "August 7, 2024",
        description: "Graduation",
        activities: [
          `Successful participants will be selected as OpenKids Tech Ambassadors`,
          `Participants are to submit the final project, an evaluation report, and fill out the feedback form`,
        ],
      },
    ],
  },
  selection: {
    title: "Selection Process",
    text: [
      "A committee will review all applications and select participants based on their qualifications, experience, and commitment to the program's goals. Shortlisted candidates may be contacted for an interview.",
    ],
    deadline: "Applications for the 2024 cohort closed on 7 July 2024.",
  },
  joinSection: {
    title: "Join Us",
    text: [
      "The OpenKids Africa Educators program empowers teachers with the necessary skills to adapt to the changing digital economy, making a positive impact on the lives of future leaders.",
    ],
    actionLink: {
      text: "Support Us",
      url: "/donate",
    },
  },
  FAQ: {
    title: "Frequently Asked Questions",
    questions: [
      {
        topic: "Can I sponsor this program?",
        content: `OpenKids Africa has pledged to support our mentees and mentors with all the resources needed to make this learning experience informative and with their time. As a non-profit organization, we rely on individual and company donations to fund programs like this Educators Program. With your sponsorship, we can offer program participants resources like e-learning courses, books, software, and swags to aid in their mentorship journey. \n If you represent a company or entity that is interested in supporting this initiative, apply on 
          <a href="https://www.openkidsafrica.org/contact" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">
          our partnership page</a>. We'd love to feature you as a sponsor on this page and elsewhere in our community!`,
      },
      {
        topic:
          "I am an aspiring educator but have not taught in school, can I apply?",
        content:
          "Yes, aspiring educators are encouraged to apply and gain experience through our program.",
      },
    ],
  },
  sponsorship: {
    title: "Sponsorship Program",
    text: "Thank you for your interest in sponsoring the OpenKids Africa Educators Program! We are deeply grateful for your consideration in supporting our mission to empower future generations.",
    sections: [
      {
        title: "Your Impact:",
        text: [
          "As a non-profit organization, we rely on the generosity of individuals and companies like yours to provide critical resources to educators participating in the program. By becoming a sponsor, you'll be directly contributing to:",
        ],
        items: [
          {
            title: "Enhanced learning experience:",
            text: [
              "Your contribution will help us furnish program participants with valuable resources like e-learning courses, books, and specialized software. These resources will equip them with the latest knowledge and tools to effectively mentor young minds.",
            ],
          },
          {
            title: "Increased accessibility:",
            text: [
              "With your support, we can offer these resources at a reduced cost or even completely free to educators who might not have access to them otherwise. This ensures that financial limitations do not hinder their growth and development as mentors.",
            ],
          },

          {
            title: "Elevated program impact:",
            text: [
              "By providing these resources, you'll be contributing to creating a more effective and impactful mentorship experience for the program participants. This, in turn, will empower the next generation of learners and leaders in Africa.",
            ],
          },
        ],
      },
      {
        title: "Benefits of Sponsorship",
        text: [
          "In addition to supporting a worthy cause, your sponsorship comes with several advantages, including:",
        ],
        items: [
          {
            title: "Brand recognition:",
            text: [
              "We will proudly feature your company logo on our website, program materials, and social media platforms, increasing your brand visibility and reputation within the education and community development sectors.",
            ],
          },

          {
            title: "Networking opportunities:",
            text: [
              "You'll gain access to a network of like-minded businesses and organizations committed to social responsibility and educational advancement.",
            ],
          },

          {
            title: "Positive impact storytelling:",
            text: [
              "We'll work with you to co-create content that showcases your company's commitment to supporting the education sector and empowering future generations in Africa.",
            ],
          },
        ],
      },
      {
        title: "Sponsorship Opportunities",
        text: [
          `OpenKids Africa offers various sponsorship opportunities tailored to your company's objectives and budget. To explore these options and find the best fit, please email us at 
          <a href="mailto:openkidsafrica@gmail.com" class="text-blue-500 underline">
          openkidsafrica@gmail.com
          </a>
          `,
          `We look forward to partnering with you in making a positive impact on the future of Africa!`,
        ],
      },
    ],
  },
});

useHead({
  title: "Educators Program",
  meta: [
    {
      name: "description",
      content: programsContent.value.heroSection.subtext,
      key: "description",
    },
    {
      key: "og-title",
      property: "og:title",
      content: "Educators Program",
    },
    {
      key: "og-description",
      property: "og:description",
      content: programsContent.value.heroSection.subtext,
    },
    {
      key: "twitter-title",
      name: "twitter:title",
      content: "Educators Program",
    },
    {
      key: "twitter-description",
      name: "twitter:description",
      content: programsContent.value.heroSection.subtext,
    },
  ],
});
</script>
<template>
  <div class="page">
    <PageIntro
      :caption="programsContent.heroSection.caption"
      :text="[programsContent.heroSection.subtext]"
      :images="programsContent.heroSection.images"
    >
      <template #eyebrow>Educators Program</template>
    </PageIntro>

    <!-- COHORT CLOSED -->
    <section class="site-section site-section--tight">
      <div class="wrapper">
        <aside class="tile tile--tint cohort-closed js-reveal" v-reveal>
          <div>
            <p class="tile__title">{{ programsContent.cohortClosed.title }}</p>
            <p class="tile__text">{{ programsContent.cohortClosed.text }}</p>
          </div>
          <NuxtLink
            :to="programsContent.cohortClosed.linkUrl"
            class="btn shrink-0"
          >
            {{ programsContent.cohortClosed.linkText }}
          </NuxtLink>
        </aside>
      </div>
    </section>

    <!-- TRACKS -->
    <section class="site-section">
      <div class="wrapper">
        <header class="site-section__header js-reveal" v-reveal>
          <p
            v-for="(text, index) in programsContent.actionsSection.text"
            :key="index"
          >
            {{ text }}
          </p>
        </header>
        <ul class="tracks js-reveal" v-reveal.stagger>
          <li
            v-for="action in programsContent.actionsSection.actions"
            :key="action.id"
          >
            <article class="tile tile--outline track">
              <span class="icon-badge">
                <GraduationCapIcon
                  v-if="action.id == 'register'"
                  class="icon"
                />
                <HelpingHandIcon
                  v-else-if="action.id == 'volunteer'"
                  class="icon"
                />
                <BanknoteIcon v-else-if="action.id == 'sponsor'" class="icon" />
              </span>
              <h2 class="tile__title">{{ action.text }}</h2>
              <span
                class="btn btn--sm mt-auto w-fit"
                aria-disabled="true"
                role="note"
              >
                Applications closed
              </span>
            </article>
          </li>
        </ul>
      </div>
    </section>

    <!-- HOW IT WORKS: photo beside a panel -->
    <section class="site-section pt-0">
      <div class="wrapper">
        <div class="zigzag js-reveal" v-reveal.stagger>
          <PhotoTile
            class="zigzag__photo"
            src="/assets/images/photos/photo-8.jpg"
            alt="An educator leading a lesson, seen from behind"
          />
          <div class="panel flex h-full flex-col">
            <div class="panel__head">
              <h2 class="panel__title">
                {{ programsContent.howItWorksSection.caption }}
              </h2>
            </div>
            <div class="panel__body grow">
              <p
                v-for="(text, index) in programsContent.howItWorksSection.text"
                :key="index"
              >
                {{ text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY PARTICIPATE -->
    <section class="site-section">
      <div class="wrapper">
        <header class="site-section__header js-reveal" v-reveal>
          <h2 class="site-section__caption">
            {{ programsContent.whyParticipateSection.caption }}
          </h2>
        </header>
        <ul class="grid-2 js-reveal" v-reveal.stagger>
          <li
            v-for="(detail, index) in programsContent.whyParticipateSection
              .details"
            :key="index"
          >
            <DoingsCard
              :card-content="{
                id: String(index),
                title: detail.title,
                text: detail.text,
              }"
            />
          </li>
        </ul>
      </div>
    </section>

    <!-- WHO CAN APPLY + ELIGIBILITY -->
    <section class="site-section bg-slate-50 lg:rounded-[3rem]">
      <div class="wrapper">
        <header class="site-section__header js-reveal" v-reveal>
          <h2 class="site-section__caption">
            {{ programsContent.whoCanApplySection.title }}
          </h2>
        </header>
        <ul class="grid-2 js-reveal" v-reveal.stagger>
          <li
            v-for="(criteria, role) in programsContent.whoCanApplySection
              .criteria"
            :key="role"
          >
            <article class="tile tile--outline h-full">
              <h3 class="tile__title mb-2">{{ criteria.role }}</h3>
              <p
                v-for="requirement in criteria.requirements"
                :key="requirement"
                class="tile__text"
              >
                {{ requirement }}
              </p>
            </article>
          </li>
        </ul>

        <header class="site-section__header js-reveal mt-16" v-reveal>
          <h2 class="site-section__caption">
            {{ programsContent.eligibility.title }}
          </h2>
        </header>
        <ul class="grid-2 js-reveal" v-reveal.stagger>
          <li
            v-for="(criteria, role) in programsContent.eligibility.criteria"
            :key="role"
          >
            <article class="tile tile--outline h-full">
              <h3 class="tile__title mb-3">{{ criteria.role }}</h3>
              <ol class="numbered">
                <li
                  v-for="requirement in criteria.requirements"
                  :key="requirement"
                >
                  {{ requirement }}
                </li>
              </ol>
            </article>
          </li>
        </ul>
      </div>
    </section>

    <!-- BENEFITS -->
    <section class="site-section">
      <div class="wrapper">
        <header class="site-section__header js-reveal" v-reveal>
          <h2 class="site-section__caption">
            {{ programsContent.benefits.title }}
          </h2>
        </header>
        <ul class="checklist js-reveal mx-auto max-w-3xl" v-reveal.stagger>
          <li
            v-for="benefit in programsContent.benefits.items"
            :key="benefit"
            class="checklist__item"
          >
            <span class="checklist__icon-cont"
              ><ArrowUpRightIcon class="icon"
            /></span>
            <p v-html="benefit"></p>
          </li>
        </ul>
      </div>
    </section>

    <!-- TIMELINE + SELECTION -->
    <section class="site-section bg-slate-50 lg:rounded-[3rem]">
      <div class="wrapper">
        <header class="site-section__header js-reveal" v-reveal>
          <h2 class="site-section__caption">
            {{ programsContent.programTimeline.title }}
          </h2>
        </header>
        <ol class="timeline js-reveal" v-reveal.stagger>
          <li
            v-for="event in programsContent.programTimeline.events"
            :key="event.date"
            class="tile tile--outline timeline__event"
          >
            <p class="timeline__date">{{ event.date }}</p>
            <h3 class="tile__title">{{ event.description }}</h3>
            <ul class="timeline__activities">
              <li v-for="activity in event.activities" :key="activity">
                <span v-html="activity"></span>
              </li>
            </ul>
          </li>
        </ol>

        <header class="site-section__header js-reveal mt-16" v-reveal>
          <h2 class="site-section__caption">
            {{ programsContent.selection.title }}
          </h2>
          <p
            v-for="(text, index) in programsContent.selection.text"
            :key="index"
          >
            {{ text }}
          </p>
        </header>
        <p
          class="tile tile--tint js-reveal mx-auto max-w-3xl text-center font-heading text-lg font-medium text-slate-900"
          v-reveal
        >
          {{ programsContent.selection.deadline }}
        </p>
      </div>
    </section>

    <!-- FAQ -->
    <section class="site-section">
      <div class="wrapper">
        <header class="site-section__header js-reveal" v-reveal>
          <h2 class="site-section__caption">{{ programsContent.FAQ.title }}</h2>
        </header>
        <ul
          class="panel js-reveal mx-auto flex max-w-4xl flex-col gap-3"
          v-reveal.stagger
        >
          <li
            v-for="(faq, index) in programsContent.FAQ.questions"
            :key="index"
          >
            <FAQItem :faq="faq" :index="index" />
          </li>
        </ul>
      </div>
    </section>

    <CtaBand
      :title="programsContent.joinSection.title"
      :text="programsContent.joinSection.text[0]"
      :action-text="programsContent.joinSection.actionLink.text"
      :action-to="programsContent.joinSection.actionLink.url"
    />
  </div>
</template>

<style scoped>
.cohort-closed {
  @apply flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between;
}

.tracks {
  @apply grid gap-4 lg:grid-cols-3;
}

.track {
  @apply flex h-full flex-col gap-4;
}

.grid-2 {
  @apply grid gap-4 md:grid-cols-2;
}

.numbered {
  @apply flex list-inside list-decimal flex-col gap-2 text-base text-slate-600;
}

.numbered > li {
  @apply list-item;
}

.timeline {
  @apply grid gap-4 md:grid-cols-2;
}

.timeline__event {
  @apply flex flex-col gap-2;
}

.timeline__date {
  @apply font-heading text-sm font-semibold text-brand-600;
}

.timeline__activities {
  @apply flex list-inside list-disc flex-col gap-1 text-base text-slate-600;
}

.timeline__activities > li {
  @apply list-item;
}
</style>
