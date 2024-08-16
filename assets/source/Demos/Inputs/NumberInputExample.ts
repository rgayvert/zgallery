import { atom, core, View, NumberInput, TextLabel } from "zaffre";
import { ValueBox } from "./ValueBox";

export function NumberInputExample(): View {
  const number = atom(124);
  const numberValid = atom(false, { action: () => console.log("num=" + number.get()) });

  return ValueBox(atom(() => number.get().toString()), 

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
