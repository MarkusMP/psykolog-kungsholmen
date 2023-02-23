import { SchemaTypeDefinition } from "sanity";
import { footer, header } from "./global";
import { dropDown, footerLinks } from "./other";
import { home, page, notFound } from "./pages";
import { feature, hero } from "./sections";

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
  ],
};
