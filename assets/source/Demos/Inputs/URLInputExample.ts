import { atom, core, View, URLInput } from "zaffre";
import { ValueBox } from "./ValueBox";

export function URLInputExample(): View {
  const url = atom("http://example.com");

  return ValueBox(url, 
    URLInput(url, {
      border: core.border.thin.color(core.color.blue),
      font: core.font.title_medium,
    })
  );
}
