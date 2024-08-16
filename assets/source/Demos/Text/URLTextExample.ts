import { View, core, URLText, em, ScrollPanel, pct } from "zaffre";
import { highlightSourceText } from ":services";

export function URLTextExample(): View {
  return ScrollPanel({ width: pct(100), height: pct(100) }).append(
    URLText("info/sample.txt", {
      border: core.border.thin,
      padding: core.space.s4,
      height: em(12),
      overflow: "scroll",
      textTransformFn: highlightSourceText,
    })
  );
}
