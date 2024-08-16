import { SimpleAnimationItem, atom, Vtr2D, zutil, Rct2D } from "zaffre";
import { Pt2D, Atom } from "zaffre";

export class PongBall extends SimpleAnimationItem {
  rect = atom(() => Rct2D(this.location.get().x, this.location.get().y, 16, 16));
}
export class PongPaddle extends SimpleAnimationItem {
  constructor(public x: number, public ball: PongBall, public autoplay: boolean, public pointerY?: Atom<number>) {
    super(Pt2D(x, 200));
    if (autoplay) {
      this.bounds = Rct2D(0, 0, 640, 400);
    }
  }
  rect = atom(() => Rct2D(this.x, this.location.get().y, 16, 80));

  step(deltaT: number, elapsed: number): void {
    super.step(deltaT, elapsed);
    let targetY;
    const ballLoc = this.ball.location.get();
    const ballV = this.ball.velocity.get();
    if (this.autoplay) {
      // move to where ball will hit going straight, else middle
      if (ballV.x > 0) {
        targetY = 240;
      } else {
        const yInt = ballLoc.y - (ballLoc.x * ballV.y) / ballV.x;
        targetY = yInt < 0 || yInt > 440 ? 240 : yInt;
      }
    } else {
      // follow mouse
      targetY = this.pointerY?.get();
    }
    if (targetY) {
      const dy = zutil.clamp(targetY, 20, 460) - this.rect.get().center.y;
      this.velocity.set(Vtr2D(0, zutil.clamp(dy * 0.01, -0.5, 0.5)));
    }
  }
}
