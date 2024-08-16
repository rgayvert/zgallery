import { Button, createArrayAtom, Grid, atom, StringListBox, pct, em, ch } from "zaffre";
import { VStack, View, core, lorem, zutil } from "zaffre";

class ListBoxModel {
  loremList = createArrayAtom(zutil.sequence(0, 5).map((i) => lorem.words(i + 2)));
  selectedItem = atom("", { action: (item) => console.log("selection: " + item) });

  removeListItem(item: string): void {
    this.loremList.delete(item);
  }
  addListItem(): void {
    this.loremList.push(lorem.words(5));
  }
  sort(): void {
    this.loremList.toggleSort();
  }
}

export function ListBoxExample(): View {
  const model = new ListBoxModel();

  return Grid({ templateColumns: "1fr 10em", width: pct(100) }).append(
    StringListBox(model.loremList, model.selectedItem, {
      dblClickAction: (item) => model.removeListItem(<string>item),
      width: ch(50),
      maxHeight: em(10),
      overflow: "auto",
      padding: core.space.s2,
      font: core.font.body_medium,
    }),
    //),
    VStack({ gap: em(1), margin: core.space.s5 }).append(
      Button({ label: "Add Item", width: em(5), rounding: core.rounding.pill, action: () => model.addListItem() }),
      Button({ label: "Sort", width: em(5), rounding: core.rounding.pill, action: () => model.sort() })
    )
  );
}
