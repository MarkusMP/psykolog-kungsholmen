import { UploadIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const footer = defineType({
  type: "document",
  name: "footer",
  title: "Footer",
  icon: UploadIcon,

  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title for internal reference",
      description:
        "This won't show up for users, just make sure you add a descriptive name which will make it easy to find this page later when adding link or searching & browsing the CMS.",
    }),
  ],
});
