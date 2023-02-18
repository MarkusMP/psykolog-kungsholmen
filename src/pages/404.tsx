import { GetStaticProps } from "next";
import { PreviewSuspense } from "next-sanity/preview";

import { LazyPreviewPage } from "@/components/pages/preview/LazyPreviewPage";
import { LoadingScreen } from "@/components/pages/preview/LoadingScreen";
import { PageScreen } from "@/components/pages/PageScreen";
import {
  FOOTER_QUERY,
  HEADER_QUERY,
  NOT_FOUND_PAGE_DATA_QUERY,
} from "@/sanity/queries";
import { IFooterPayload, IHeaderPayload, IPageData } from "@/types";
import { client } from "../sanity/client";

interface PageProps {
  data: IPageData | null;
  preview: boolean;
  slug: string | null;
  token: string | null;
  header: IHeaderPayload;
  footer: IFooterPayload;
}

interface Query {
  [key: string]: string;
}

interface PreviewData {
  token?: string;
}

// @ts-ignore
export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {} } = ctx;

  const params = { slug: null };

  if (preview && previewData.token) {
    return {
      props: {
        data: null,
        preview,
        slug: params?.slug || null,
        token: previewData.token,
      },
    };
  }

  const data = await client.fetch(NOT_FOUND_PAGE_DATA_QUERY);

  const { header, footer }: any = await client.fetch(
    `{
    "header": ${HEADER_QUERY},
    "footer": ${FOOTER_QUERY},

  }`
  );

  return {
    props: {
      data,
      preview,
      slug: params?.slug || null,
      token: null,
      header,
      footer,
    },
  };
};

export default function Custom404(props: PageProps) {
  const { data, preview, slug, token, header, footer } = props;

  if (preview) {
    return (
      <PreviewSuspense
        fallback={<LoadingScreen>Loading preview…</LoadingScreen>}
      >
        <LazyPreviewPage slug={slug} token={token} />
      </PreviewSuspense>
    );
  }

  return <PageScreen data={data} header={header} footer={footer} />;
}
