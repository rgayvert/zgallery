import { atom, core, View, PasswordInput } from "zaffre";

export function PasswordInputExample(): View {
  const password = atom("password");
  return PasswordInput(password, {
    border: core.border.thin.color(core.color.blue),
    font: core.font.title_medium,
  });
}
