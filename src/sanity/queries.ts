import { groq } from "next-sanity";
export const HEADER_QUERY = groq`
    *[_type == 'header'][0]{
        title
    }
`;
export const FOOTER_QUERY = groq`
    *[_type == 'footer'][0]{
        title
    }
`;
export const HOME_PAGE_DATA_QUERY = groq`
    *[_type == 'home'][0]{
        title,
        titleSEO,
        descriptionSEO,
        ogImage,
    }
`;
export const PAGE_DATA_QUERY = groq`
    *[_type == 'page' && slug.current == $slug][0]{
        title,
        indexPage,
        titleSEO,
        descriptionSEO,
        ogImage,
    }
`;
export const NOT_FOUND_PAGE_DATA_QUERY = groq`
    *[_type == 'notFound'][0]{
        title,
        titleSEO,
        descriptionSEO,
        ogImage,
    }
`;
export const PAGE_PATHS_QUERY = groq`
    *[_type == 'page' && defined(slug.current)]{
        'slug': slug.current,
    }
`;
