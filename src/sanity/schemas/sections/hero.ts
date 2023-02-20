import { defineField, defineType } from "sanity";
import { ExpandIcon } from "@sanity/icons";

export const hero = defineType({
  type: "document",
  name: "hero",
  title: "Hero",
  icon: ExpandIcon,
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => ({
      media: ExpandIcon,
      title: `Hero - ${title}`,
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
      name: "description",
      type: "string",
      title: "Description",
    }),
    defineField({
      title: "Image",
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
  ],
});
