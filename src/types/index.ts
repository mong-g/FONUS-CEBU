export interface SiteData {
  general: GeneralData;
  hero: HeroData;
  about: AboutData;
  packages: PackageData[];
  programs: ProgramData[];
  benefits: string[];
  offers: string[];
  contact: ContactData;
  board: BoardMember[];
}

export interface GeneralData {
  name: string;
  fullName: string;
  taglineLocal?: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  buttonText: string;
  badge?: string;
}

export interface AboutData {
  vision: string;
  mission: string;
  history: string;
  coreValues: CoreValue[];
  valuesList: string[];
  humaneValues?: HumaneValue[];
}

export interface CoreValue {
  letter: string;
  meaning: string;
}

export interface HumaneValue {
  letter: string;
  word: string;
}

export interface PackageData {
  name: string;
  price: string; // Used for display (usually monthly)
  contractPrice?: string;
  spotCash?: string;
  features: string[];
  color: string;
  featured?: boolean;
  image?: string;
}

export interface ProgramData {
  name: string;
  description: string;
  details: string[];
}

export interface ContactData {
  address: string;
  email: string;
  emails?: string[];
  phone: string[];
  website: string;
  facebook?: string;
}

export interface BoardMember {
  name: string;
  affiliation: string;
}
