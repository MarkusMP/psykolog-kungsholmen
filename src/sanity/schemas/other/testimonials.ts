import { defineField, defineType } from "sanity";
import { HeartIcon } from "@sanity/icons";

export const testimonials = defineType({
  type: "document",
  name: "testimonials",
  title: "Testimonials",
  icon: HeartIcon,

  fields: [
    defineField({
      title: "Avatar",
      name: "image",
      type: "image",
      description:
        "⚡ Optional. If you do not upload an avatar image, a default one will be displayed.",
      options: {
        hotspot: true,
      },
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
      title: "Name",
      name: "name",
      type: "string",
    }),
    defineField({
      title: "Rating",
      name: "rating",
      type: "number",
      description:
        "💡 You can enter a number between 0 and 5, including decimal values.",
      validation: (Rule) => Rule.required().min(0).max(5),
    }),
    defineField({
      title: "Description",
      name: "description",
      type: "text",
    }),
  ],
});
