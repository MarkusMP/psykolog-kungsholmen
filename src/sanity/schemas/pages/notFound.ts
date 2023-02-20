import { ErrorOutlineIcon } from "@sanity/icons";
import { defineField, defineType, isRecord, isString } from "sanity";

import { previewSecretId } from "@/sanity/constants";
import { apiVersion } from "@/sanity/env";
import { getSecret } from "@/sanity/secret";
import {
  CustomFieldDescription,
  InputCounterDescription,
} from "@/sanity/components/InputCounterDescription";
import {
  CustomFieldTitle,
  InputCounterTitle,
} from "@/sanity/components/InputCounterTitle";

export const notFound = defineType({
  type: "document",
  name: "notFound",
  title: "404",
  icon: ErrorOutlineIcon,

  options: {
    async url(ctx) {
      const { _id: id, _type: type, slug } = ctx.document;
      const currentSlug =
        isRecord(slug) && isString(slug.current) ? slug.current : "/404";

      if (!currentSlug) return undefined;

      const client = ctx.getClient({ apiVersion });
      const secret = await getSecret({
        client,
        id: previewSecretId,
        createIfNotExists: true,
      });

      console.log({ secret });
      if (!secret) return undefined;

      return `/api/sanity/preview?type=${type}&id=${id}&slug=${currentSlug}&secret=${secret}`;
    },
  },
  fieldsets: [
    {
      title: "SEO",
      name: "seo",
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title for menu & links",
      description:
        "💡 This won't show up for users, just make sure you add a descriptive name which will make it easy to find this page later when adding links or searching & browsing the CMS.",
    }),
    defineField({
      title: "Title for SEO & social sharing",
      description:
        "Make it as enticing as possible to convert users in social feeds and Google searches, Ideally between 15 and 70 characters.",
      name: "titleSEO",
      fieldset: "seo",
      type: "string",
      validation: (Rule) => Rule.required().min(15).max(70),
      components: {
        input: InputCounterTitle,
        field: CustomFieldTitle,
      },
    }),
    defineField({
      name: "descriptionSEO",
      type: "string",
      title: "Short paragraph for SEO & social sharing (meta description)",
      description:
        "⚡ Optional but highly encouraged as it'll help you convert more visitors from Google & social, Ideally between 70 and 160 characters.",
      fieldset: "seo",
      validation: (Rule) => Rule.max(160).error(),
      components: {
        input: InputCounterDescription,
        field: CustomFieldDescription,
      },
    }),
    defineField({
      title: "Social sharing image",
      fieldset: "seo",
      description:
        "⚡ Optional but highly encouraged for increasing conversion rates for links to this page shared in social media.",
      name: "ogImage",
      type: "image",
    }),
  ],
});
