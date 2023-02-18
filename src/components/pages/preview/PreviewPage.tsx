import { usePreview } from "@/sanity/preview";
import { PageScreen } from "@/components/pages/PageScreen";
import {
  FOOTER_QUERY,
  HEADER_QUERY,
  HOME_PAGE_DATA_QUERY,
  NOT_FOUND_PAGE_DATA_QUERY,
  PAGE_DATA_QUERY,
} from "@/sanity/queries";

interface IProps {
  slug: string | null;
  token: string | null;
  locale?: string;
  canonical?: string | null;
}

export default function PreviewPage({
  slug,
  token,
  locale,
  canonical,
}: IProps) {
  return (
    <PageScreen
      data={usePreview(
        token,
        slug === null
          ? NOT_FOUND_PAGE_DATA_QUERY
          : slug === "/"
          ? HOME_PAGE_DATA_QUERY
          : PAGE_DATA_QUERY,
        {
          slug: slug,
          language: locale,
        }
      )}
      canonical={canonical}
      header={usePreview(token, HEADER_QUERY, {
        language: locale,
      })}
      footer={usePreview(token, FOOTER_QUERY, {
        language: locale,
      })}
    />
  );
}
