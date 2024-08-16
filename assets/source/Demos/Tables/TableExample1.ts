import { View, Table, loremTable, em, ScrollPanel, core } from "zaffre";

export function TableExample1(): View {
  return ScrollPanel({ maxHeight: em(10), border: core.border.thin }).append(
    Table(loremTable.tableModel(10, 7), { sortable: true })
  );
}
 