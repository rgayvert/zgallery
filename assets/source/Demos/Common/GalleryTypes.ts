import { View } from "zaffre";

export type GallerySection = {
  componentFn: () => View;
  title: string;
  sources: string[];
  markdown: string;
}
export type GalleryTopic = {
  sourceDir: string;
  sections: GallerySection[];
}