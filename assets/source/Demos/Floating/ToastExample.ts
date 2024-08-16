import { Button, HStack, Pt2D, ToastButton, ToastStack, View, core, createIndexedArrayAtom, place } from "zaffre";

export function ToastExample(): View {
  const toastItems = createIndexedArrayAtom<string>([], { maxLength: 4 });

  function addToast(): void {
    toastItems.addValue("hey now");
  }

  return HStack({ gap: core.space.s6 }).append(
    ToastButton("Hey now", { label: "Simple" }),
    Button({ label: "Click to win", action: () => addToast() }).append(
      ToastStack(toastItems, {
        placement: { referencePt: "xend-ystart", offset: Pt2D(100, 50) },
        maxItems: 1,
        duration: 1500,
      })
    )
  );
}
