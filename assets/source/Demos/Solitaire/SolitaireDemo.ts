import { View } from "zaffre";
import { GalleryDemo, GalleryTopic } from "../Common";
import { SolitaireGame } from ":cards";


export function SolitaireDemo(): View {
  return GalleryDemo(topic);
}

const topic: GalleryTopic = {
  sourceDir: "/source/Demos/Solitaire",
  sections: [
    {
      title: "Solitaire",
      componentFn: SolitaireGame,
      sources: ["SolitaireGame.ts", "SolitaireModel.ts", "CardComponent.ts"],
      markdown: "SolitaireGame.md",
    },

  ],
};

export default SolitaireDemo;
