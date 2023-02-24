import { defineField, defineType } from "sanity";
import { UlistIcon } from "@sanity/icons";

export const checkList = defineType({
  type: "document",
  name: "checkList",
  title: "Check List",
  icon: UlistIcon,
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => ({
      media: UlistIcon,
      title: `Check List - ${title}`,
    }),
  },
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
    }),

    defineField({
      name: "list",
      title: "List",
      type: "array",
      of: [
        {
          type: "content",
        },
      ],
    }),
  ],
});
