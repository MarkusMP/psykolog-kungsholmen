import { HomeIcon } from "@sanity/icons";
import { defineField, defineType, isRecord, isString } from "sanity";
import { previewSecretId } from "@/sanity/constants";
import { apiVersion } from "@/sanity/env";
import { getSecret } from "@/sanity/secret";

export const home = defineType({
  type: "document",
  name: "home",
  title: "Home",
  icon: HomeIcon,

  options: {
    async url(ctx) {
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
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title for internal reference",
      description:
        "This won't show up for users, just make sure you add a descriptive name which will make it easy to find this page later when adding link or searching & browsing the CMS.",
    }),
  ],
});
