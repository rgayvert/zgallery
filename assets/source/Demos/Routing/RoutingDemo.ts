import { View } from "zaffre";
import { GalleryDemo, GalleryTopic } from "../Common";
import { EnsembleRoutingExample } from "./EnsembleRoutingExample";
import { LinkExample } from "./LinkExample";

export function RoutingDemo(): View {
  return GalleryDemo(topic);
}

const topic: GalleryTopic = {
  sourceDir: "/source/Demos/Routing",
  sections: [
    {
      title: "Ensemble Routing",
      componentFn: EnsembleRoutingExample,
      sources: ["EnsembleRoutingExample.ts"],
      markdown: "EnsembleRoutingExample.md",
    },
    {
      title: "Links",
      componentFn: LinkExample,
      sources: ["LinkExample.ts"],
      markdown: "LinkExample.md",
    },
  ],
};

export default RoutingDemo;
