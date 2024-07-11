//this file communicates only with the sanity studio admin you will need another one for connecting to sanity through the api with groq
import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { media } from "sanity-plugin-media";
import schemas from "./sanity/schemas";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "4hglk3si",
  dataset: "production",
  title: "udemy-shop",
  apiVersion: "2023-11-21",
  basePath: "/admin",
  plugins: [deskTool(), visionTool(), media()],
  schema: { types: schemas },
});

export default config;
