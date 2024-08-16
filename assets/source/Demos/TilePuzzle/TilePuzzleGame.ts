import { Atom, DropDownButton, Ensemble, HStack, LabelBox, Page, Spacer, VStack, View, atom, core, css, pct, zutil } from "zaffre";
import { GridTilePuzzle } from "./GridTilePuzzle";
import { BoxTilePuzzle } from "./BoxTilePuzzle";

function createTilePuzzle(key: string): View {
  const [sz, type] = key.split("-");
  const size = parseInt(sz);
  return type === "Box" ? BoxTilePuzzle(size) : GridTilePuzzle(size);
}
export function TilePuzzleGame(): View {
  const sizeChoices = zutil.sequence(3, 4).map((n) => `${n} x ${n}`);
  const size = atom("");
  const typeChoices = ["Box", "Grid"];
  const type = atom("");
  const sizeAndType = atom(() => `${size.get()}-${type.get()}`);
  const menuOptions = { font: core.font.title_medium, padding: core.space.s2, rounding: core.rounding.pill };
  const labelOptions = { font: core.font.title_medium };

  function createMenuWithLabel(label: string, selection: Atom<string>, choices: string[]): View {
    return LabelBox(label, labelOptions).append(DropDownButton(selection, choices, menuOptions));
  }
  return Page().append(
    VStack({ width: pct(100), alignItems: "center" }).append(
      Spacer(core.space.s4),
      HStack({ gap: core.space.s6 }).append(
        createMenuWithLabel("Size:", size, sizeChoices),
        createMenuWithLabel("Type:", type, typeChoices),
      ),
      Ensemble(sizeAndType, (key) => createTilePuzzle(key)),
    )
  );
}
