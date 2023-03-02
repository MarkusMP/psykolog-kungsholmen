import { defineField, defineType } from "sanity";
import { UnknownIcon } from "@sanity/icons";

export const notFoundSection = defineType({
  type: "document",
  name: "notFoundSection",
  title: "notFoundSection",
  preview: {
    select: {
      description: "description",
    },
    prepare: ({ description }) => ({
      media: UnknownIcon,
      title: `404 - ${description}`,
    }),
  },

  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
    }),
    defineField({
      type: "string",
      name: "description",
      title: "Description",
    }),
  ],
});
