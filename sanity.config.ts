import { visionTool } from "@sanity/vision";
import { Config, defineConfig } from "sanity";
import { dataset, projectId } from "./src/sanity/env";
import { deskTool } from "./src/sanity/lib/desk";
import { schema } from "./src/sanity/schemas";

export default defineConfig<Config>({
  basePath: "/studio",
  dataset,
  projectId,
  schema,
  title: "Client project",

  plugins: [deskTool(), visionTool()],
});
