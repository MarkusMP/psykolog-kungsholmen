import { defineField, defineType } from "sanity";
import { LinkIcon } from "@sanity/icons";

export const cta = defineType({
  type: "document",
  name: "cta",
  title: "Call to Action",
  icon: LinkIcon,
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => ({
      media: LinkIcon,
      title: `Call to Action - ${title}`,
    }),
  },
  fieldsets: [
    {
      title: "Button",
      name: "btn",
    },
  ],
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
    defineField({
      name: "btnText",
      type: "string",
      title: "Button text",
      fieldset: "btn",
    }),
    defineField({
      name: "link",
      title: "What page should the button link to?",
      type: "reference",
      fieldset: "btn",
      to: [
        {
          type: "home",
        },
        {
          type: "page",
        },
      ],
    }),
    defineField({
      title: "Image",
      description: "Upload map screenshot here.",
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
      name: "location",
      title: "Location",
    }),
  ],
});
