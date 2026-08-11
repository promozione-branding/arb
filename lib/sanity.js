import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "7syl1yp2",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});
