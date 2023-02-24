import { defineField, defineType } from "sanity";

export const cardListItem = defineType({
  type: "document",
  name: "cardListItem",
  title: "Card Item",

  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => ({
      title: `${title}`,
    }),
  },

  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
    }),
    defineField({
      type: "text",
      name: "description",
      title: "Description",
    }),
  ],
});
