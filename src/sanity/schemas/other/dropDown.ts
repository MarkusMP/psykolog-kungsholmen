import { defineField, defineType } from "sanity";
import { LinkIcon } from "@sanity/icons";

export const dropDown = defineType({
  type: "document",
  name: "dropDown",
  title: "Drop-Down Links",
  icon: LinkIcon,

  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      description: "displayed on the header of your site.",
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
