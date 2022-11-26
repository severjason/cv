import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

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
  github: string;
  website: string;
  facebook: string;
  linked_in: string;
};

export type CVMainInfoLocation = {
  title: I18Data;
  link: string;
};

export type I18Data<T = string> = {
  en: T;
  uk: T;
};

export type ExperienceItem = {
  start_date: string;
  end_date: string | 'present';
  company?: I18Data | string;
  role: I18Data;
  list: ListItem[];
  location: I18Data;
  link?: string;
};

export type ListItem = {
  text: I18Data;
  title?: string | I18Data;
  link?: string;
  sub_items?: I18Data[];
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
};

export type SkillListItem = {
  name: string;
  important?: boolean;
};

export type LanguageItem = {
  title: I18Data;
  level: I18Data;
};

export enum Locales {
  en = 'en',
  uk = 'uk',
}

export enum LocaleNamespaces {
  common = 'common',
}

export type Languages = {
  [key: string]: {
    lang: Locales;
    nextLang: Locales;
    flagIcon: OverridableComponent<SvgIconTypeMap>;
  };
};
