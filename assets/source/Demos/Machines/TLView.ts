import { View, core, SVG, px, Box, SVGCircle, ColorToken, atom, Atom, Rct2D, BoxOptions } from "zaffre";
import { TLMachine } from "./TLMachine";

export function TL(machine: TLMachine): View {
  const colors = ["red", "yellow", "green"] as const;
  const lights = {
    red: atom(() => (machine.light.get() === "red" ? core.color.red : core.color.gray)),
    yellow: atom(() => (machine.light.get() === "yellow" ? core.color.yellow : core.color.gray)),
    green: atom(() => (machine.light.get() === "green" ? core.color.green : core.color.gray)),
  };
  function createLight(light: Atom<ColorToken>, color: ColorToken, y: number): View {
    return SVGCircle({
      cx: 30,
      cy: y,
      stroke: core.color.black,
      r: 25,
      strokeWidth: 2,
      fill: light,
      transition: "fill 0.3s",
    });
  }
  const boxOptions: BoxOptions = {
    border: core.border.thin,
    rounding: core.rounding.r3,
    background: core.color.gray,
    model: machine,
  };
  return Box(boxOptions).append(
    SVG({ bounds: Rct2D(0, 0, 60, 170), width: px(60), height: px(160) }).append(
      ...colors.map((color, index) => createLight(lights[color], core.color[color], index * 55 + 30))
    )
  );
}
