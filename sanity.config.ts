import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.SANITY_PROJECTID ?? "";
const dataset = process.env.SANITY_DATASET ?? "";
const apiVersion = process.env.SANITY_API_VERSION ?? "";

if (!process.env.SANITY_PROJECTID) {
  console.warn(
    "AVISO: O ID do projeto do Sanity não está definido. O acesso à API do Sanity pode falhar."
  );
}

if (!process.env.SANITY_DATASET) {
  console.warn("AVISO: O Dataset n;ao está definido.");
}

if (!process.env.SANITY_API_VERSION) {
  console.warn("AVISO: A API version não está definida.");
}

const config = defineConfig({
  projectId,
  dataset,
  title: "My Personal Website",
  apiVersion,
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  schema: { types: schemaTypes },
});

export default config;
