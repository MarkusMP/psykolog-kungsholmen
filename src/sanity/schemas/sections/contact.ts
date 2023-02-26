import { defineField, defineType } from "sanity";
import { BillIcon } from "@sanity/icons";

export const contact = defineType({
  type: "document",
  name: "contact",
  title: "Contact",
  icon: BillIcon,
  preview: {
    select: {
      btnText: "btnText",
    },
    prepare: ({ btnText }) => ({
      media: BillIcon,
      title: `Conctact - ${btnText}`,
    }),
  },
  fields: [
    defineField({
      name: "btnText",
      type: "string",
      title: "Button text",
    }),
  ],
});
