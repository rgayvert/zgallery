import { DropDownButton, View, atom } from "zaffre";

export function DropDownExample(): View {
  const choice = atom("");
  const choices = ["First choice", "Second choice", "Third choice"];

  return DropDownButton(choice, choices);
}
