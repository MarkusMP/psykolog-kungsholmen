import { UploadIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const footer = defineType({
  type: "document",
  name: "footer",
  title: "Footer",
  icon: UploadIcon,

  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title for internal reference",
      description:
        "💡 This won't show up for users, just make sure you add a descriptive name which will make it easy to find this when browsing the CMS.",
    }),
    defineField({
      title: "Logo",
      description: "Upload logo here.",
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
      title: "Descrtipion",
      description: "",
      name: "description",
      type: "text",
    }),
    defineField({
      name: "menuItems",
      title: "Footer link list",
      description: "Links displayed on the footer of your site.",
      type: "array",
      of: [
        {
          type: "footerLinks",
        },
      ],
    }),
    defineField({
      name: "info",
      type: "array",
      title: "Info",
      description: "Enter your location, email, and number.",
      of: [
        {
          type: "object",
          fields: [
            {
              type: "string",
              name: "infoList",
              title: "Choose info",
              options: {
                list: [
                  { title: "Email", value: "email" },
                  { title: "Location", value: "location" },
                  { title: "Number", value: "number" },
                ],
              },
            },
            {
              type: "string",
              name: "text",
              title: "text",
            },
          ],
          preview: {
            select: {
              title: "infoList",
              subtitle: "text",
            },
          },
        },
      ],
    }),
    defineField({
      title: "Copyright text",
      description: "⚡ Optional.",
      name: "copyright",
      type: "string",
    }),
  ],
});
