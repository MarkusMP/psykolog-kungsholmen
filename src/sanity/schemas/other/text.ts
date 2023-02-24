import { defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const content = defineType({
  type: "document",
  name: "content",
  title: "content",
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: "text",
    },
    prepare: ({ title }) => ({
      media: DocumentTextIcon,
      title: `${title}`,
    }),
  },
  fields: [
    defineField({
      type: "string",
      name: "text",
      title: "Text",
    }),
  ],
});
