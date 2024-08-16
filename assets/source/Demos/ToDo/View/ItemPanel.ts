import { View, BoxOptions, Checkbox, HStack, SharedViewState, TextButton, TextInput, zget, Atom } from "zaffre";
import { defineComponentDefaults, mergeComponentDefaults } from "zaffre";
import { atom, calc, core, pct, em } from "zaffre";
import { ToDoModel } from "../Model";
import { ToDoRecord } from "../Data";

export interface ItemPanelOptions extends BoxOptions {}

defineComponentDefaults<ItemPanelOptions>("ItemPanel", "Box", {
  width: pct(100),
  padding: core.space.s0,
  alignItems: "center",
  justifyContent: "center",
});

export function ItemPanel(item: ToDoRecord, model: ToDoModel, inOptions: ItemPanelOptions = {}): View {
  const options = mergeComponentDefaults("ItemPanel", inOptions);

  const readOnly = atom(true);
  const sharedItemPanelState: SharedViewState = {
    hovered: atom(false),
  };
  options.sharedState = sharedItemPanelState;
  options.componentName = "ItemPanel";
  options.model = [model, item];
  
  const editor = model.store.createEditor(item); // item.valueEditor(() => model.store.update(item));

  return HStack(options).append(
    Checkbox(<Atom<boolean>>editor.completed, { font: core.font.headline_medium }),
    TextInput(<Atom<string>>editor.content, {
      readOnly: readOnly,
      width: calc("100% - 5em"),
      textDecoration: atom(() => (item.completed ? "line-through" : "")),
      outlineWhenEdited: true,
      editOnDoubleClick: true,
    }),
    TextButton("x", {
      hidden: atom(() => !sharedItemPanelState.hovered?.get()),
      position: "absolute",
      right: em(0.1),
      font: core.font.title_medium,
      action: () => model.deleteRecord(item),
    })
  );
}
