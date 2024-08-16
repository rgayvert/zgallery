import { core, View, HStack, createToggleAtom, LabelBox, Checkbox, Spacer, TextLabel, atom, ch, ToggleAtom } from "zaffre";

export function CheckboxExample(): View {
  const cbValueA = createToggleAtom(false);
  const cbValueB = createToggleAtom(false);
  const result = atom(() => `A: ${cbValueA.get()}, B: ${cbValueB.get()}`);

  function createCheckbox(label: string, value: ToggleAtom): View {
    return LabelBox(label, { side: "right" }).append(
      Checkbox(value, { font: core.font.headline_medium })
    );
  }

  return HStack({ gap: core.space.s5 }).append(
    createCheckbox("Option A", cbValueA),
    createCheckbox("Option B", cbValueB),
    Spacer(core.space.s7),
    TextLabel(result, { padding: core.space.s2, font: core.font.body_small, minWidth: ch(18) }),
  );
}
