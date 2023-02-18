export interface Image {
  _type: string;
  alt?: string;
  asset: {
    _ref: string;
    _types: string;
  };
}

export interface IPageData {
  title?: string;
  slug?: { current?: string };
  titleSEO?: string;
  descriptionSEO?: string;
  indexPage?: boolean;
  _type?: string;
  content?: any[];
  ogImage?: Image;
}

export interface IHeaderPayload {}
export interface IFooterPayload {}
