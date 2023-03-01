import { SchemaTypeDefinition } from "sanity";

import { footer, header } from "./global";
import {
  contactInfo,
  dropDown,
  footerLinks,
  content,
  cardListItem,
  testimonials,
  cardListItemTwo,
  blockContent,
} from "./other";
import { home, page, notFound } from "./pages";
import {
  cardList,
  cardListTwo,
  checkList,
  contact,
  cta,
  feature,
  featureTwo,
  hero,
  heroTwo,
  infoSidebar,
  sideBarInfoAndContent,
  testimonialsCarousel,
} from "./sections";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    home,
    footer,
    header,
    page,
    notFound,
    hero,
    dropDown,
    footerLinks,
    feature,
    sideBarInfoAndContent,
    contactInfo,
    infoSidebar,
    featureTwo,
    checkList,
    content,
    cardList,
    cardListItem,
    testimonials,
    testimonialsCarousel,
    cardListItemTwo,
    cardListTwo,
    cta,
    heroTwo,
    contact,
    blockContent,
  ],
};
