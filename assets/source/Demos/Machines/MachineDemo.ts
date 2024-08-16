import { View } from "zaffre";
import { GalleryDemo, GalleryTopic } from "../Common";
import { TLExample } from "./TLExample";
import { CWExample } from "./CWExample";
import { CWNestedExample } from "./CWNestedExample";

export function MachineDemo(): View {
  return GalleryDemo(topic);
}

const topic: GalleryTopic = {
  sourceDir: "/source/Demos/Machines",
  sections: [
    {
      title: "Traffic Light",
      componentFn: TLExample,
      sources: ["TLExample.ts", "TLMachine.ts", "TL.ts", "TLControls.ts"],
      markdown: "TLExample.md",
    },
    {
      title: "Crosswalk (Concurrent)",
      componentFn: CWExample,
      sources: ["CWExample.ts", "CWMachine.ts", "CWLight.ts", "TLControls.ts", ],
      markdown: "CrosswalkExample.md",
    },
    {
      title: "Crosswalk (Nested)",
      componentFn: CWNestedExample,
      sources: ["CWNestedExample.ts", "CWNestedMachine.ts", "CWLight.ts", "TLControls.ts", ],
      markdown: "CrosswalkNestedExample.md",
    },
  ],
};

export default MachineDemo;
