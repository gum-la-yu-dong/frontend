import { useEffect, useState } from "react";

interface MetaData {
  title?: string;
  image?: string;
  url?: string;
}

const getHTML = async (url: string): Promise<string> => {
  const response = await fetch(url);
  return response.text();
};

const parseMetaData = (html: string): MetaData => {
  const metaRegex =
    /<meta[^>]+property="og:(title|image|url)"\s+content="([^"]+)"/g;

  const matches = html.matchAll(metaRegex);

  const metadataEntries = [...matches].map(
    ([, key, value]) => [key, value] as [keyof MetaData, string]
  );

  // TODO: title, image, url을 파싱하지 못했을 때의 추가적인 파싱(title, h1, img) 추가하기

  return Object.fromEntries(metadataEntries);
};

const useMetaData = (url: string): { [key: string]: string } => {
  const [metaData, setMetaData] = useState({});

  useEffect(() => {
    getHTML(url)
      .then((html) => parseMetaData(html))
      .then((meta) => setMetaData(meta))
      .catch((error: Error) => console.error(error.message));
  }, [url]);

  return metaData;
};

export default useMetaData;
