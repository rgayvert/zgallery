import { HStack, core, View, LabelBox, TextLabel, Atom } from "zaffre";

export function ValueBox(value: Atom<string>, ...views: View[]): View {
  return HStack({ gap: core.space.s7, font: core.font.label_large }).append(
    ...views,
    LabelBox("Value:").append(TextLabel(value, { font: core.font.label_large }))
  );
}
