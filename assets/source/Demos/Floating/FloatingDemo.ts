import { View } from "zaffre";
import { GalleryDemo, GalleryTopic } from "../Common";
import { MenuPlacementExample } from "./MenuPlacementExample";
import { PopoverExample } from "./PopoverExample";
import { DialogExample1 } from "./DialogExample1";
import { TooltipExample } from "./TooltipExample";
import { ToastExample } from "./ToastExample";
import { DropDownExample } from "./DropDownExample";

export function FloatingDemo(): View {
  return GalleryDemo(topic);
}

const topic: GalleryTopic = {
  sourceDir: "/source/Demos/Floating",
  sections: [
    {
      title: "Tooltip",
      componentFn: TooltipExample,
      sources: ["TooltipExample.ts"],
      markdown: "TooltipExample.md",
    },
    {
      title: "Drop-down button",
      componentFn: DropDownExample,
      sources: ["DropDownExample.ts"],
      markdown: "DropDownExample.md",
    },
    {
      title: "Menu Placement",
      componentFn: MenuPlacementExample,
      sources: ["MenuPlacementExample.ts"],
      markdown: "MenuPlacementExample.md",
    },
    {
      title: "Popovers",
      componentFn: PopoverExample,
      sources: ["PopoverExample.ts"],
      markdown: "PopoverExample.md",
    },
    {
      title: "Dialogs",
      componentFn: DialogExample1,
      sources: ["DialogExample1.ts"],
      markdown: "DialogExample1.md",
    },
    {
      title: "Toast",
      componentFn: ToastExample,
      sources: ["ToastExample.ts"],
      markdown: "ToastExample.md",
    },

  ],
};

export default FloatingDemo;

