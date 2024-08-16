import { SimpleAnimationItem, SVG, View, core, px, Rct2D, SVGCircle, SVGRectangle } from "zaffre";
import { createCounterAtom, atom, Atom, zutil, Pt2D, Point2D, AnimationModel } from "zaffre";
import { em, Switch, VStack, createFilterToken } from "zaffre";

//
// Adapted from https://codepen.io/manifestinteractive/pen/azdGyv
//

// Configuration options for pendulum waves
export interface PendulumWaves {
  nballs: number;
  height: number;
  shift: number;
  radius: number;
  period: number;
  maxBlur: number;
  maxBrightness: number;
}

// A pendulum ball just moves vertically according to a sinusoidal formula, and varies
// its brightness and blur as a function of y
class Ball extends SimpleAnimationItem {
  count = createCounterAtom(0);
  brightness: Atom<number>;
  blur: Atom<number>;
  constructor(public index: number, public initialLocation: Point2D, public config: PendulumWaves) {
    super(initialLocation);
    const k = this.index / (2 * config.radius * config.nballs) + config.shift;
    const y = atom(() => 0.9 * (config.height / 2) * Math.sin(this.count.get() * k));
    this.location = atom(() => Pt2D(initialLocation.x, y.get()));
    this.brightness = atom(() => config.maxBrightness * (y.get() / config.height + 0.5) + 1);
    this.blur = atom(() => config.maxBlur * (y.get() / config.height + 0.5));
  }
  step(_deltaT: number): void {
    this.count.increment();
  }
}
// An animation of a collection of balls that individually move vertically but create
// varying sinusoidal patterns over time.
export function PendulumWavesExample(): View {
  const model = new AnimationModel();
  function createBall(index: number, config: PendulumWaves): Ball {
    const initialLocation = Pt2D((index + 0.5) * config.radius * 2, (config.height - config.radius) / 2);
    return new Ball(index, initialLocation, config);
  }
  const config: PendulumWaves = {
    nballs: 75,
    height: 300,
    shift: 0.02,
    radius: 5,
    period: 2,
    maxBlur: 2,
    maxBrightness: 5,
  };
  const width = config.nballs * config.radius * 2;
  const r = Rct2D(0, -config.height / 2, width, config.height);
  const balls = zutil.sequence(0, config.nballs).map((index) => createBall(index, config));
  model.add(...balls);

  return VStack({ gap: core.space.s5, marginTop: em(4) }).append(
    SVG({ bounds: r, width: px(width), height: px(config.height) }).append(
      SVGRectangle({ rect: r, fill: core.color.black }),
      ...balls.map((ball) =>
        SVGCircle({
          id: `ball-${ball.index}`,
          r: config.radius,
          c: ball.location,
          fill: core.color.primary,
          filter: createFilterToken(ball.brightness, ball.blur),
          model: ball,
        })
      )
    ),
    Switch(model.running)
  );
}
