import { DocumentIcon, ExpandIcon } from "@sanity/icons";
import { defineField, defineType, isRecord, isString } from "sanity";
import { previewSecretId } from "@/sanity/constants";
import { apiVersion } from "@/sanity/env";
import { getSecret } from "@/sanity/secret";
import { PagePreview } from "@/sanity/preview/PagePreview";
import {
  CustomFieldTitle,
  InputCounterTitle,
} from "@/sanity/components/InputCounterTitle";
import {
  CustomFieldDescription,
  InputCounterDescription,
} from "@/sanity/components/InputCounterDescription";
import { SlugInputField } from "@/sanity/components/slugInputField";
import SlugInput from "@/sanity/components/slugInput";

export const page = defineType({
  type: "document",
  name: "page",
  title: "Page",
  icon: DocumentIcon,

  options: {
    views(S) {
      return [
        S.view.form().title("Content"),
        S.view.component(PagePreview).title("Preview"),
      ];
    },
    async url(ctx: any) {
      const { _id: id, _type: type, slug } = ctx.document;
      const currentSlug =
        isRecord(slug) && isString(slug.current) ? slug.current : undefined;

      if (!currentSlug) return undefined;

      const client = ctx.getClient({ apiVersion });
      const secret = await getSecret({
        client,
        id: previewSecretId,
        createIfNotExists: true,
      });

      if (!secret) return undefined;

      return `/api/sanity/preview?type=${type}&id=${id}&slug=${currentSlug}&secret=${secret}`;
    },
  },
  fieldsets: [
    {
      title: "SEO & Social",
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
      type: "slug",
      name: "slug",
      title: "Relative address on the website",
      description: "Defines the URL of the page in the website.",

      components: {
        field: SlugInputField,
        input: SlugInput,
      },
      options: {
        source: "title",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
        maxLength: 200,
      },
    }),
    defineField({
      title:
        "💡 If this is checked, then this page won't show up on Google search.",
      description: "",
      name: "indexPage",
      type: "boolean",

      initialValue: false,
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content / body of the page",
      of: [
        { type: "hero" },
        { type: "heroTwo" },
        { type: "feature" },
        { type: "sideBarInfoAndContent" },
        { type: "cta" },
        { type: "textContent" },
      ],
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
