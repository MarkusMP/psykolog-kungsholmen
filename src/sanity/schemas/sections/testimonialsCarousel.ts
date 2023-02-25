import { defineField, defineType } from "sanity";
import { HeartIcon } from "@sanity/icons";

export const testimonialsCarousel = defineType({
  type: "document",
  name: "testimonialsCarousel",
  title: "Testimonials Carousel",
  icon: HeartIcon,
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => ({
      media: HeartIcon,
      title: `Testimonials Carousel - ${title}`,
    }),
  },
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
    }),
    defineField({
      name: "testimonialItems",
      title: "Testimonial list",
      type: "array",
      of: [
        {
          title: "Reference",
          type: "reference",
          to: [
            {
              type: "testimonials",
            },
          ],
        },
      ],
    }),
  ],
});
