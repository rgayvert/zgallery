import { View, VStack, Link } from "zaffre";

export function LinkExample(): View {
  return VStack().append(
    Link("link.gridexamples", { text: "Grid Example"}),
  );
}
