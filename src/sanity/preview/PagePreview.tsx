import { Box, Text } from "@sanity/ui";
import { ComponentProps, Suspense } from "react";
import { isRecord, isString, useClient } from "sanity";
import { UserViewComponent } from "sanity/desk";
import styled from "styled-components";
import { suspend } from "suspend-react";
import { previewSecretId } from "@/sanity/constants";
import { apiVersion } from "@/sanity/env";
import { getSecret } from "@/sanity/secret";

const FETCH_SECRET = Symbol("preview.secret");

const StyledIframe = styled.iframe`
  border: 0;
  width: 100%;
  height: 100%;
`;

export function PagePreview(props: ComponentProps<UserViewComponent>) {
  const {
    document: { displayed },
    documentId,
    schemaType,
  } = props;

  const id = documentId;
  const type = schemaType.name;
  let slug =
    isRecord(displayed.slug) && isString(displayed.slug.current)
      ? displayed.slug.current
      : undefined;

  if (displayed?._type === "home") {
    slug = "/";
  } else if (displayed?._type === "notFound") {
    slug = "/404";
  }

  if (!slug) {
    return (
      <Box>
        <Text>Missing slug</Text>
      </Box>
    );
  }

  return (
    <Suspense fallback={null}>
      <PagePreviewWithSecret id={id} slug={slug} type={type} />
    </Suspense>
  );
}

function PagePreviewWithSecret(props: {
  id: string;
  slug: string;
  type: string;
}) {
  const { id, slug, type } = props;

  const client = useClient({ apiVersion }) as any;

  // Use `suspend` to fetch the secret with a TTL of 1 minute, just to check if it's necessary to
  // recreate the secret which has a TTL of 60 minutes.
  const secret = suspend(
    () => getSecret({ client, id: previewSecretId, createIfNotExists: true }),
    ["getSecret", previewSecretId, FETCH_SECRET],
    { lifespan: 60000 }
  );

  if (!secret) {
    return <div>No secret</div>;
  }

  return (
    <StyledIframe
      src={`/api/sanity/preview?type=${type}&id=${id}&slug=${slug}&secret=${secret}`}
    />
  );
}
