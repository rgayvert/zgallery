import { atom, core, View, FileInput } from "zaffre";
import { ValueBox } from "./ValueBox";

export function FileInputExample(): View {
  const fileNames = atom(<File[]>[]);
  return ValueBox(
    atom(() => `[${fileNames.get().map((f) => "File").join()}]`),
    FileInput(fileNames, {
      multiple: true,
      font: core.font.body_medium,
      border: core.border.thin,
    })
  );
}
