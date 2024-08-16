import { View, core, createArrayAtom, ScrollPanelOptions, ScrollPanel } from "zaffre";
import { TableDataCell, Icon, CenterBox, pct } from "zaffre";
import { TableColumn, TableRow, TableModel, Table, TableOptions } from "zaffre";
import { createStringColumn, createBooleanColumn, createNumericColumn } from "zaffre";

const rows: TableRow[] = [
  ["Apples", 200, 2.39, true],
  ["Bananas", 15, 0.69, false],
  ["Oranges", 13, 1.35, true],
  ["Durian", 1, 12.35, false],
];
const dollars = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
const columns = [
  createStringColumn("Fruit", (r) => <string>r[0], undefined, "left"),
  createNumericColumn("Qty", (r) => <number>r[1]),
  createNumericColumn("Price", (r) => <number>r[2], { intl: dollars }),
  createBooleanColumn("On Sale", (r) => <boolean>r[3]),
] as TableColumn<TableRow, unknown>[];

export function TableExample3(): View {
  const tableModel = new TableModel(createArrayAtom(rows), columns);
  const tableOptions: TableOptions = {
    sortable: true,
    headerCellViewOptions: {
      background: core.color.cyan,
      color: core.color.red,
    },
    dataCellViewCreator: createDataCell,
  };
  const topOptions: ScrollPanelOptions = {
    border: core.border.thin,
  };

  function createDataCell(cell: TableDataCell<unknown, unknown>): View | undefined {
    return cell.column.title === "On Sale" ? onSaleIcon(<TableDataCell<TableRow, unknown>>cell) : undefined;
  }

  function onSaleIcon(cell: TableDataCell<TableRow, unknown>): View | undefined {
    return CenterBox({ width: pct(100), height: pct(100), background: core.color.background }).append(
      Icon(cell.value.get() ? "icon.check" : "icon.blank")
    );
  }

  return ScrollPanel(topOptions).append(Table(tableModel, tableOptions));
}
