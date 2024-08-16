import { View, core, Box, HStack, VStack, Button, atom, loremTable, Table, TableOptions } from "zaffre";

export function TableExample4(): View {
  const tableModel = loremTable.tableModel(5, 7);
  const tableOptions: TableOptions = {
    sortable: true,
  };
  function mayDeleteRow(): boolean {
    return Boolean(tableModel.selectedRow.get() && tableModel.rows.length > 1);
  }
  function addRow(): void {
    tableModel.addRowAfterSelection(loremTable.tableRow(tableModel.columns));
  }
  function deleteRow(): void {
    tableModel.deleteSelectedRow();
  }
  return HStack({ gap: core.space.s7 }).append(
    Box({ border: core.border.thin }).append(Table(tableModel, tableOptions)),
    VStack({ gap: core.space.s5 }).append(
      Button({ label: "Add row", controlSize: "sm", action: () => addRow() }),
      Button({ label: "Delete row", controlSize: "sm", action: () => deleteRow(), disabled: atom(() => !mayDeleteRow()) })
    )
  );

}
