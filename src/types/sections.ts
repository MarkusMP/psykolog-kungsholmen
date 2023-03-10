import { Image } from "./global";

export interface IHeroPayload {
  title?: string;
  description?: string;
  image?: Image;
  btnText?: string;
  link?: { slug: string };
}

export interface IFeaturePayload {
  title?: string;
  description?: any[];
  image?: Image;
}

export interface ISideBarInfoAndContentPayload {
  image?: Image;
  contactTitle?: string;
  description?: string;
  greeting?: string;
  sidebarPlacement?: boolean;
  contactInfoList?: IContactInfoListItem[];
  content?: any[];
}

export interface IContactInfoListItem {
  _id?: string;
  infoName?: string;
  text?: string;
}

export interface IFeatureTwoPayload {
  title?: string;
  btnText?: string;
  description?: any[];
  link?: { slug: string };
  titleColor?: string;
}

export interface ICheckListPayload {
  title?: string;
  list?: IstringListItem[];
}

export interface IstringListItem {
  text?: string;
  _key?: string;
}

export interface ICardListPayload {
  title?: string;
  description?: string;
  list: ICardItem[];
}

export interface ICardItem {
  title?: string;
  description?: any[];
  _key?: string;
}

export interface ITestimonialsCarouselPayload {
  title?: string;
  testimonialItems: ITestimonialItem[];
}

export interface ITestimonialItem {
  image?: Image;
  description?: string;
  name?: string;
  rating?: number;
  _id?: string;
}

export interface ICardListTwo {
  title?: string;
  description?: string;
  list?: ICardListTwoItem[];
}

export interface ICardListTwoItem {
  title?: string;
  description?: any[];
  _key?: string;
  image?: Image;
}

export interface ICtaPayload {
  title?: string;
  description?: any[];
  btnText?: string;
  link?: { slug: string };
  location?: string;
  latitude?: number;
  longitude?: number;
}

export interface IHeroTwo {
  title?: string;
}

export interface IContactPayload {
  btnText?: string;
}

export interface INotFoundSectionPayload {
  title?: string;
  description?: string;
}

export interface ItextContentPayload {
  content?: any;
}
