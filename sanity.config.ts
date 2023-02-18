import { visionTool } from "@sanity/vision";
import { Config, defineConfig } from "sanity";
import { dataset, projectId } from "./src/sanity/env";
import { deskTool } from "./src/sanity/lib/desk";
import { schema } from "./src/sanity/schemas";
import { media } from "sanity-plugin-media";

export default defineConfig<Config>({
  basePath: "/studio",
  dataset,
  projectId,
  schema,
  title: "Eva Vadenmark",

  plugins: [deskTool(), visionTool(), media()],
});
