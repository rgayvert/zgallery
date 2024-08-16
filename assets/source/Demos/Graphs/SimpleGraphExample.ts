import { View, Graph, GraphPanel, pct, Vertex, zutil, GraphLayout, atom, core, Rct2D } from "zaffre";

export function SimpleGraphExample(): View {
  const points = [
    [10, 10],
    [40, 10],
    [40, 30],
    [70, 30],
  ];
  const edgePairs = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
  ];
  const vertices = zutil.sequence(0, 4).map((i) => new Vertex(i, {}));
  const graph = new Graph(vertices);
  edgePairs.forEach(([id1, id2]) => graph.addEdgeWithIDs(id1, id2));
  const layout: GraphLayout = {
    vertices: zutil.sequence(0, 4).map((i) => ({ id: i, x: atom(points[i][0]), y: atom(points[i][1]) })),
    edges: graph.edges.map((e) => ({ vertex1: e.vertex1.id, vertex2: e.vertex2.id })),
  };
  const layoutGraph = graph.applyLayout(layout);

  return GraphPanel(layoutGraph, {
    bounds: Rct2D(0, 0, 100, 40),
    border: core.border.thin,
    draggableElements: true,
    width: pct(50),
  });
}
