import { View, core, HStack, createToggleAtom } from "zaffre";
import { TL } from "./TLView";
import { TLMachine } from "./TLMachine";
import { TLControls } from "./TLControls";

export function TLExample(): View {
  const active = createToggleAtom(false);
  const machine = new TLMachine("TL", 1000, active); 
  return HStack({ gap: core.space.s8 }).append(
    TL(machine),
    TLControls(machine, active)
  );
}
