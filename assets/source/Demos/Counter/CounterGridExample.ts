import { Grid, Page, View, core, vmin  } from "zaffre";
import { Counter } from "./Counter";

export function CounterGridExample(): View {
  return Page().append(
    Grid({ nrows: 2, ncolumns: 2, gap: core.space.s2, outlineGridCells: true, width: vmin(70) }).append(
      Counter({ storageKey: "counter1", defaultCount: 10 }),
      Counter({ storageKey: "counter2", defaultCount: 20 }),
      Counter({ rounded: false, storageKey: "counter3", defaultCount: 30 }),
      Counter({ rounded: false, storageKey: "counter4", defaultCount: 40 })
    )
  );
}
