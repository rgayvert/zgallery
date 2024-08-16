import { HStack, atom, core, View, TimeInput, DateTimeInput } from "zaffre";

export function TimeInputExample(): View {
  const time = atom("12:32");
  const dateTime = atom("2023-07-21T07:15");
  return HStack({ gap: core.space.s9 }).append(
    TimeInput(time, {
      border: core.border.thin.color(core.color.blue),
      font: core.font.title_medium,
    }),
    DateTimeInput(dateTime, {
      border: core.border.thin.color(core.color.blue),
      font: core.font.title_medium,
    })
  );
}
