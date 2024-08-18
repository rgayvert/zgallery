import { atom, createArrayAtom } from "zaffre";

export class HelloModel4 {
  counter = 3;
  values = createArrayAtom([1, 2, 3]);
  disabled = atom(() => this.values.length === 1);
  addValue(): void {
    this.values.push(++this.counter);
  }
  removeValue(): void {
    this.values.pop();
  }
}
     