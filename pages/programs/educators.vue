<script setup lang="ts">
import type { AcademicCapIcon, BanknotesIcon } from "@heroicons/vue/24/solid";
import {
  BanknoteIcon,
  GraduationCapIcon,
  HelpingHandIcon,
} from "lucide-vue-next";
const programsContent = ref({
  heroSection: {
    caption: "OpenKids Africa Educator Program",
    subtext:
      "Join the OpenKids Africa Educator Program and become a catalyst for change in secondary education!",
    images: [
      {
        src: "/assets/images/photos/photo-1.jpeg",
        alt: "Educator interacting with students",
      },
      {
        src: "/assets/images/photos/photo-24.jpg",
        alt: "Students using computers",
      },
      {
        type: "block",
        color: "orange",
      },
      {
        src: "/assets/images/photos/photo-8.jpg",
        alt: "Classroom technology session",
      },
      {
        src: "/assets/images/photos/photo-16.jpg",
        alt: "Mentor teaching technology",
      },
      {
        type: "block",
        color: "purple",
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
    images: [
      {
        src: "/assets/images/photos/photo-1.jpeg",
        alt: "Educator interacting with students",
      },
      {
        src: "/assets/images/photos/photo-24.jpg",
        alt: "Students using computers",
      },
      {
        src: "/assets/images/photos/photo-8.jpg",
        alt: "Classroom technology session",
      },
      {
        type: "block",
        color: "purple",
      },
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
      `<span>Be recognized as an 
  <a href="https://openkids.africa/ambassadors" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">
  OpenKids Africa  Ambassador.
  </a>
  </span>`,
      `<span>Ambassadors will receive training resources to help them educate students.</span>`,
      `<span>Receive a certification for the experience.</span>`,
    ],
  },
  programTimeline: {
    title: "Program Timeline",
    events: [
      {
        date: "April 5-30, 2024",
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
        date: "May 6-8, 2024",
        description: "Notification of Acceptance",
        activities: [
          `Accepted applicants will be notified after the final decision, and we'll introduce their mentor/mentee for the duration of the program.`,
          `Otherwise, we'll let you know that we were unable to match you this year.`,
        ],
      },
      {
        date: "May 11 - June 22, 2024",
        description: "Mentorship Period",
        activities: [
          `Invitation to the general program onboarding `,
          `Continuous learning based on mentor/mentee schedule`,
          `Weekly progress report`,
        ],
      },
      {
        date: "July 7, 2024",
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
    deadline: " 30th April 2024",
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
  title: "Programs",
  meta: [
    {
      name: "description",
      content: programsContent.value.heroSection.subtext,
      key: "description",
    },
    {
      property: "og:title",
      content: "Contact Us",
    },
    {
      property: "og:description",
      content: programsContent.value.heroSection.subtext,
    },
    {
      property: "twitter:title",
      content: "Contact Us",
    },
    {
      property: "twitter:description",
      content: programsContent.value.heroSection.subtext,
    },
  ],
});
</script>
<template>
  <header class="page-header site-section programs-header">
    <div class="wrapper !max-w-[90rem]">
      <div class="page-header__text-cont 2xl:!ml-40">
        <h1 class="page-header__caption">
          {{ programsContent.heroSection.caption }}
        </h1>
        <p class="page-header__subtext">
          {{ programsContent.heroSection.subtext }}
        </p>
      </div>
      <div class="page-header__media-cont img-cont">
        <SiteHeroImagesGrid
          class="images-grid programs-header__media-cont"
          :images="programsContent.heroSection.images || []"
        />
      </div>
    </div>
  </header>
  <section class="site-section actions-section bg-slate-50">
    <div class="wrapper flex flex-col gap-6">
      <p
        v-for="(text, index) in programsContent.actionsSection.text"
        :key="index"
        class="site-section__text"
      >
        {{ text }}
      </p>
      <ul class="actions flex flex-col gap-2 lg:grid lg:grid-cols-3 lg:gap-4">
        <li
          v-for="action in programsContent.actionsSection.actions"
          :key="action.id"
          class="action flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
        >
          <div class="doings-card__icon-cont">
            <GraduationCapIcon
              class="icon doings-card__icon"
              v-if="action.id == 'register'"
            />
            <HelpingHandIcon
              class="icon doings-card__icon"
              v-else-if="action.id == 'volunteer'"
            />
            <BanknoteIcon
              class="icon doings-card__icon"
              v-else-if="action.id == 'sponsor'"
            />
          </div>

          <p class="text-3xl">
            {{ action.text }}
          </p>

          <a
            :href="action.link"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn--primary"
          >
            Apply Now
          </a>
        </li>
      </ul>
    </div>
  </section>
  <section class="site-section how-it-works-section">
    <div
      class="wrapper flex !max-w-7xl flex-col items-center gap-6 lg:grid lg:grid-cols-2 lg:gap-12"
    >
      <header
        class="site-section__header site-section__header--left col-start-2"
      >
        <h2 class="site-section__caption">
          {{ programsContent.howItWorksSection.caption }}
        </h2>
        <p
          v-for="(text, index) in programsContent.howItWorksSection.text"
          :key="index"
          class="max-w-2xl"
        >
          {{ text }}
        </p>
      </header>
      <div class="col-span-1 col-start-1 row-start-1">
        <SiteHeroImagesGrid
          class="images-grid programs-header__media-cont how-it-works__media-cont"
          :images="programsContent.howItWorksSection.images || []"
        />
      </div>
    </div>
  </section>
  <section class="site-section why-section">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption text-center">
          {{ programsContent.whyParticipateSection.caption }}
        </h2>
      </header>
      <ul
        class="why-section__details flex flex-col gap-4 lg:grid lg:grid-cols-2"
      >
        <li
          v-for="(detail, index) in programsContent.whyParticipateSection
            .details"
          :key="index"
          class="why-participate flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
        >
          <h3 class="font-heading text-2xl font-bold">{{ detail.title }}</h3>
          <p>{{ detail.text }}</p>
        </li>
      </ul>
    </div>
  </section>
  <section class="site-section who-can-apply-section bg-slate-50">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">
          {{ programsContent.whoCanApplySection.title }}
        </h2>
      </header>
      <ul class="flex flex-col gap-4 lg:grid lg:grid-cols-2">
        <li
          v-for="(criteria, role) in programsContent.whoCanApplySection
            .criteria"
          :key="role"
          class="who-can-apply-criteria rounded-2xl border border-slate-100 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
        >
          <h3 class="font-heading text-2xl font-bold">{{ criteria.role }}</h3>
          <ul>
            <li v-for="requirement in criteria.requirements" :key="requirement">
              {{ requirement }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
  <section class="site-section eligibility-section">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">
          {{ programsContent.eligibility.title }}
        </h2>
      </header>
      <ul class="flex flex-col gap-4 lg:grid lg:grid-cols-2">
        <li
          v-for="(criteria, role) in programsContent.eligibility.criteria"
          :key="role"
          class="eligibility-criteria rounded-2xl border border-slate-100 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
        >
          <h3 class="mb-3 font-heading text-2xl font-bold">
            {{ criteria.role }}
          </h3>
          <ul>
            <li
              v-for="requirement in criteria.requirements"
              :key="requirement"
              class="list-inside list-decimal"
            >
              {{ requirement }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
  <section class="site-section benefits-section bg-orange-50 text-orange-800">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">
          {{ programsContent.benefits.title }}
        </h2>
      </header>
      <ul class="flex flex-col gap-4 lg:grid lg:grid-cols-2">
        <li
          v-for="benefit in programsContent.benefits.items"
          :key="benefit"
          class="benefit rounded-2xl border border-orange-100 bg-white p-4 dark:border-orange-800 dark:bg-orange-900"
        >
          <p class="text-xl" v-html="benefit"></p>
        </li>
      </ul>
    </div>
  </section>
  <section class="site-section timeline-section">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">
          {{ programsContent.programTimeline.title }}
        </h2>
      </header>
      <ul class="timeline-events flex flex-col gap-4">
        <li
          v-for="event in programsContent.programTimeline.events"
          :key="event.date"
          class="timeline-event rounded-2xl border border-slate-100 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
        >
          <h4>
            <strong>{{ event.date }}:</strong> {{ event.description }}
          </h4>
          <ul>
            <li
              v-for="activity in event.activities"
              :key="activity"
              class="list-inside list-disc"
            >
              <span v-html="activity"></span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
  <section class="site-section selection-section bg-slate-50">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">
          {{ programsContent.selection.title }}
        </h2>
      </header>
      <p
        v-for="(text, index) in programsContent.selection.text"
        :key="index"
        class="site-section__text mx-auto max-w-3xl text-center"
      >
        {{ text }}
      </p>
      <p
        class="site-section__text mt-12 w-full rounded-2xl bg-slate-100 p-24 text-center text-2xl"
      >
        <strong>Application Deadline:</strong>
        {{ programsContent.selection.deadline }}
      </p>
    </div>
  </section>
  <section class="site-section faq-section">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="site-section__caption">
          {{ programsContent.FAQ.title }}
        </h2>
      </header>
      <ul class="faq-list flex flex-col gap-4">
        <li
          v-for="(faq, index) in programsContent.FAQ.questions"
          class="faq-list__item"
        >
          <FAQItem :faq="faq" :index="index" />
        </li>
      </ul>
    </div>
  </section>
  <section class="site-section sponsorship-section bg-slate-100">
    <div class="wrapper">
      <header class="site-section__header !mb-20">
        <h2 class="site-section__caption">
          {{ programsContent.sponsorship.title }}
        </h2>
        <p class="site-section__subtext mx-auto max-w-3xl">
          {{ programsContent.sponsorship.text }}
        </p>
      </header>

      <ul class="sponsorship-section__details flex flex-col gap-24">
        <li
          v-for="(section, index) in programsContent.sponsorship.sections"
          :key="index"
          class="sponsorship-section__section"
        >
          <header class="site-section__header !mb-8">
            <h3 class="font-heading text-3xl font-bold">{{ section.title }}</h3>
            <p
              v-for="(text, index) in section.text"
              :key="index"
              class="mx-auto max-w-2xl"
              v-html="text"
            ></p>
          </header>
          <ul
            class="sponsorship-section__items flex flex-col gap-4 lg:grid lg:grid-cols-3"
          >
            <li
              v-for="(item, index) in section.items"
              :key="index"
              class="sponsorship-section__item rounded-2xl border border-slate-100 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
            >
              <h4 class="font-heading text-xl font-bold">{{ item.title }}</h4>
              <p v-for="(text, index) in item.text" :key="index">
                {{ text }}
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.programs-header {
}
/* .programs-header > .wrapper {
  @apply max-w-7xl flex-col-reverse gap-8 lg:flex-row;
} */
.page-header__text-cont {
  @apply lg:max-w-xl xl:ml-16;
}
.page-header__text-cont,
.programs-header__media-cont {
  @apply lg:flex-1;
}

.programs-header__media-cont {
  /* @apply relative lg:w-[150%]; */
}

.how-it-works__media-cont:deep(.img-cont) {
  @apply lg:h-[20rem];
}

.why-section {
  @apply relative px-[calc(100%/7)];
}

.why-section::before,
.why-section::after {
  content: "";
  @apply absolute left-0 top-0 h-full max-h-96 w-[calc(100%/7)] bg-cover bg-center bg-no-repeat lg:max-h-full xl:bg-contain;
}

.why-section::before {
  @apply bg-right xl:bg-left;
  background-image: url("/assets/images/svg/LeftIllustrationabstract.svg");
}
.why-section::after {
  @apply left-auto right-0 bg-left xl:bg-right;
  background-image: url("/assets/images/svg/RightIllustrationabstract.svg");
}
.why-section > .wrapper {
  @apply flex flex-col gap-4;
}

.why-section .site-section__header,
.objectives-section .site-section__header {
  @apply text-left;
}

.objectives-section > .wrapper {
  @apply flex flex-col gap-4 lg:flex-row;
}

.objectives-section__text-cont,
.objectives-section__media-cont {
  @apply flex-1;
}

.objectives {
  @apply grid gap-4 md:grid-cols-2;
}

.objectives-section__media-cont {
  @apply flex flex-col items-center justify-center gap-4;
}

.objectives-section__illustration {
  @apply lg:h-[30rem];
}
</style>
