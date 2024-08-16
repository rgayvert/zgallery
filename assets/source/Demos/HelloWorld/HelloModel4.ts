import { atom, createArrayAtom } from "zaffre";

export class HelloModel4 {
  counter = 1;
  textValues = createArrayAtom(["Hello World 1"]);
  disabled = atom(() => this.textValues.length === 1);

  pushRow(): void {
    this.textValues.push(`Hello World ${this.counter + 1}`);
    this.counter++;
  }
  popRow(): void {
    this.textValues.pop();
  }
}
     