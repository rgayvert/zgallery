import { View, core, TextLabel, createFetchTextAtom, resolveURI } from "zaffre";

export function FetchAtomExample(): View {
    const url = resolveURI("info/sample.txt");
    const fetchAtom = createFetchTextAtom(url);

  return TextLabel(fetchAtom, {
    font: core.font.body_large,
  });
}
