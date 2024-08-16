import { ScrollPanelOptions, View, em, ScrollPanel, Table, TRecord, SimpleTStore, TableModel } from "zaffre";
import { TRecordList, core, PlainRecord } from "zaffre";
import { TableColumns, TableOptions, createStringColumn, createNumericColumn } from "zaffre";

class Dummy extends TRecord {
  name = "";
  age = 0;
  city = "";
}
class Model1 {
  columns = [
    createStringColumn("Name", (r) => r.name),
    createNumericColumn("Age", (r) => r.age, { round: "round" }),
    createStringColumn("City", (r) => r.city),
  ] as TableColumns<Dummy>;
  plainRecords: PlainRecord[] = [
    { recordID: 1, name: "Joe", age: 23, city: "Toledo" },
    { recordID: 2, name: "Sue", age: 41, city: "Reno" },
    { recordID: 3, name: "Mary", age: 25, city: "Omaha" },
  ];
  store = new SimpleTStore(this.plainRecords, Dummy);
  
  allRecords(): TRecordList<Dummy> {
    const list = this.store.createRecordList();
    this.store.getAll(list);
    return list;
  }
  tableModel: TableModel<Dummy>;
  constructor() {
    this.tableModel = new TableModel(this.allRecords(), this.columns);
  }

}

export function TableExample2(): View {
  const model = new Model1();
  const topOptions: ScrollPanelOptions = {
    maxHeight: em(10),
    border: core.border.thin,
  };
  const tableOptions: TableOptions = {
    gridLines: "both",
    sortable: true
  };

  return ScrollPanel(topOptions).append(Table(model.tableModel, tableOptions));
}
