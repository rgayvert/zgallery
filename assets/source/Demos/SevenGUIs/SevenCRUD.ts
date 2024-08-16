import { core, atom, Atom, ch, LabelBox, ListBox, BasicAction, StackOptions, pct, em } from "zaffre";
import { Button, VStack, TextInput, HStack, View } from "zaffre";
import { SevenCRUDModel } from "./SevenCRUDModel";

export function SevenCRUD(): View {
  const model = new SevenCRUDModel();

  function textInput(label: string, value: Atom<string>): View {
    return LabelBox(label).append(
      TextInput(value, {
        border: core.border.thin,
        width: ch(15),
        textAlign: "start",
      })
    );
  }
  function button(label: string, action: BasicAction, disabled?: Atom<boolean>): View {
    return Button({
      label: label,
      action: action,
      width: ch(10),
      disabled: disabled,
      background: core.color.primaryContainer,
    });
  }

  const stackOptions: StackOptions = {
    border: core.border.thin,
    justifyContent: "center",
    padding: core.space.s6,
    gap: core.space.s8,
    model: model,
  };
  const selectionListOptions = {
    width: pct(100),
    height: em(10),
  };

  return VStack(stackOptions).append(
    HStack({ gap: core.space.s7 }).append(
      VStack({ gap: core.space.s5 }).append(
        textInput("Filter prefix:", model.filter),
        ListBox(model.filteredRecords, model.selectedRecord, (name) => model.formatRecord(name), selectionListOptions)
      ),
      VStack({ gap: core.space.s5, justifyContent: "start" }).append(textInput("Name:", model.first), textInput("Surname:", model.last))
    ),
    HStack({ gap: core.space.s5, justifyContent: "center" }).append(
      button(
        "Create",
        () => model.createRecord(),
        atom(() => !model.readyToCreate())
      ),
      button(
        "Update",
        () => model.updateRecord(),
        atom(() => !model.readyToUpdate())
      ),
      button(
        "Delete",
        () => model.deleteRecord(),
        atom(() => !model.readyToDelete())
      )
    )
  );
}
