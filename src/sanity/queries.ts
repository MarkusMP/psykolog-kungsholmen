import { groq } from "next-sanity";
export const HEADER_QUERY = groq`
    *[_type == 'header'][0]{
        image,
        menuItems[]-> {
            _id,
            _type, 
            "slug": slug.current,
            title,
            linkItems[]-> {
                "slug": slug.current,
                title,
                _id,
            }
        }
    }
`;
export const FOOTER_QUERY = groq`
    *[_type == 'footer'][0]{
        image,
        copyright,
        description,
        info[],
        menuItems[] {
            _key,
            title,
            linkItems[]-> {
                "slug": slug.current,
                title,
                _id,
                _type
            }
        }
    }
`;
export const HOME_PAGE_DATA_QUERY = groq`
    *[_type == 'home'][0]{
        title,
        titleSEO,
        descriptionSEO,
        ogImage,
        content[]{
            ...,
            link-> {
                "slug": slug.current,
            },
            contactInfoList[] -> {
                infoName,
                text,
                _id
            },
            content[]{
                ...,
                link-> {
                    "slug": slug.current,
                },
            }
        }
    }
`;
export const PAGE_DATA_QUERY = groq`
    *[_type == 'page' && slug.current == $slug][0]{
        title,
        indexPage,
        titleSEO,
        descriptionSEO,
        ogImage,
        content[]{
            ...,
            link-> {
                "slug": slug.current,
            },
        }
    }
`;
export const NOT_FOUND_PAGE_DATA_QUERY = groq`
    *[_type == 'notFound'][0]{
        title,
        titleSEO,
        descriptionSEO,
        ogImage,
        content[]{
            ...,
            link-> {
                "slug": slug.current,
            },
        }
    }
`;
export const PAGE_PATHS_QUERY = groq`
    *[_type == 'page' && defined(slug.current)]{
        'slug': slug.current,
    }
`;
