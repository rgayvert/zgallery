import { Atom, TogglingMachine, atom } from "zaffre";
import { TLMachine } from "./TLMachine";

export class CWNestedMachine extends TLMachine {
  blink: TogglingMachine;
  constructor(name: string, intervalMillis: number, blinkMillis: number, active: Atom<boolean>) {
    super(name, intervalMillis, active);
    this.configure();
    this.blink = new TogglingMachine({ name: "blink", intervalMillis: blinkMillis });
    this.addSubmachine("green", this.blink);
  }
}
