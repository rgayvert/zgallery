import { View, pct, IFrame, em } from "zaffre";

export function IFrameExample(): View {
  return IFrame("url.sample-website", { width: pct(90), maxHeight: em(25) });
}
