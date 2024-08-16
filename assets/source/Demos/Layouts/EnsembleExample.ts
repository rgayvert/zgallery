import { core, View, ch, atom, createColorToken, CenteredTextLabel } from "zaffre"; 
import { SegmentedTextButton, VStack, pct, Ensemble } from "zaffre";

export function EnsembleExample(): View {
  const colors = ["red", "green", "blue"];
  const selectedColor = atom("red");

  function createColorBox(colorName: string): View {
    const color = createColorToken({ cssName: colorName });
    return CenteredTextLabel(colorName, {
      width: pct(100),
      height: ch(12),
      background: color,
      color: core.color.white,
      opacity: 0.5
    });
  }

  return VStack().append(
    SegmentedTextButton(selectedColor, colors),
    Ensemble(selectedColor, (colorName) => createColorBox(colorName))
  );
}
