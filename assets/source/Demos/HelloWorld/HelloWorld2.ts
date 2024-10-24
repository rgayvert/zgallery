import { Button, LabelBox, Spacer, TextInput, TextLabel, Switch, VStack, View, HStack } from "zaffre";
import { core, customFont, em, transitions } from "zaffre";
import { HelloModel2 } from "./HelloModel2";

export function HelloWorld2(): View {
  const model = new HelloModel2();
  return VStack({ alignItems: "center", gap: core.space.s5 }).append(
    Spacer(1),
    TextInput(model.text, {
      bundles: ["pill", "b1", "f-dm"],
      textAlign: "center",
      disabled: model.disabled,
      setOnInput: model.setOnInput,
    }),
    TextLabel(model.text, {
      color: core.color.primary.tone(70),
      font: customFont({ name: "Sofia", size: 32 }),
      effects: { contentChanged: transitions.fadeIn("in", 2.0) },
    }),
    Spacer(core.space.s3),

    HStack("gap-6").append(
      Button({
        label: "Reset",
        rounding: core.rounding.pill,
        action: () => model.reset(),
      }),
      LabelBox("Disabled").append(Switch(model.disabled, { width: em(3) })),
      LabelBox("Set on Input").append(Switch(model.setOnInput, { width: em(3) })),
    ),
    Spacer(core.space.s3)
  );
}
