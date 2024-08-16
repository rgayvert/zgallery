import { Button, Grid, GridOptions, Page, View, atom, core, css, fractionOfWindowSize, pct, px } from "zaffre";
import { Tile, TilePuzzleModel } from "./TilePuzzleModel";

function Square(tile: Tile, model: TilePuzzleModel, n: number): View {
  return Button({
    label: tile.title(),
    rounding: core.rounding.r0,
    color: core.color.background.contrast,
    background: atom(() => (tile.isBlank() ? core.color.transparent : tile.isHome() ? core.color.green : core.color.secondaryContainer)),
    gridArea: atom(() => `${tile.y + 1} / ${tile.x + 1}`),
    fontSize: atom(() => fractionOfWindowSize(0.3 / n)),
    model: tile,
    action: () => model.tileClicked(tile),
    ripple: false,
    componentName: "Square",
  });
}
export function GridTilePuzzle(n: number): View {
  const model = new TilePuzzleModel(n);
  const gridOptions: GridOptions = {
    nrows: n,
    ncolumns: n,
    gap: px(2),
    background: core.color.blue,
    width: pct(95),
    aspectRatio: 1.0,
    marginTop: core.space.s7,
    border: core.border.medium.color(core.color.blue),
    componentName: "TilePuzzle",
  };
  return Grid(gridOptions).append(...model.tiles.map((tile) => Square(tile, model, n)));
}
