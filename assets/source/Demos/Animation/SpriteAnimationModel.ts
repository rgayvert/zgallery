import { Animator, SimpleAnimationItem, Atom, SpriteMap, atom, Pt2D, Vtr2D, AnimationModel } from "zaffre";

// Rectangular coordinates of the sprite images
const pacManSpriteMap: SpriteMap = new Map([
  ["pacman-lg-wide", [-488, -16, 32, 32]],
  ["pacman-lg-open", [-520, -16, 32, 32]],
  ["pacman-lg-closed", [-552, -16, 32, 32]],
]);
const pacManSpriteNames = [...pacManSpriteMap.keys()];

class PacMan extends SimpleAnimationItem {
  spriteName: Atom<string>;
  constructor(private spriteNames: string[]) {
    super(Pt2D(0, 0), Vtr2D(0.1, 0));
    this.spriteName = atom(this.spriteNames[0]);
  }
  // move and select the next image
  step(deltaT: number, elapsed: number): void {
    super.step(deltaT, elapsed);
    const spriteIndex = Math.floor(elapsed / 100) % this.spriteNames.length;
    this.spriteName.set(this.spriteNames[spriteIndex]);
  }
}

export class SpriteAnimationModel extends AnimationModel {
  // the sprite image resource
  spriteImageURI = "sprites.pacman";

  spriteMap = pacManSpriteMap;
  pacman = new PacMan(pacManSpriteNames);

  createAnimator(): Animator {
    return new Animator({ duration: 1500 });
  }
  constructor() {
    super();
    this.setItems([this.pacman]);
  }


}
