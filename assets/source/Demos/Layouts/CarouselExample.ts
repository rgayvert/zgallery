import { View, ImageBox, createCarouselAtom, lorem, zutil, Carousel } from "zaffre";
import { px, transitions, atom, LabelBox, Checkbox, VStack, core, createToggleAtom, Dots } from "zaffre";

export function CarouselExample(): View {
  const imagePaths = zutil.sequence(0, 5).map((_idx) => lorem.image(400, 300));
  const effects = { hidden: transitions.fadeIn("in&out") };
  const key = createCarouselAtom(imagePaths, imagePaths[0], { circular: true });
  const interval = atom(0);
  const autoscroll = createToggleAtom(false, { action: (b) => interval.set(b ? 3000 : 0) });
  const dots = atom(() => imagePaths.map((path) => path === key.get()));

  return VStack({ gap: core.space.s6 }).append(
    Carousel(key, (path: string) => ImageBox(path, { effects: effects }), {
      minWidth: px(400),
      minHeight: px(300),
      preloadList: imagePaths,
      intervalMillis: interval,
    }),
    Dots(dots),
    LabelBox("Scroll automatically", { side: "right" }).append(Checkbox(autoscroll))
  );
}
