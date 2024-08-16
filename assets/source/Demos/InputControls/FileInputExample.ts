import { atom, core, View, FileInput } from "zaffre";

export function FileInputExample(): View {
  const fileNames = atom(<File[]>[]);
  return FileInput(fileNames, {
    multiple: true,
    font: core.font.body_medium,
    border: core.border.thin,
  });
}
