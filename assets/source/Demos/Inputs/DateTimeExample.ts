import { atom, core, View, DateTimeInput } from "zaffre";
import { ValueBox } from "./ValueBox";

export function DateTimeInputExample(): View {
  const dateTime = atom("2023-07-21T07:15");
  return ValueBox(dateTime, 
    DateTimeInput(dateTime, {
      border: core.border.thin.color(core.color.blue),
      font: core.font.title_medium,
    })
  );
}
