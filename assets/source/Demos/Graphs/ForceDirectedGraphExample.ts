import { View, core, SVG, px, Box, VStack, Button, List, Rct2D, loremGraph } from "zaffre";
import { Point2D, atomx, atomy, AnimationModel, HStack, SVGContainerOptions } from "zaffre";
import { ForceDirectedGraph, SVGLine, SVGCircle, Atom, atom, FDVertex } from "zaffre";

export function ForceDirectedGraphExample(): View {
  const graph = new ForceDirectedGraph(loremGraph.graph(100, 50, { start: 1, end: 5 }), { iterations: 500 });

  const model = new AnimationModel({ duration: 5000 });
  model.add(graph);

  function createVertex(v: FDVertex): View {
    const selected = atom(false);
    return SVGCircle({
      cx: atom(() => v.data.point.get().x),
      cy: atom(() => v.data.point.get().y),
      r: v.data.mass,
      fill: core.color.blue,
      transition: "cx 0.1s, cy: 0.1s",
      selected: selected,
      draggable: true,
      onDrag: (delta) => v.data.point.set(v.data.point.get().add(delta)),
      onDragEnd: () => model.start(),
    });
  }
  function createEdge(pt1: Atom<Point2D>, pt2: Atom<Point2D>): View {
    return SVGLine({
      x1: atomx(pt1),
      y1: atomy(pt1),
      x2: atomx(pt2),
      y2: atomy(pt2),
      stroke: core.color.blue,
      transition: "x1 0.1s, y1 0.1s, x2 0.1s, x2 0.1s",
    });
  }

  const svgContainerOptions: SVGContainerOptions = {
    bounds: Rct2D(-100, -100, 200, 200),
    width: px(400),
    height: px(400),
    fill: core.color.background,
    draggableElements: true,
  };

  return VStack({ gap: core.space.s5 }).append(
    Box({ border: core.border.thin, padding: core.space.s3 }).append(
      SVG(svgContainerOptions)
        .append(
          List(
            graph.edges,
            (e) => `${e.vertex1.id}-${e.vertex2.id}`,
            (e) => createEdge(e.vertex1.data.point, e.vertex2.data.point)
          )
        )
        .append(
          List(
            graph.vertices,
            (v) => `${v.id}`,
            (v) => createVertex(v)
          )
        )
    ),
    HStack({ gap: core.space.s3 }).append(
      Button({
        label: atom(() => (model.isRunning ? "Stop" : "Start")),
        action: () => model.startOrStop(),
      })
    )
  );
}
