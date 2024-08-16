import { Box, Button, Floating, HStack, TextLabel, View, core, em, place } from "zaffre";

export function PopoverExample(): View {
  function createPopover(): View {
    return Box({ componentName: "Popover", padding: core.space.s0 }).append(
      Box({ padding: core.space.s2 }).append(Button({ label: "Popover text", background: core.color.background }))
    );
  }

  return HStack().append(
    Box({ border: core.border.thin, rounding: core.rounding.r2, padding: core.space.s1 })
      .append(TextLabel("Click to show popover", { padding: core.space.s2 }))
      .append(Floating(createPopover(), { placement: place.top })),
    Box({ width: em(2) }),
    Box({ border: core.border.thin, rounding: core.rounding.r2, padding: core.space.s1 })
      .append(TextLabel("Hover to show popover", { padding: core.space.s2 }))
      .append(Floating(createPopover(), { showOnReferenceHover: true, placement: place.top }))
  );
}
