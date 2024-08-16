import { View, core, HStack, createToggleAtom } from "zaffre";
import { TL } from "./TLView";
import { TLControls } from "./TLControls";
import { CWMachine } from "./CWMachine";
import { CWLight } from "./CWLight";

export function CWExample(): View {
  const active = createToggleAtom(false);
  const machine = new CWMachine("cw", 1000, 500, active); 
  return HStack({ gap: core.space.s8 }).append(
    TL(machine),
    CWLight(machine.blinkMachine),
    TLControls(machine, active)
  );
}
