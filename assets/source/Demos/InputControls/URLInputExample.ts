import { atom, core, View, URLInput, HStack } from "zaffre";

export function URLInputExample(): View {
  const url = atom("http://example.com");

  return HStack({ gap: core.space.s3 }).append(
    URLInput(url, {
      border: core.border.thin.color(core.color.blue),
      font: core.font.title_medium,
    })
  );
}
