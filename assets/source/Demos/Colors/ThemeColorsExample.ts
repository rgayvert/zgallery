import { ch, core, HDivider, HDividerOptions, Page, LabelBox, Slider, List, atom, TextLabelOptions } from "zaffre";
import { SegmentedButton, Spacer, TextLabel, VStack, View } from "zaffre";
import { ThemeColorsModel } from "./ThemeColorsModel";
import { ThemeColorsGrid } from "./ThemeColorsGrid";
import { ThemeTonalPalette } from "./ThemeTonalPalette";
import { galleryThemeNames } from "../../Model/GalleryThemes";

function ThemeSelector(model: ThemeColorsModel): View {
  return VStack({ alignItems: "center", gap: core.space.s5 }).append(
    LabelBox("Theme:").append(
      SegmentedButton(model.currentThemeName, galleryThemeNames, {
        rounding: core.rounding.r0,
        font: core.font.body_small,
        tooltips: galleryThemeNames.map((themeName) => `Switch to ${themeName} theme`),
        ripple: true,
      })
    ),
    LabelBox("Mode:").append(
      SegmentedButton(model.colorMode, model.colorModeNames, {
        rounding: core.rounding.r0,
        font: core.font.body_small,
      })
    ),
    LabelBox("Contrast:").append(Slider(model.contrastRatio.get(), { minVal: 1.0, maxVal: 21.0 }))
  );
}

export function ThemeColorsExample(): View {
  const model = new ThemeColorsModel();
  const palettes = atom(() => Object.entries(model.themePalettes.get()));

  const textLabelOptions: TextLabelOptions = {
    marginTop: core.space.s6,
    font: core.font.title_medium,
    color: core.color.primary
  };
  const dividerOptions: HDividerOptions = { paddingBlock: core.space.s1 };
  const pageOptions = {
    maxWidth: ch(120),
    theme: model.currentTheme,
    componentName: "ColorDemo",
  };

  return Page(pageOptions).append(
    VStack({ alignItems: "center", gap: core.space.s5, padding: core.space.s4 }).append(
      Spacer(core.space.s3),
      ThemeSelector(model),
      Spacer(core.space.s5),
      TextLabel("Theme Colors", textLabelOptions),
      HDivider(dividerOptions),
      ThemeColorsGrid(model.themeColorTokens),
      Spacer(core.space.s5),
      TextLabel("Tonal Palettes", textLabelOptions),
      HDivider(dividerOptions),
      List(
        palettes,
        (item) => item,
        ([name, palette]) => ThemeTonalPalette(palette, name)
      )
    )
  );
}
