import { Box, GradientToken, HStack, Slider, View, atom, ch, core, createColorToken, css, linearGradient } from "zaffre";

export function GradientAngleExample(): View {
  const angle = atom(45);

  function createGradient(angle: number): GradientToken {
    return linearGradient({
        angle: angle,
        startColor: createColorToken({ rgba: "#ff0000cc" }),
        endColor: createColorToken({ rgba: "#0000ffcc" }),
        stopColors: [createColorToken({ rgba: "#00ff00cc" })],
      });
  }
  return HStack({ gap: core.space.s7 }).append(
    Box({
      height: ch(20),
      width: ch(20),
      border: core.border.thin,
      background: atom(() => createGradient(angle.get())),
    }),
    Slider(angle, { maxVal: 360 })
  );
}
