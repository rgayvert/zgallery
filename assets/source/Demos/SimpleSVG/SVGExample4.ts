import { SVG, View, core, SVGPath, SVGGroup, SVGUse, SVGStrokeLinejoin, px, Rct2D } from "zaffre";

export function SVGExample4(): View {
  const black = { stroke: core.color.black, fill: core.color.transparent };
  const pink = { stroke: core.color.pink, strokeWidth: 0.1, fill: core.color.transparent };
  const tail = " a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5";
  function path(loc: string, join: SVGStrokeLinejoin): View {
    return SVGPath({ d: `M${loc} ${tail}`, strokeLinejoin: join, ...black });
  }
  return SVG({ bounds: Rct2D(0, 0, 18, 12), width: px(300), height: px(200), border: core.border.thin }).append(
    path("1,5", "miter"),
    path("7,5", "round"),
    path("13,5", "bevel"),
    path("3,11", "miter-clip"),
    path("9,11", "arcs"),
    SVGGroup({ id: "highlight" }).append(SVGPath({ d: `M1,5 ${tail}`, ...pink })),
    SVGUse({ href: "#highlight", x: 6 }),
    SVGUse({ href: "#highlight", x: 12 }),
    SVGUse({ href: "#highlight", x: 2, y: 6 }),
    SVGUse({ href: "#highlight", x: 8, y: 6 })
  );
}
