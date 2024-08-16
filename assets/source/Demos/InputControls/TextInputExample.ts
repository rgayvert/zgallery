import { atom, core, View, TextInput } from "zaffre";

export function TextInputExample(): View {
  const text = atom("sample text");
  return TextInput(text, {
    border: core.border.thin.color(core.color.blue),
    font: core.font.title_medium,
  });
}
