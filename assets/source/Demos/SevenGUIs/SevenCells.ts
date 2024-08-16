import { View, Table, core, createSimpleTableModel, TableOptions, Box, zutil, ch } from "zaffre";
import { TableRow, createStringColumn, SimpleTableModel, TableColumns } from "zaffre";

function createTableModel(cols: string[]): SimpleTableModel {
  const rows = zutil.sequence(0, 7).map((_row) => cols.map((_col) => ""));
  rows[1][0] = "23";
  rows[2][0] = "10";
  rows[1][1] = "14";
  rows[3][3] = "=A1+B1";
  rows[4][3] = "=A1-B1";
  rows[3][4] = "=A1*A2";
  rows[5][5] = "=A1";
  const columns = cols.map((col, index) => createStringColumn(col, (r) => <string>r[index])) as TableColumns<TableRow>;
  return createSimpleTableModel(rows, columns);
}

export function SevenCells(): View {
  const cols = [..."ABCDEF"];
  const tableModel = createTableModel(cols);

  tableModel.columns.forEach((col) => {
    const f = col.formatter;
    col.formatter = (r) => expandValue(<string>f(r));
  })

  const opts: TableOptions = {
    editable: true,
    dataCellViewOptions: {
      minWidth: ch(7)
    }
  };

  function valueOfCell(result: RegExpExecArray, colName: string, rowName: string): string {
    const groups = result.groups;
    if (groups && groups[colName] && groups[rowName]) {
      const c = cols.indexOf(groups[colName]);
      const r = parseInt(groups[rowName]);
      const row = tableModel.rows.at(r) || [];
      return row[c]?.toString() || "";
    } else {
      return "";
    }
  }
  function evaluate(expr: string): string {
    const res2 = /(?<col1>[A-G])(?<row1>[0-9])(?<op>[+\-*])(?<col2>[A-G])(?<row2>[0-9])/.exec(expr);
    if (res2) {
      const val1 = parseInt(valueOfCell(res2, "col1", "row1"));
      const val2 = parseInt(valueOfCell(res2, "col2", "row2"));
      const op = res2.groups!["op"];
      return (op === "+" ? val1 + val2 : op === "-" ? val1 - val2 : val1 * val2).toString();
    }
    const res1 = /(?<col1>[A-G])(?<row1>[0-9])/.exec(expr);
    if (res1) {
      return valueOfCell(res1, "col1", "row1");
    }
    return "!!";
  }

  function expandValue(value: string): string {
    return value.startsWith("=")
      ? evaluate(value.slice(1))
      : value;
  }

  return Box({ border: core.border.thin }).append(Table(tableModel, opts));
}
