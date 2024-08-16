import { core, View, pct, TextArea, atom, VStack } from "zaffre";

const sampleText1 = atom("Simple text area");
const sampleText2 = atom("Text area which grows or shrinks to fit the current value.");

export function TextAreaExample(): View {
  return VStack({ gap: core.space.s4 }).append(
    TextArea(sampleText1, { rows: 3, width: pct(50), font: core.font.title_medium, resize: "none" }),
    TextArea(sampleText2, { fluidHeight: true, rows: 3, cols: 40, font: core.font.title_medium, resize: "none" })
  );
}
