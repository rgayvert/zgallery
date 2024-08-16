import { atom, core, View, TimeInput } from "zaffre";
import { ValueBox } from "./ValueBox";

export function TimeInputExample(): View {
  const time = atom("12:32");
  return ValueBox(time, 
    TimeInput(time, {
      border: core.border.thin.color(core.color.blue),
      font: core.font.title_medium,
    }),
  );
}
