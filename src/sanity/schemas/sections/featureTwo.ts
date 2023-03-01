import { defineField, defineType } from "sanity";
import { BlockContentIcon } from "@sanity/icons";

export const featureTwo = defineType({
  type: "document",
  name: "featureTwo",
  title: "Feature Two",
  icon: BlockContentIcon,
  preview: {
    select: {
      title: "title",
      titleColor: "titleColor",
    },
    prepare: ({ title, titleColor }) => ({
      media: BlockContentIcon,
      title: `Feature two - ${title + " " + titleColor}`,
    }),
  },
  fieldsets: [
    {
      title: "Button",
      name: "btn",
    },
    {
      title: "Title",
      name: "title",
    },
  ],
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      fieldset: "title",
    }),
    defineField({
      type: "string",
      name: "titleColor",
      title: "Title Color",
      fieldset: "title",
    }),
    defineField({
      type: "blockContent",
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
  ],
});
