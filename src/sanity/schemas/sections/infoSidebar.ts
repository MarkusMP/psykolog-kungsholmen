import { defineField, defineType } from "sanity";

export const infoSidebar = defineType({
  type: "document",
  name: "infoSidebar",
  title: "Info sidebar",
  fieldsets: [
    {
      title: "Short about",
      name: "about",
    },
  ],
  fields: [
    defineField({
      type: "string",
      name: "greeting",
      title: "Greeting",
      fieldset: "about",
    }),
    defineField({
      type: "text",
      name: "description",
      title: "Description",
      fieldset: "about",
    }),
    defineField({
      type: "string",
      name: "contactTitle",
      title: "Contact Title",
    }),
    defineField({
      name: "contactInfoList",
      title: "Contact Info",
      type: "reference",
      to: [
        {
          type: "contactInfo",
        },
      ],
    }),
  ],
});
