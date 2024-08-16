import { atom, core, View, NumberInput, HStack, TextLabel } from "zaffre";

export function NumberInputExample(): View {
  const number = atom(124);
  const numberValid = atom(false, { action: () => console.log("num=" + number.get()) });

  return HStack({ gap: core.space.s3 }).append(
    NumberInput(number, {
      border: core.border.thin.color(core.color.blue),
      font: core.font.title_medium,
      min: "100",
      max: "200",
      valid: numberValid,
    }),
    TextLabel("✓", {
      hidden: atom(() => !numberValid.get() || !isNaN(number.get())),
    })
  );
}
