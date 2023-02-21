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

export interface IHeaderPayload {
  image?: Image;
  menuItems?: IMenuItemPayload[];
}

export interface IMenuItemPayload {
  slug: string;
  title?: string;
  _id?: string;
  _type?: string;
  linkItems?: ILinkItemPayload[];
}

export interface ILinkItemPayload {
  slug: string;
  title?: string;
  _id?: string;
  _type?: string;
}

export interface IFooterPayload {}
