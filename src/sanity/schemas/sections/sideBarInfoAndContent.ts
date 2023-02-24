import { defineField, defineType } from "sanity";
import { MasterDetailIcon } from "@sanity/icons";

export const sideBarInfoAndContent = defineType({
  type: "document",
  name: "sideBarInfoAndContent",
  title: "Sidebar info and body/content",
  icon: MasterDetailIcon,

  preview: {
    prepare: () => ({
      media: MasterDetailIcon,
      title: `Sidebar info & body/content`,
    }),
  },
  fieldsets: [
    {
      title: "Short about",
      name: "about",
    },
  ],
  fields: [
    defineField({
      title: "Potrait",
      description: "Upload image here.",
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
      type: "array",
      of: [
        {
          title: "Reference",
          type: "reference",

          to: [
            {
              type: "contactInfo",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content / body of the page",
      of: [
        {
          type: "featureTwo",
        },
        {
          type: "checkList",
        },
        {
          type: "cardList",
        },
      ],
    }),
  ],
});
