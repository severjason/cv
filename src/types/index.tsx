import { JSX } from 'react';

export type CVData = {
  main_info: CVMainInfo;
  profile: Profile;
  experience: ExperienceItem[];
  skills: SkillsData;
  languages: LanguageItem[];
  education: EducationData[];
};

export type CVDataResponse = CVData | null | undefined;

export type Profile = {
  full: I18Data;
  short: I18Data;
};

export type CVMainInfo = {
  first_name: I18Data;
  last_name: I18Data;
  position: I18Data;
  framework: string;
  email: string;
  location: CVMainInfoLocation;
  family: I18Data;
  github: string;
  website: string;
  facebook: string;
  linked_in: string;
};

export type CVMainInfoLocation = {
  title: I18Data;
  link: string;
  comment?: I18Data;
};

export type I18Data<T = string> = {
  en: T;
  uk: T;
  de: T;
};

export type ExperienceItem = {
  start_date: string;
  end_date: string | 'present';
  company?: I18Data | string;
  role: I18Data;
  list: ListItem[];
  location: I18Data;
  link?: string;
  stack?: string[];
};

export type ListSubItem = {
  text: I18Data;
  title?: string | I18Data;
};

export type ListItem = {
  text: I18Data;
  title?: string | I18Data;
  link?: string;
  sub_items?: ListSubItem[];
  stack?: string[];
};

export enum EducationType {
  basic = 'basic',
  additional = 'additional',
}

export type EducationData = EducationDataAdditional | EducationDataBasic;

export type EducationDataAdditional = {
  type: EducationType.additional;
  title: I18Data;
  items: I18Data[];
};

export type EducationDataBasic = {
  type: EducationType.basic;
  start_date: string;
  end_date: string;
  company: I18Data;
  role: I18Data;
  addition?: string;
};

export type SkillsData = {
  primary: SkillListItem[][];
  secondary: SkillListItem[][];
  soft: SkillListItem[][];
};

type SkillListItemBase = {
  important?: boolean;
};

export type SkillListItem = SkillListItemBase & ({ name: string } | I18Data);

export type LanguageItem = {
  title: I18Data;
  level: I18Data;
};

export enum Locales {
  en = 'en',
  uk = 'uk',
  de = 'de',
}

export enum LocaleNamespaces {
  common = 'common',
}

export type Languages = {
  [key: string]: {
    lang: Locales;
    nextLang: Locales;
    flagIcon: () => JSX.Element;
  };
};
