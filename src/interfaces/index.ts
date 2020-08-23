export type User = {
  id: number;
  name: string;
};

export interface Content {
  language: string;
  navbar: NavbarSection;
  intro: IntroSection;
  scrollDownText: string;
}

interface NavbarSection {
  about: string;
  work: string;
  contact: string;
  blog: string;
  aboutHint: string;
  workHint: string;
  contactHint: string;
  blogHint: string;
  new: string;
}

interface IntroSection {
  introduction: string;
  title: string;
  subtitle: string;
  mainButtonText: string;
  secondaryButtonText: string;
}
