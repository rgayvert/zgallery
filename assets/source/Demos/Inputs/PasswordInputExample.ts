import { atom, core, View, PasswordInput } from "zaffre";
import { ValueBox } from "./ValueBox";

export function PasswordInputExample(): View {
  const password = atom("password");
  return ValueBox(
    password,
    PasswordInput(password, {
      border: core.border.thin.color(core.color.blue),
      font: core.font.title_medium,
    })
  );
}
