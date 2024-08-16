import { View } from "zaffre";
import { GalleryDemo, GalleryTopic } from "../Common";
import { ListBoxExample } from "./ListBoxExample";
import { BasicTreeExample } from "./BasicTreeExample";
import { VirtualListExample } from "./VirtualListExample";
import { BulletListExample } from "./BulletListExample";

export function ListDemo(): View {
  return GalleryDemo(topic);
}

const topic: GalleryTopic = {
  sourceDir: "/source/Demos/Lists",
  sections: [
    {
      title: "List Box",
      componentFn: ListBoxExample,
      sources: ["ListBoxExample.ts"],
      markdown: "ListBoxExample.md",
    },
    {
      title: "Basic Tree",
      componentFn: BasicTreeExample,
      sources: ["BasicTreeExample.ts"],
      markdown: "BasicTreeExample.md",
    },
    {
      title: "Bullet List",
      componentFn: BulletListExample,
      sources: ["BulletListExample.ts"],
      markdown: "BulletListExample.md",
    },
    {
      title: "Virtual List",
      componentFn: VirtualListExample,
      sources: ["VirtualListExample.ts"],
      markdown: "VirtualListExample.md",
    },

  ],
};

export default ListDemo;

