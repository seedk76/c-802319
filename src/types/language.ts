export type Language = "en" | "ro" | "fr" | "de" | "es";

export interface Translation {
  hero: {
    title: string;
    subtitle: string;
    downloadButton: string;
    experience: string;
    produced: string;
    clients: string;
  };
  features: {
    title: string;
    subtitle: string;
    mining: {
      title: string;
      description: string;
    };
    distribution: {
      title: string;
      description: string;
    };
    quality: {
      title: string;
      description: string;
    };
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  download: {
    title: string;
    subtitle: string;
    specButton: string;
    contactButton: string;
  };
  nav: {
    products: string;
    industries: string;
    about: string;
    quality: string;
    download: string;
    contact: string;
  };
  languageSelect: {
    title: string;
    subtitle: string;
    button: string;
  };
}