import { View, core, Box, atom, Icon, TogglingMachine } from "zaffre";

export function CWLight(machine: TogglingMachine): View {
  const iconURI = atom(() => (machine.isActive() ? "icon.walk" : "icon.stop"));
  const opacity = atom(() => (machine.isActive() && machine.isOff() ? 0.2 : 1.0));
  const color = atom(() => (machine.isActive() ? core.color.green : core.color.red));

  return Box({
    border: core.border.medium,
    background: core.color.background,
    padding: core.space.s4,
    model: machine,
  }).append(Icon(iconURI, { font: core.font.display_medium, opacity: opacity, color: color }));
}
