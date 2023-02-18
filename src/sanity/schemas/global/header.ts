import { MenuIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const header = defineType({
  type: "document",
  name: "header",
  title: "Header",
  icon: MenuIcon,

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
