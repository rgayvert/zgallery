import { core, em, Atom } from "zaffre";
import { View, TextLabel, CenterBox, HStack, NumberInput } from "zaffre";
import { SevenTempConverterModel } from "./SevenTempConverterModel";

export function SevenTempConverter(): View {
  const model = new SevenTempConverterModel();

  function label(s: string): View {
    return TextLabel(s, {
      minWidth: em(3),
      color: core.color.primary,
      font: core.font.title_medium,
      padding: core.space.s2,
    });
  }
  function numberInput(val: Atom<number>): View {
    return NumberInput(val, {
      border: core.border.thin,
      decimalPlaces: 2,
      width: em(4),
    });
  }
  return CenterBox().append(
    HStack({ padding: core.space.s6, gap: core.space.s5 }).append(
      numberInput(model.celsius),
      label("Celsius"),
      label(" = "),
      numberInput(model.fahrenheit),
      label("Fahrenheit")
    )
  );
}
