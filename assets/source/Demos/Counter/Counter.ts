import { SVG, SVGContainerOptions, BasicAction, View, defineComponentDefaults, mergeComponentDefaults, pct, px, zboolean } from "zaffre";
import { SVGTextLabel, SVGTextLabelOptions, Rct2D, Rect2D, zstring, addOptionEvents } from "zaffre";
import { CounterModel } from "./CounterModel";

export interface CounterOptions extends SVGContainerOptions {
  rounded?: zboolean;
  storageKey?: string;
  defaultCount?: number;
}
defineComponentDefaults<CounterOptions>("Counter", "", {
  rounded: true,
  bounds: Rct2D(0, 0, 100, 120),
  width: pct(100),
});

function createLabel(label: zstring, bounds: Rect2D, options: SVGTextLabelOptions, action?: BasicAction): View {
  if (action) {
    addOptionEvents(options, { click: action });
  }
  return SVGTextLabel(label, {
    ...options,
    x: bounds.x,
    y: bounds.y,
    width: px(bounds.width),
    height: px(bounds.height),
    cursor: "pointer",
  });
}
export function Counter(inOptions: CounterOptions = {}): View {
  const options = mergeComponentDefaults("Counter", inOptions);
  const model = new CounterModel(options.storageKey, options.defaultCount);

  return SVG(options).append(
    createLabel(model.countString(), Rct2D(10, 10, 80, 80), { ...options, vOffset: -6 }),
    createLabel("-", Rct2D(25, 90, 20, 20), { ...options, disabled: model.mayNotDecrement }, () => model.decrement()),
    createLabel("+", Rct2D(55, 90, 20, 20), { ...options, disabled: model.mayNotIncrement }, () => model.increment())
  );
}
