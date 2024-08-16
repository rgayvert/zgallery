import { HStack, atom, core, View, ColorInput, TextLabel } from "zaffre";

export function ColorInputExample(): View {
  const color = atom("#3388DD");
  return HStack({ gap: core.space.s6 }).append(ColorInput(color), TextLabel(color));
}
