import { Atom, TogglingMachine, atom } from "zaffre";
import { TLMachine } from "./TLMachine";

export class CWMachine extends TLMachine {
  blinkMachine: TogglingMachine;
  constructor(name: string, lightMillis: number, blinkMillis: number, active: Atom<boolean>) {
    super(name, lightMillis, active);
    this.configure();
    const blinkActive = atom(() => active.get() && this.currentStateName() === "green");
    this.blinkMachine = new TogglingMachine({ name: "blink", intervalMillis: blinkMillis, active: blinkActive });
  }
}
