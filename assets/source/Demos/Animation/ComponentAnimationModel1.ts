import { AnimationSpec, createToggleAtom } from "zaffre";

export class ComponentAnimationModel1 {
  keyFrames = [
    { transform: "rotate(0)", color: "#000" },
    { color: "#431236", offset: 0.3 },
    { transform: "rotate(360deg)", color: "#000" },
  ];
  options = {
    duration: 3000,
    iterations: Infinity,
  };
  running = createToggleAtom(true);
  animation = new AnimationSpec(this.keyFrames, this.options, this.running);
}
