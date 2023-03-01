import { defineField, defineType } from "sanity";
import { BlockContentIcon } from "@sanity/icons";

export const feature = defineType({
  type: "document",
  name: "feature",
  title: "Feature",
  icon: BlockContentIcon,
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => ({
      media: BlockContentIcon,
      title: `Feature - ${title}`,
    }),
  },
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
    }),
    defineField({
      type: "blockContent",
      name: "description",
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
  ],
});
