// bannerImageUtil.js

import { createClient, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "udemy-shop",
  apiVersion: "2023-11-21",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export async function fetchBannerImage() {
  const query = `*[_type == 'bannerImage'][0]{
    image{
      asset->{
        _id,
        url
      },
      altText
    }
  }`;

  const bannerImage = await client.fetch(query);
  return bannerImage;
}
