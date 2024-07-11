// banner-util.js

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-11-21",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true,
});

export async function fetchBannerTextData() {
  const query = `*[_type == "bannerText"][0]{
    title,
    description,
    
  }`;

  const bannerTextData = await client.fetch(query).catch((error) => {
    console.error("Error fetching banner data:", error.message);
    throw new Error("Failed to fetch banner data");
  });

  return bannerTextData;
}
