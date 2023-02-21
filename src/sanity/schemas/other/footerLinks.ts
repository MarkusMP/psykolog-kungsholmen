import { defineField, defineType } from "sanity";
import { LinkIcon } from "@sanity/icons";

export const footerLinks = defineType({
  type: "document",
  name: "footerLinks",
  title: "Footer Links",
  icon: LinkIcon,

  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      description: "Title for all links",
    }),
    defineField({
      name: "linkItems",
      title: "Item list",
      type: "array",
      of: [
        {
          title: "Reference",
          type: "reference",
          to: [
            {
              type: "home",
            },
            {
              type: "page",
            },
          ],
        },
      ],
    }),
  ],
});
