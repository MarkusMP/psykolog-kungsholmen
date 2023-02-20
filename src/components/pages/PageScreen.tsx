import Layout from "@/components/global/Layout";
import { SiteMeta } from "@/components/global/SiteMeta";
import RenderSections from "@/components/pages/RenderSections";
import { urlForImage } from "@/sanity/lib/image";
import { IFooterPayload, IHeaderPayload, IPageData } from "@/types";

interface IProps {
  data: IPageData | null;
  header: IHeaderPayload;
  footer: IFooterPayload;
  canonical?: string | null;
}

export function PageScreen(props: IProps) {
  const { data, header, footer, canonical } = props;

  const ogImage = data?.ogImage && urlForImage(data.ogImage as any)?.url();

  return (
    <>
      <SiteMeta
        noIndex={
          !data?.indexPage ? false : data.indexPage === true ? true : false
        }
        title={data?.titleSEO}
        description={data?.descriptionSEO}
        ogImage={ogImage}
        canonical={canonical}
      />
      <Layout header={header} footer={footer}>
        {data?.content && <RenderSections sections={data.content} />}
      </Layout>
    </>
  );
}
