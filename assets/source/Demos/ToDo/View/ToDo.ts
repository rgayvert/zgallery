import { core, Box, HDivider, HStack, List, Page, SegmentedButton, ToastStack, place } from "zaffre";
import { PageOptions, StackOptions, pct, ch, Button, RadioButtons, LocalTStore, FetchTStore } from "zaffre";
import { Spacer, TextButton, TextInput, TextLabel, VStack, View, atom, effectPair, transitions } from "zaffre";
import { defineComponentDefaults, mergeComponentDefaults } from "zaffre";
import { ToDoModel } from "../Model";
import { ToDoRecord } from "../Data";
import { ItemPanel } from "./ItemPanel";

export interface ToDoOptions extends PageOptions {}

defineComponentDefaults<ToDoOptions>("ToDo", "Page", {
  maxWidth: ch(100),
});

export function ToDo(inOptions: ToDoOptions = {}): View {
  const options = mergeComponentDefaults("ToDo", inOptions);

  const model = new ToDoModel();

  const bottomHidden = atom(() => model.itemCount() === 0);
  const clearCompletedHidden = atom(() => model.completedCount.get() === 0);

  function createInputRow(): View {
    return HStack({ width: pct(100), alignItems: "center", paddingBlockStart: core.space.s3 }).append(
      Button({
        leadingIconURI: "icon.chevron-down",
        font: core.font.headline_medium,
        title: "Toggle All",
        padding: core.space.s0,
        action: () => model.toggleAllItems(),
        border: core.border.none,
      }),
      TextInput(model.newText, {
        font: core.font.title_medium,
        placeholder: "What needs to be done?",
        firstFocus: true,
        setOnInput: false,
        readOnly: false,
        width: pct(100),
      })
    );
  }
  function createListItem(item: ToDoRecord): View {
    return ItemPanel(item, model, {
      id: `item-${item.recordID}`,
      maxWidth: options.maxWidth || ch(100),
      effects: {
        mounted: effectPair(transitions.fadeIn("in"), transitions.slide("out", "left", 0.3)),
      },
    });
  }
  function createList(): View {
    return VStack({ width: pct(100) }).append(
      List(
        model.filteredRecords,
        (item: ToDoRecord) => `item-${item.recordID}`,
        (item: ToDoRecord) => createListItem(item)
      )
    );
  }
  function createButtonPanel(): View {
    return HStack({ hidden: bottomHidden, font: core.font.body_medium, width: pct(100), padding: core.space.s4 }).append(
      TextLabel(model.count, { rounding: core.rounding.r0 }),
      Spacer(1),
      SegmentedButton(model.currentFilterName, model.filterNames, { rounding: core.rounding.r0 }),
      Spacer(1),
      TextButton("Clear Completed", {
        action: () => model.clearCompletedItems(),
        hidden: clearCompletedHidden,
      })
    );
  }

  function changeStore(storeName: string): void {
    model.setStore(
      storeName === "Local"
        ? new LocalTStore("todo", ToDoRecord)
        : new FetchTStore("http://localhost:3002/todo-api", ToDoRecord, [], model.ex)
    );
  }

  const selectedStore = atom("Local", { action: (storeName) => changeStore(storeName) });
  const storeNames = ["Local", "Remote"];

  function storeSelector(): View {
    return RadioButtons(selectedStore, storeNames, storeNames, {
      flexDirection: "row",
      radioButtonOptions: {
        onIcon: "icon.square-box-on",
        offIcon: "icon.square-box-off",
      },
    });
  }

  const stackOptions: StackOptions = {
    width: pct(100),
    rounding: core.rounding.r3,
    elevation: 5,
    alignItems: "center",
    overflow: "hidden",
    border: core.border.thin,
  };

  return Page(options).append(
    Box({ padding: core.space.s6 }).append(
      VStack({ width: pct(100), alignItems: "center" }).append(
        TextLabel("todos", { font: core.font.display_medium }),
        VStack(stackOptions).append(createInputRow(), HDivider({ width: pct(95) }), createList(), HDivider({ width: pct(99) }), createButtonPanel()),
        Spacer(core.space.s6),
        storeSelector()
      )
    ),
    ToastStack(model.toastItems, {
      placement: place.center,
      maxItems: 1,
      duration: 1500,
    })
  );
}
