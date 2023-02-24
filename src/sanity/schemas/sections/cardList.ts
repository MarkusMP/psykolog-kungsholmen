import { defineField, defineType } from "sanity";
import { ThLargeIcon } from "@sanity/icons";

export const cardList = defineType({
  type: "document",
  name: "cardList",
  title: "Card List",
  icon: ThLargeIcon,
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => ({
      media: ThLargeIcon,
      title: `Card List - ${title}`,
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
          type: "cardListItem",
        },
      ],
    }),
  ],
});
