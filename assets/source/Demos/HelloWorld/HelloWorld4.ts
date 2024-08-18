import { core, View, VStack, TextLabel, List } from "zaffre";
import { Button, HStack } from "zaffre";
import { HelloModel4 } from "./HelloModel4";

export function HelloWorld4(): View {
  const model = new HelloModel4();
  function createLabel(value: number): View {
    return TextLabel(`${value}`, {
      font: core.font.title_medium,
      border: core.border.thin,
      padding: core.space.s2,
    });
  }
  return VStack({ gap: core.space.s5 }).append(
    HStack({ gap: core.space.s4, padding: core.space.s4 }).append(
      List(
        model.values,
        (val) => val,
        (val) => createLabel(val)
      )
    ),
    HStack({ gap: core.space.s5 }).append(
      Button({ label: "Add", action: () => model.addValue() }),
      Button({ label: "Remove", disabled: model.disabled, action: () => model.removeValue() })
    )
  );
}
