import { DateInput, HStack, atom, core, View } from "zaffre";

export function DateInputExample(): View {
  const date = atom("2023-07-21");

  return HStack({ gap: core.space.s9 }).append(
    DateInput(date, {
      border: core.border.thin.color(core.color.blue),
      rounding: core.rounding.r2,
      font: core.font.title_medium,
      min: "2023-01-01",
    }),
    DateInput(date, {
      border: core.border.thin.color(core.color.blue),
      rounding: core.rounding.r2,
      font: core.font.title_medium,
      min: "2023-01-01",
      useNativePicker: false,
    })
  );
}
