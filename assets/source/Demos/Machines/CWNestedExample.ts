import { View, core, HStack, createToggleAtom } from "zaffre";
import { TL } from "./TLView";
import { TLControls } from "./TLControls";
import { CWLight } from "./CWLight";
import { CWNestedMachine } from "./CWNestedMachine";

export function CWNestedExample(): View {
  const active = createToggleAtom(false);
  const machine = new CWNestedMachine("cw", 1000, 500, active); 
  return HStack({ gap: core.space.s8 }).append(
    TL(machine),
    CWLight(machine.blink),
    TLControls(machine, active)
  );
}
