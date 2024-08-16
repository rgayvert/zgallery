import { atom, ch, core, createColorFromHex, VStack, View } from "zaffre";
import { ColorSpaceGrid } from "./ColorSpaceGrid";
import { ColorSelector } from "./ColorSelector";

export function CustomColorsExample(): View {

  const currentColor = atom(createColorFromHex("#5588ee"));

  return VStack({ gap: core.space.s7, padding: core.space.s6 }).append(
    ColorSelector(currentColor, "customcolors"),
    ColorSpaceGrid(currentColor, { width: ch(44) }),
  );
}
