import { core, View, VStack, TextLabel, List } from "zaffre";
import { Box, Button, ch, HStack } from "zaffre";
import { HelloModel4 } from "./HelloModel4";

export function HelloWorld4(): View {
  const model = new HelloModel4();

  function createLabel(text: string): View {
    return TextLabel(text, {
      color: core.color.primary,
      font: core.font.headline_medium,
    });
  }
  return VStack({
    gap: core.space.s5,
    alignItems: "center",
    padding: core.space.s6,
    maxWidth: ch(120),
  }).append(
    Box({ border: core.border.thin, padding: core.space.s3 }).append(
      List(
        model.textValues,
        (text) => text,
        (text) => createLabel(text)
      )
    ),
    HStack({ gap: core.space.s5 }).append(
      Button({ label: "Push row", action: () => model.pushRow() }),
      Button({
        label: "Pop row",
        disabled: model.disabled,
        action: () => model.popRow(),
      })
    )
  );
}
