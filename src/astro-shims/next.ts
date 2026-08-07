export type Metadata = Record<string, any>;
export type NextApiRequest = {
  method?: string;
  query: Record<string, any>;
  body?: any;
  headers?: Record<string, any>;
};
export type NextApiResponse<T = any> = {
  status: (code: number) => NextApiResponse<T>;
  json: (body: T) => any;
  setHeader?: (name: string, value: string) => void;
};

export namespace MetadataRoute {
  export type Sitemap = Array<Record<string, any>>;
  export type Robots = Record<string, any>;
}

declare global {
  interface RequestInit {
    next?: {
      revalidate?: number;
      tags?: string[];
    };
  }
}
