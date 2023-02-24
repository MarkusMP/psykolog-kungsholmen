import { defineField, defineType } from "sanity";

export const contactInfo = defineType({
  type: "document",
  name: "contactInfo",
  title: "Contact Info",

  preview: {
    select: {
      title: "text",
    },
    prepare: ({ title }) => ({
      title: `${title}`,
    }),
  },

  fields: [
    defineField({
      type: "string",
      name: "infoName",
      title: "Choose info",

      options: {
        list: [
          { title: "Email", value: "email" },
          { title: "Location", value: "location" },
          { title: "Number", value: "number" },
          { title: "Name", value: "name" },
        ],
      },
    }),
    defineField({
      type: "string",
      name: "text",
      title: "Text",
    }),
  ],
});
