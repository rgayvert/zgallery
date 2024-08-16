import { App, LabelBox, Spacer, Switch, TextLabel, Theme, VStack, View, ZWindow, atom, core, zutil } from "zaffre";

export function FluidFontsExample(): View {
  const windowWidth = atom(() => ZWindow.instance.windowWidth.toString());
  const fontSize = atom(() => zutil.printRoundedTo(Theme.default.scaledFontSize(core.font.headline_large), 2));
  const labelOptions = { font: core.font.body_large };
  return VStack({ alignItems: "center" }).append(
    LabelBox("Fluid Fonts: ").append(Switch(App.instance.useFluidFonts, { controlSize: "sm" })),
    Spacer(core.space.s5),
    TextLabel("headline_large", { font: core.font.headline_large }),
    LabelBox("window width:", labelOptions).append(TextLabel(windowWidth)),
    LabelBox("var(--font-headline-large):", labelOptions).append(TextLabel(fontSize))
  );
}
