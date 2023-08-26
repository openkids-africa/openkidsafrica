export { PartnerSection };

declare global {
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
}
