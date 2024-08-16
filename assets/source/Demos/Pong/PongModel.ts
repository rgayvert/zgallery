import { atom, Vtr2D, AnimationModel, zutil, Rct2D, Rect2D, incrementAtom } from "zaffre";
import { PongBall, PongPaddle } from "./PongItems";

export class PongModel extends AnimationModel {
  blocks = zutil.sequence(0, 15).map((i) => Rct2D(312, i * 32 + 8, 16, 16));
  startingVelocity = Vtr2D(0.3, 0);
  ball = new PongBall(zutil.randomElement(this.blocks).origin, this.startingVelocity);
  pointerY = atom(200);
  paddles = [new PongPaddle(24, this.ball, true), new PongPaddle(616, this.ball, false, this.pointerY)];
  scores = zutil.sequence(0, 2).map((i) => atom(0));
  gameOver = atom(() => this.scores[0].get() === 10 || this.scores[1].get() === 10, {
    action: (b) => b && this.stop(),
  });

  constructor() {
    super();
    this.setItems([this.ball, ...this.paddles]);
    this.ball.location.addAction(() => this.ballMoved());
  }
  start(): void {
    super.start();
    this.scores.forEach((score) => score.set(0));
  }
  initializeBall(): void {
    this.ball.location.set(zutil.randomElement(this.blocks).origin);
    this.startingVelocity = this.startingVelocity.scalarMultiply(-1);
    this.ball.velocity.set(this.startingVelocity);
  }
  ballMoved(): void {
    const ballRect = this.ball.rect.get();
    if (ballRect.intersects(this.paddles[0].rect.get())) {
      this.bounceOffPaddle(this.paddles[0], true, ballRect);
    } else if (ballRect.intersects(this.paddles[1].rect.get())) {
      this.bounceOffPaddle(this.paddles[1], false, ballRect);
    } else if (ballRect.top < 0 || ballRect.bottom > 480) {
      this.bounceOffWall();
    } else if (ballRect.left < 0) {
      incrementAtom(this.scores[1]);
      this.initializeBall();
    } else if (ballRect.right > 640) {
      incrementAtom(this.scores[0]);
      this.initializeBall();
    }
  }
  bounceOffWall(): void {
    const velocity = this.ball.velocity.get();
    this.ball.velocity.set(Vtr2D(velocity.x, -velocity.y));
  }
  bounceOffPaddle(paddle: PongPaddle, isLeft: boolean, ballRect: Rect2D): void {
    // change the angle of the ball based on where the impact is on the paddle
    const dy = (paddle.rect.get().center.y - ballRect.center.y) / paddle.rect.get().height;
    const maxAngle = Math.PI * 0.7;
    const velocity = this.ball.velocity.get();
    const angle = isLeft ? -dy * maxAngle : Math.PI + dy * maxAngle;
    this.ball.velocity.set(velocity.withAngle(angle));
  }
}
