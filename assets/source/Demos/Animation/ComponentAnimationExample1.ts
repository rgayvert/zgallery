import { Box, HStack, Switch, View, core, em } from "zaffre";
import { ComponentAnimationModel1 } from "./ComponentAnimationModel1";

export function ComponentAnimationExample1(): View {
  const model = new ComponentAnimationModel1();
  return HStack({ gap: core.space.s6 }).append(
    Box({
      animations: [model.animation],         // the animation
      rounding: core.rounding.r4,
      background: core.color.blue,
      border: core.border.thin,
      height: em(4),
      transformOrigin: "center",
      width: em(4),
    }),
    Switch(model.running)                    // controls when the animation runs
  );
}
