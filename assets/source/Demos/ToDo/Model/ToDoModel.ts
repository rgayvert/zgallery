import { atom, Atom, zget, LocalTStore, TStore, createIndexedArrayAtom, ExHandler } from "zaffre";
import { ToDoRecord, RecordFilter, ToDoRecordList } from "../Data";

export class ToDoModel {

  static defaultStore(): TStore<ToDoRecord> {
    return new LocalTStore("todo", ToDoRecord);
  }

  newText = atom("", { action: (text: string) => this.createNewText(text) });
  filterNames = [RecordFilter.All, RecordFilter.Active, RecordFilter.Completed];
  currentFilterName = atom(RecordFilter.All);
  count: Atom<string>;
  activeCount = atom(0);
  filteredRecords: Atom<ToDoRecord[]>;
  completedCount: Atom<number>;
  records: ToDoRecordList;
  toastItems = createIndexedArrayAtom<string>([], { maxLength: 1 });
  ex = new ExHandler(this.toastItems);

  constructor(public store: TStore<ToDoRecord> = ToDoModel.defaultStore()) { 
    this.records = store.createRecordList();
    this.count = atom(() => this.countText());
    this.filteredRecords = atom(() => this.getFilteredRecords());
    this.completedCount = atom(() => this.records.count((record) => record.completed));
    this.records.addAll();
    
  }
  setStore(store: TStore<ToDoRecord>): void {
    this.store = store;
    this.records.store = store;
    this.records.set(store.createRecordList().get());
    this.records.addAll();
  }
  itemMatchesCurrentFilter(record: ToDoRecord): boolean {
    const filter = this.currentFilterName.get();
    return (
      filter === RecordFilter.All ||
      (zget(record.completed) && filter === RecordFilter.Completed) ||
      (!zget(record.completed) && filter === RecordFilter.Active)
    );
  }
  getFilteredRecords(): ToDoRecord[] {
    return this.records.filter((item) => this.itemMatchesCurrentFilter(item));
  }
  countText(): string {
    const count = this.getFilteredRecords().length;
    return `${count} item${count === 1 ? "" : "s"} left`;
  }
  createNewText(content: string): void {
    if (content.trim()) {
      this.records.addNew({ recordID: -1, content, completed: false });
      this.newText.set("");
    }
  }
  toggleAllItems(): void {
    const newVal = this.completedCount.get() < this.records.length;
    this.records.forEach((record) => record.completed = newVal);
  }
  clearCompletedItems(): void {
    this.records.deleteAll(...this.records.filter((record) => record.completed));
  }
  itemCount(): number {
    return this.records.length;
  }
  deleteRecord(record: ToDoRecord): void {
    this.records.deleteRecord(record);
  }
}
