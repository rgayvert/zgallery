import { atom, core, View, EmailInput } from "zaffre";
import { ValueBox } from "./ValueBox";

export function EmailInputExample(): View {
  const text = atom("joe@example.com");
  return ValueBox(
    text,
    EmailInput(text, {
      border: core.border.thin.color(core.color.blue),
      font: core.font.title_medium,
    })
  );
}
