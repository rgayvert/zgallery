import { PlacementPoint, View, core, atom, Box, HStack, ch, TextBox, pct } from "zaffre";
import { closestCardinalPoint, Placement, viewWithEventListener } from "zaffre";

export function CardinalPointsExample(): View {
  const refPt = atom<PlacementPoint>("xcenter-ycenter");
  const boxPlace = atom<Placement>(() => ({ referencePt: refPt.get(), viewPt: "xcenter-ycenter" }));

  function handlePointerMove(evt: PointerEvent): void {
    const view = viewWithEventListener(evt);
    if (view) {
      const pt = view?.eventPoint(evt);
      refPt.set(closestCardinalPoint(view.clientRect(), pt));
    }
  }
  return HStack({ gap: core.space.s5 }).append(
    Box({
      events: { pointerMove: (evt) => handlePointerMove(evt) },
      width: ch(20),
      height: ch(20),
      border: core.border.thin,
      margin: core.space.s6,
    }).append(
      Box({
        transition: "all 0.2s",
        width: ch(4),
        height: ch(4),
        background: core.color.red,
        placement: boxPlace,
      }),
      TextBox("The red box will follow the cursor to the nearest cardinal point on the outer box", { 
        cursor: "default",
        width: pct(100), 
        height: pct(100),
        padding: core.space.s4
      })
    )
  );
}
