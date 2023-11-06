<script setup lang="ts">
import { HelpingHandIcon, HeartHandshakeIcon, MailIcon } from "lucide-vue-next";

defineProps<{
  sectionData: PartnerSection;
}>();
</script>

<template>
  <section class="site-section partner-section">
    <div class="wrapper">
      <div class="partner-section__text-cont">
        <header class="site-section__header">
          <h2 class="site-section__caption">
            {{ sectionData.title }}
          </h2>
          <p v-if="sectionData.description" class="site-section__subtext">
            {{ sectionData.description }}
          </p>
        </header>
        <ul
          v-if="!sectionData.hidePartners"
          class="partners flex flex-wrap justify-around gap-12 py-8"
        >
          <li
            v-for="(partner, index) in sectionData.partners"
            :key="index"
            class="partners__item"
          >
            <div class="img-cont h-40 w-40">
              <img :src="partner.logo" :alt="partner.name" />
            </div>
          </li>
        </ul>
        <div class="action-cont">
          <a
            :aria-label="sectionData.donateLink?.text || 'Donate'"
            v-if="sectionData.donateLink"
            :href="sectionData.donateLink.url"
            target="_blank"
            rel="noopener noreferrer"
            class="btn"
          >
            <HelpingHandIcon class="icon" />
            <span class="text">
              {{ sectionData.donateLink.text }}
            </span>
          </a>

          <NuxtLink
            v-if="sectionData.contactCTA"
            to="/contact"
            class="btn btn--secondary"
            :aria-label="sectionData.contactCTA?.text || 'Contact Us'"
          >
            <HeartHandshakeIcon
              v-if="sectionData.contactCTA?.id === 'partner'"
              class="icon"
            />
            <MailIcon v-else class="icon" />
            <span class="text"> {{ sectionData.contactCTA?.text }} </span>
          </NuxtLink>
        </div>
      </div>

      <slot name="illustration">
        <IllustrationsWorldMap class="partner-section__illustration" />
      </slot>
    </div>
  </section>
</template>
