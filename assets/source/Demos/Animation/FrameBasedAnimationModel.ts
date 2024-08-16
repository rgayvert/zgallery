import { Animator, SimpleAnimationItem, Pt2D, Vtr2D, AnimationModel } from "zaffre";

export class FrameBasedAnimationModel extends AnimationModel {
  // the animation items; each has a location (Point2D) and velocity (Vector2D)
  thing1 = new SimpleAnimationItem(Pt2D(0, 0), Vtr2D(0.1, 0));     // move right
  thing2 = new SimpleAnimationItem(Pt2D(180, 0), Vtr2D(-0.1, 0));  // move left

  createAnimator(): Animator {
    return new Animator({ duration: 1500 });
  }
  constructor() {
    super();
    this.setItems([this.thing1, this.thing2]);
  }

}
