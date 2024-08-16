import { View, core, Box, createSimpleTableModel, SimpleTableModel, TableOptions, TableRow, TableColumns, Table, createStringColumn } from "zaffre";

function tableModel4(): SimpleTableModel {
  const rows = [
    ["AA", "BB", "CC"],
    ["DD", "EE", "FF"],
    ["GG", "HH", "II"],
  ];
  const columns = [
    createStringColumn("Col1", (r) => <string>r[0]),
    createStringColumn("Col2", (r) => <string>r[1]),
    createStringColumn("Col3", (r) => <string>r[2]),
  ] as TableColumns<TableRow>;

  return createSimpleTableModel(rows, columns);
}

export function TableExample5(): View {
  const tableModel = tableModel4();

  const tableOptions: TableOptions = {
    editable: true,
  };

  return Box({ border: core.border.thin }).append(Table(tableModel, tableOptions));
}
