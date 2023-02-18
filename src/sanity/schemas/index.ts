import { SchemaTypeDefinition } from "sanity";
import { footer, header } from "./global";
import { home } from "./pages";
import { page } from "./pages/page";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, footer, header, page],
};
