import { SchemaTypeDefinition } from "sanity";
import { footer, header } from "./global";
import { home, page, notFound } from "./pages";
import { hero } from "./sections";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, footer, header, page, notFound, hero],
};
