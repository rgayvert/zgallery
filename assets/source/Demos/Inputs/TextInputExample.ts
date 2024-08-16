import { atom, core, View, TextInput } from "zaffre";
import { ValueBox } from "./ValueBox";

export function TextInputExample(): View {
  const text = atom("sample text");
  return ValueBox(
    text,
    TextInput(text, {
      border: core.border.thin.color(core.color.blue),
      font: core.font.title_medium,
    })
  );
}
