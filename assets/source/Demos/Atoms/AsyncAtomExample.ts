import { View, core, TextLabel, createAsyncAtom } from "zaffre";

function getGMT(): Promise<string> {
  return new Promise((resolve, _reject) =>
    resolve(`GMT: ${new Date().toLocaleTimeString("en-GB", { timeZone: "UTC" })}`)
  );
}
export function AsyncAtomExample(): View {
  const gmt = createAsyncAtom(() => getGMT(), "", 1000);

  return TextLabel(gmt, {
    font: core.font.headline_medium,
  });
}
