import { View, core, TextBox, SVG, SVGPolygon, SVGForeignObject, lorem, px, Rct2D, Polygon2D, Pt2D } from "zaffre";

export function SVGExample7(): View {
  const polygon = new Polygon2D([Pt2D(5, 5),Pt2D(195, 10),Pt2D(185, 185),Pt2D(10, 195)]);

  return SVG({ bounds: Rct2D(0, 0, 200, 200), width: px(400), height: px(400), fill: core.color.primary.contrast }).append(
    //SVGPolygon({ points: "5,5 195,10 185,185 10,195", stroke: core.color.tertiary }),
    SVGPolygon({ polygon: polygon, stroke: core.color.tertiary }),
    SVGForeignObject({ x: 20, y: 20, width: 160, height: 160 }).append(TextBox(lorem.sentences(200), { editable: true }))
  );
}
