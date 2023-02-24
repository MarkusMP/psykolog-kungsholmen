import { SchemaTypeDefinition } from "sanity";

import { footer, header } from "./global";
import {
  contactInfo,
  dropDown,
  footerLinks,
  content,
  cardListItem,
} from "./other";
import { home, page, notFound } from "./pages";
import {
  cardList,
  checkList,
  feature,
  featureTwo,
  hero,
  infoSidebar,
  sideBarInfoAndContent,
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
  ],
};
