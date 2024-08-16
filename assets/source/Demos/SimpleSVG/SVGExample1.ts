import { SVG, SVGCircle, SVGRectangle, SVGText, View, core, px } from "zaffre";

export function SVGExample1(): View {
  return SVG({ width: px(300), height: px(200) }).append(
    SVGRectangle({ width: "100%", height: "100%", fill: core.color.red }),
    SVGCircle({ cx: 150, cy: 100, r: 80, fill: core.color.green }),
    SVGText("SVG", { x: 150, y: 125, fontSize: px(60), textAnchor: "middle", fill: core.color.white })
  );
}
