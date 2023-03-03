import { defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const textContent = defineType({
  type: "document",
  name: "textContent",
  title: "Text",
  icon: DocumentTextIcon,
  preview: {
    prepare: () => ({
      media: DocumentTextIcon,
      title: `Text`,
    }),
  },

  fields: [
    defineField({
      name: "content",
      title: "Content",
      type: "blockContent",
    }),
  ],
});
