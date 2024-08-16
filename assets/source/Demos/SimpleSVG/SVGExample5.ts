import { SVG, View, core, SVGDefs, SVGLinearGradient, SVGStop, SVGRectangle, px, pct } from "zaffre";

export function SVGExample5(): View {
  return SVG({ width: px(120), height: px(240), border: core.border.thin }).append(
    SVGDefs().append(
      SVGLinearGradient({ id: "Gradient1" }).append(
        SVGStop({ stopColor: core.color.red, offset: pct(0) }),
        SVGStop({ stopColor: core.color.black, stopOpacity: 0, offset: pct(50) }),
        SVGStop({ stopColor: core.color.blue, offset: pct(100) })
      ),
      SVGLinearGradient({ id: "Gradient2", x1: px(0), x2: px(0), y1: px(0), y2: px(0) }).append(
        SVGStop({ stopColor: core.color.red, offset: pct(0) }),
        SVGStop({ stopColor: core.color.black, stopOpacity: 0, offset: pct(50) }),
        SVGStop({ stopColor: core.color.blue, offset: pct(100) })
      )
    ),
    SVGRectangle({ x: 10, y: 10, rx: 15, ry: 15, width: "100", height: "100", fill: "url(#Gradient1)" }),
    SVGRectangle({ x: 10, y: 120, rx: 15, ry: 15, width: "100", height: "100", fill: "url(#Gradient2)" })
  );
}
