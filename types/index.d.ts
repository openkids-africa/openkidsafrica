export { PartnerSection };

declare global {
  interface BasicSectionContent {
    title: string;
    text: string[];
    images?: {
      src: string;
      alt: string;
    }[];
  }

  interface PartnerSection {
    title: string;
    description?: string;
    hidePartners?: boolean;
    donateLink?: {
      text: string;
      url: string;
    };
    contactCTA: {
      id: string;
      text: string;
      path?: string;
    };
    partners: {
      name: string;
      logo: string;
    }[];
  }

  interface AboutPageContent {
    heroSection: BasicSectionContent;
    journeySection: BasicSectionContent;
    valuesSection: {
      title: string;
      items: string[];
    };
    infographicSection: {
      items: {
        title: string;
        text: string[];
        link: {
          text: string;
          link: string;
        };
        image: string;
      }[];
    };
    teamSection: {
      title: string;
      team: {
        name: string;
        role: string;
        image: string;
        socials: {
          name: string;
          url: string;
        }[];
      }[];
    };
    partnersSection: PartnerSection;
  }

  interface ArticleCard {
    _id: string;
    slug: {
      current: string;
      _type: string;
    };
    title: string;
    publishedAt: string;
    description: string;
    imageUrl: string;
    author: {
      name: string;
    };
  }
}
