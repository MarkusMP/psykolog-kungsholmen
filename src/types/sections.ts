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
  description?: string;
  image?: Image;
}
