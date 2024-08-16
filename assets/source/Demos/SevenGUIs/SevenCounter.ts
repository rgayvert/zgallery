import { core, View, TextLabel, CenterBox, atom, HStack, createCounterAtom, Button, em } from "zaffre";

class SevenCounterModel {
  counter = createCounterAtom(0);
  count = atom(() => this.counter.get().toString());
}
export function SevenCounter(): View {
  const model = new SevenCounterModel();
  return CenterBox().append(
    HStack({ padding: core.space.s6, gap: core.space.s5 }).append(
      TextLabel(model.count, {
        minWidth: em(3), 
        border: core.border.thin,
        color: core.color.primary,
        font: core.font.title_medium,
        padding: core.space.s2,
      }),
      Button({ 
        label: "Count",
        action: () => model.counter.increment()
      })
    )
  );
}
