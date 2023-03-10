import { PagePreview } from "@/sanity/preview/PagePreview";
import {
  DocumentIcon,
  UnknownIcon,
  HeartIcon,
  HomeIcon,
  MenuIcon,
  UploadIcon,
} from "@sanity/icons";
import { definePlugin, DocumentOptions, DocumentPluginOptions } from "sanity";
import { deskTool as baseDeskTool } from "sanity/desk";
import { DefaultDocumentNodeResolver } from "sanity/desk";

/**
 * A modified version of Sanity’s desk tool.
 *
 * - Adds a default document node resolver that uses the `views` option on schema types.
 * - Adds a default production URL resolver that uses the `url` option on schema types.
 */
export const deskTool = definePlugin(() => {
  const { name: _, ...base } = baseDeskTool({
    defaultDocumentNode,
    structure: (S) =>
      S.list()
        .title("Content")
        .items([
          S.listItem()
            .title("Home")
            .icon(HomeIcon)
            .child(
              S.document()
                .schemaType("home")
                .documentId("home")
                .views([
                  S.view.form().title("Content"),
                  S.view.component(PagePreview).title("Preview"),
                ])
            ),
          S.listItem()
            .title("Pages")
            .icon(DocumentIcon)
            .child(
              S.documentList()
                .title(`pages documents`)
                .schemaType("page")
                .filter('_type == "page"')
            ),
          S.listItem()
            .title("404 Page")
            .icon(UnknownIcon)
            .child(
              S.document()
                .schemaType("notFound")
                .documentId("notFound")
                .views([
                  S.view.form().title("Content"),
                  S.view.component(PagePreview).title("Preview"),
                ])
            ),
          S.divider(),
          S.listItem()
            .title("Testimonials")
            .icon(HeartIcon)
            .child(
              S.documentList()
                .title(`Testimonials documents`)
                .schemaType("testimonials")
                .filter('_type == "testimonials"')
            ),
          S.divider(),
          S.listItem()
            .title("Header")
            .icon(MenuIcon)
            .child(S.document().schemaType("header").documentId("header")),
          S.listItem()
            .title("Footer")
            .icon(UploadIcon)
            .child(S.document().schemaType("footer").documentId("footer")),
        ]),
  });

  return {
    name: "lib/desk/deskTool",
    ...base,
    document: {
      ...base.document,
      productionUrl,
    },
  };
});

const defaultDocumentNode: DefaultDocumentNodeResolver = (S, ctx) => {
  const schemaType = ctx.schema.get(ctx.schemaType);
  const schemaOptions: DocumentOptions | undefined = schemaType?.options;
  const viewsResolver = schemaOptions?.views;

  if (viewsResolver) {
    return S.document().views(viewsResolver(S, ctx));
  }

  return S.document();
};

const productionUrl: DocumentPluginOptions["productionUrl"] = async (
  prev,
  ctx
) => {
  const schemaType = ctx.schema.get(ctx.document._type);
  const schemaOptions: DocumentOptions | undefined = schemaType?.options;
  const urlResolver = schemaOptions?.url;

  if (urlResolver) {
    return (await urlResolver(ctx)) ?? prev;
  }

  return prev;
};
