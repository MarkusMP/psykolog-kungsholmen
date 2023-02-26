import { defineField, defineType } from "sanity";
import { ExpandIcon } from "@sanity/icons";

export const heroTwo = defineType({
  type: "document",
  name: "heroTwo",
  title: "Hero Two",
  icon: ExpandIcon,
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => ({
      media: ExpandIcon,
      title: `Hero Two - ${title}`,
    }),
  },
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
    }),
  ],
});
