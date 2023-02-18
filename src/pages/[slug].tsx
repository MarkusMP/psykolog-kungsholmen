import { GetStaticProps } from "next";
import { notFound } from "next/navigation";
import { PreviewSuspense } from "next-sanity/preview";
import { LazyPreviewPage } from "@/components/pages/preview/LazyPreviewPage";
import { LoadingScreen } from "@/components/pages/preview/LoadingScreen";
import { PageScreen } from "@/components/pages/PageScreen";
import {
  FOOTER_QUERY,
  HEADER_QUERY,
  PAGE_DATA_QUERY,
  PAGE_PATHS_QUERY,
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
  const { params = {}, preview = false, previewData = {} } = ctx;

  if (preview && previewData.token) {
    return {
      props: {
        data: null,
        preview,
        slug: params.slug,
        token: previewData.token,
        header: null,
        footer: null,
      },
    };
  }

  const data = await client.fetch<IPageData | null>(PAGE_DATA_QUERY, {
    slug: params.slug,
  });

  if (!data) {
    notFound();
  }

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
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const pages = await client.fetch<{ slug: string }[] | null>(PAGE_PATHS_QUERY);

  const paths = [] as any;

  pages &&
    pages.map((el: any) => {
      return paths.push({ params: { slug: `${el.slug}` } });
    });

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

export default function Page(props: PageProps) {
  const { data, preview, slug, token, footer, header } = props;

  if (preview) {
    return (
      <PreviewSuspense
        fallback={<LoadingScreen>Loading preview…</LoadingScreen>}
      >
        <LazyPreviewPage
          slug={slug}
          token={token}
          canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`}
        />
      </PreviewSuspense>
    );
  }

  return (
    <PageScreen
      data={data}
      footer={footer}
      header={header}
      canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`}
    />
  );
}
