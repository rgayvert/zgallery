import { atom, core, View, NumberInput, TextLabel, HStack } from "zaffre";
import { ValueBox } from "./ValueBox";

export function NumberInputExample(): View {
  const number = atom(124, { action: (val) => checkValue(val) });
  const numberValid = atom(true);
  function checkValue(val: number): void {
    numberValid.set(val >= 100 && val <= 200);
  }

  return ValueBox(
    atom(() => number.get().toString()),

    HStack({ gap: core.space.s2 }).append(
      NumberInput(number, {
        border: core.border.thin.color(core.color.blue),
        font: core.font.title_medium,
        min: "100",
        max: "200",
        valid: numberValid,
      }),
      TextLabel("✓", {
        hidden: atom(() => !numberValid.get()),
      })
    )
  );
}
