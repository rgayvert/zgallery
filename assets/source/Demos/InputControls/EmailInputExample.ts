import { atom, core, View, EmailInput } from "zaffre";

export function EmailInputExample(): View {
  const text = atom("joe@example.com");
  return EmailInput(text, {
    border: core.border.thin.color(core.color.blue),
    font: core.font.title_medium,
  });
}
