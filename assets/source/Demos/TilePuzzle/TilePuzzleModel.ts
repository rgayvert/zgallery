import { Atom, atom, zutil, Pt2D, Point2D } from "zaffre";

function indexToPoint(index: number, n: number): Point2D {
  return Pt2D(index % n, Math.floor(index / n));
}

export class Tile {
  home: Point2D;
  location: Atom<Point2D>;
  constructor(public n: number, public index: number, public initialIndex: number) {
    this.home = indexToPoint(index, n);
    this.location = atom(indexToPoint(initialIndex, n));
  }
  title(): string {
    return this.isBlank() ? "" : this.index.toString();
  }
  get current(): Point2D {
    return this.location.get();
  }
  get x(): number {
    return this.current.x;
  }
  get y(): number {
    return this.current.y;
  }
  isBlank(): boolean {
    return this.index === this.n * this.n - 1;
  }
  isHome(): boolean {
    return this.home.equals(this.current);
  }
  onSameRowAs(tile: Tile): boolean {
    return this.current.y === tile.current.y;
  }
  inSameColumnAs(tile: Tile): boolean {
    return this.current.x === tile.current.x;
  }
  moveRight(): void {
    this.location.set(Pt2D(this.x + 1, this.y));
  }
  moveLeft(): void {
    this.location.set(Pt2D(this.x - 1, this.y));
  }
  moveDown(): void {
    this.location.set(Pt2D(this.x, this.y + 1));
  }
  moveUp(): void {
    this.location.set(Pt2D(this.x, this.y - 1));
  }
}

export class TilePuzzleModel {
  tiles: Tile[];
  blank: Tile;

  constructor(n: number) {
    const initialIndexes = zutil.randomSequence(0, n * n);
    this.tiles = Array<Tile>(n * n);
    for (let i = 0; i < n * n; i++) {
      this.tiles[i] = new Tile(n, i, initialIndexes[i]);
    }
    this.blank = this.tiles[n * n - 1];
  }
  tileAt(pt: Point2D): Tile {
    return this.tiles.find((tile) => tile.current.equals(pt))!;
  }
  tileClicked(tile: Tile): void {
    this.tileIsActive(tile) && this.moveTile(tile);
  }
  tileIsActive(tile: Tile): boolean {
    return tile.onSameRowAs(this.blank) || tile.inSameColumnAs(this.blank);
  }
  moveTile(tile: Tile): void {
    const newBlankLocation = tile.current;
    if (tile.onSameRowAs(this.blank)) {
      tile.x < this.blank.x ? this.pushRight(tile) : this.pushLeft(tile);
    } else {
      tile.y < this.blank.y ? this.pushDown(tile) : this.pushUp(tile);
    }
    this.blank.location.set(newBlankLocation);
  }
  pushLeft(tile: Tile): void {
    for (let x = this.blank.x + 1; x <= tile.x; x++) {
      this.tileAt(Pt2D(x, tile.y)).moveLeft();
    }
  }
  pushRight(tile: Tile): void {
    for (let x = this.blank.x - 1; x >= tile.x; x--) {
      this.tileAt(Pt2D(x, tile.y)).moveRight();
    }
  }
  pushUp(tile: Tile): void {
    for (let y = this.blank.y + 1; y <= tile.y; y++) {
      this.tileAt(Pt2D(tile.x, y)).moveUp();
    }
  }
  pushDown(tile: Tile): void {
    for (let y = this.blank.y - 1; y >= tile.y; y--) {
      this.tileAt(Pt2D(tile.x, y)).moveDown();
    }
  }
}
