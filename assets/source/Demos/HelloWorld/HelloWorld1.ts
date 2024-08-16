import { core, atom, zutil, View, VStack, TextInput, TextLabel, ch } from "zaffre";

export function HelloWorld1(): View {
  // a reactive value
  const text = atom("Hello World"); 
  return VStack({
    padding: core.space.s6,
    maxWidth: ch(120),
  }).append(
    // text input with reactive update on any input
    TextInput(text, {
      rounding: core.rounding.pill,
      border: core.border.thin,
      textAlign: "center",
      font: core.font.display_medium,
      placeholder: "Enter some text",
    }),
    // text label with reactive content and opacity
    TextLabel(text, {   
      color: core.color.primary,
      opacity: atom(() => zutil.clamp(text.get().length / 20, 0, 1)), 
      font: core.font.headline_medium,
    })
  );
}
