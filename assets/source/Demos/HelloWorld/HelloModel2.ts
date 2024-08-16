import { LocalData, createToggleAtom } from "zaffre";

export class HelloModel2 {
  text = LocalData.instance.addAtom("helloText2", "Hello Again");
  setOnInput = createToggleAtom(true);
  disabled = createToggleAtom(false);
  reset(): void {
    this.text.set("Hello Again");
  }
}
