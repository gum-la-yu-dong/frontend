import { useEffect, useState } from "react";
import notFoundImg from "@@/assets/image/notFound.png";

interface MetaData {
  title: string;
  image: string;
  url: string;
}

const getHTML = async (url: string): Promise<string> => {
  const response = await fetch(url);

  return response.text();
};

const parse = {
  ogRegex(keyword: keyof MetaData): RegExp {
    return new RegExp(
      `<meta[^>]+property="og:${keyword}"\\s+content="([^"]+)"`
    );
  },

  altRegex: {
    title: [/<title[^>]+>([^<]+)/],
    image: [/<img[^>]+src="([^"]+)"/],
    url: [],
  },

  router(key: keyof MetaData, html: string): string | undefined {
    const matched = this.ogRegex(key).exec(html);

    return matched
      ? matched[1]
      : this.altRegex[key].find((regex) => regex.test(html))?.exec(html)?.[1];
  },
};

const parseMetaData = (html: string): MetaData => {
  const keys = ["title", "url", "image"] as (keyof MetaData)[];

  const entries = keys
    .map((key) => [key, parse.router(key, html)])
    .filter(([, value]) => value);

  return Object.fromEntries(entries) as MetaData;
};

const useMetaData = (url: string): MetaData => {
  const [metaData, setMetaData] = useState<MetaData>({
    image: notFoundImg,
    url,
    title: "",
  });

  useEffect(() => {
    getHTML(url)
      .then((html) => {
        const meta = parseMetaData(html);
        const relativePathRegex = /^\/.[^/]+(.*)/;

        if (relativePathRegex.test(meta.image)) {
          const { origin } = new URL(url);
          meta.image = origin + meta.image;
        }

        setMetaData((m) => ({ ...m, ...meta }));
      })

      .catch((error: Error) => console.error(error.message));
  }, [url]);

  return metaData;
};

export default useMetaData;
