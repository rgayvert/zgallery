import { View, core, atom, VStack, Button, ch, pct, em, LogBox, ToggleAtom } from "zaffre";
import { TLMachine } from "./TLMachine";

export function TLControls(machine: TLMachine, active: ToggleAtom): View {
  function createButton(): View {
    return Button({
      label: atom(() => (active.get() ? "Stop" : "Start")),
      action: () => active.toggle(),
      width: ch(10),
      rounding: core.rounding.pill,
      ripple: false,
    });
  }
  function createLogView(): View {
    return LogBox(machine.logEntry, {
      width: pct(100),
      height: em(8),
      border: core.border.thin,
      padding: core.space.s2,
    });
  }
  return VStack({ width: ch(30), gap: core.space.s5 }).append(createButton(), createLogView());
}
