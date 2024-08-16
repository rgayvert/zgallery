import { View, Box, core, atom, px, Button, SVG, SVGRectangle } from "zaffre";
import { VStack, Rct2D, SVGText, zstring, pct, getSVGPointFromEvent } from "zaffre";
import { PongModel } from "./PongModel";
import { PongPaddle } from "./PongItems";

export function Pong(): View {
  const model = new PongModel();

  function createBall(): View {
    return SVGRectangle({
      rect: Rct2D(0, 0, 16, 16),
      fill: core.color.red,
      transform: atom(() => `translate(${model.ball.location.get().x}px, ${model.ball.rect.get().y}px`),
    });
  }
  function createPaddle(paddle: PongPaddle): View {
    return SVGRectangle({
      rect: paddle.rect.get().translateToOrigin(),
      fill: core.color.blue,
      transform: atom(() => `translate(${paddle.rect.get().x}px, ${paddle.rect.get().y}px`),
    });
  }
  function createScore(score: zstring, index: number): View {
    return SVGText(score, {
      x: index === 0 ? 270 : 370,
      y: 64,
      fontSize: px(64),
      textAnchor: "middle",
      fill: core.color.white,
    });
  }
  function createMainBox(): View {
    return SVGRectangle({
      x: 0,
      y: 0,
      width: 640,
      height: 480,
      fill: core.color.black,
      events: { pointerMove: (evt) => model.pointerY.set(getSVGPointFromEvent(evt).y) },
    });
  }

  return VStack({ width: pct(100), gap: core.space.s8 }).append(
    Box({ width: pct(90), padding: core.space.s4, background: core.color.gray }).append(
      SVG({ width: pct(100), bounds: Rct2D(0, 0, 640, 480) }).append(
        createMainBox(),
        ...model.blocks.map((block) => SVGRectangle({ rect: block, fill: core.color.white })),
        ...model.scores.map((score, idx) =>
          createScore(
            atom(() => score.get().toString()),
            idx
          )
        ),
        createBall(),
        ...model.paddles.map((paddle) => createPaddle(paddle))
      )
    ),
    Button({
      label: atom(() => (model.isRunning ? "Stop" : "Start")),
      action: () => (model.isRunning ? model.stop() : model.start()),
    })
  );
}
