import { defineField, defineType } from "sanity";

export const cardListItemTwo = defineType({
  type: "document",
  name: "cardListItemTwo",
  title: "Card Item Two",

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
      title: "Icon",
      description: "Upload icon here.",
      name: "image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
        },
      ],
    }),
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
