import { SchemaTypeDefinition } from "sanity";
import { footer, header } from "./global";
import { home, page, notFound } from "./pages";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, footer, header, page, notFound],
};
