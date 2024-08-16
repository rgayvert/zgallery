import { View } from "zaffre";
import { GalleryDemo, GalleryTopic } from "../Common";
import { ToDo, ToDoModel } from ":todo";


export function ToDoDemo(): View {
  return GalleryDemo(topic);
}

const topic: GalleryTopic = {
  sourceDir: "/source/Demos/ToDo",
  sections: [
    {
      title: "ToDo",
      componentFn: () => ToDo(),
      sources: ["View/ToDo.ts", "View/ItemPanel.ts", "Model/ToDoModel.ts", "Data/ToDoData.ts"],
      markdown: "ToDo.md",
    },

  ],
};

export default ToDoDemo;
