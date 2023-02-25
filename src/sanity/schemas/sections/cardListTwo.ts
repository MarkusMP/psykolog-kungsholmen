import { defineField, defineType } from "sanity";
import { ThLargeIcon } from "@sanity/icons";

export const cardListTwo = defineType({
  type: "document",
  name: "cardListTwo",
  title: "Card List Two",
  icon: ThLargeIcon,
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => ({
      media: ThLargeIcon,
      title: `Card List Two - ${title}`,
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
    defineField({
      name: "list",
      title: "List",
      type: "array",
      of: [
        {
          type: "cardListItemTwo",
        },
      ],
    }),
  ],
});
