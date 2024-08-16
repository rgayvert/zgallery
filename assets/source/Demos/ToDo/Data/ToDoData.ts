import { TRecord, TRecordList } from "zaffre";

export enum RecordFilter {
  All = "All",
  Active = "Active",
  Completed = "Completed",
}

export class ToDoRecord extends TRecord {
  //recordID = 0;
  content = "";
  completed = false;
}
export type ToDoRecordList = TRecordList<ToDoRecord>;


