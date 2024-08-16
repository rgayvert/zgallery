import { ArrayAtom, LocalData, createArrayAtom, atom, createTimerAtom, zget, incrementAtom, zutil } from "zaffre";

// Card images are from Byron Knoll, https://byronknoll.blogspot.com/2011/03/vector-playing-cards.html

enum Suit {
  clubs,
  diamonds,
  hearts,
  spades,
}
const Points = {
  stockToTalon: 0, 
  talonToFoundation: 10,
  tableauToFoundation: 10,
  talonToTableau: 5,
  tableauToTableau: 5,
  none: 0,
};

export class Card {
  static suits = ["clubs", "diamonds", "hearts", "spades"];
  static suitColors = ["black", "red", "red", "black"];
  static names = ["ace", ...zutil.sequence(2, 9).map((i) => i.toString()), "jack", "queen", "king"];
  static cardID = 0;
  static nextID(): number {
    return this.cardID++;
  }

  suit: Suit;
  indexInSuit: number;
  name: string;
  pile?: Pile;

  faceup = atom(false, { name: `${this.toString()}-faceup` });
  imageName = atom(() => this.getImageName());
  cardID: number;

  frontImageName(): string {
    return `playing_card.${this.fullName}`;
  }
  getImageName(): string {
    return this.faceup.get() ? this.frontImageName() : "playing_card.back";
  }
  getCardID(): number {
    return Card.nextID();
  }

  constructor(public index: number) {
    this.cardID = this.getCardID();
    if (index === 0) {
      this.suit = 0;
      this.name = "blank";
      this.indexInSuit = 0;
    } else {
      this.suit = Math.floor((index - 1) / 13);
      this.indexInSuit = ((index - 1) % 13) + 1;
      this.name = Card.names[this.indexInSuit - 1];
    }
  }
  get fullName(): string {
    return `${Card.suits[this.suit]}_${this.name}`;
  }
  toString(): string {
    return this.fullName;
  }
  get color(): string {
    return Card.suitColors[this.suit];
  }
  isFaceUp(): boolean {
    return this.faceup.get();
  }
  turnFaceUp(): void {
    this.faceup.set(true);
  }
  turnFaceDown(): void {
    this.faceup.set(false);
  }
  isOnTalonPile(): boolean {
    return this.pile instanceof TalonPile;
  }
  isOnFoundationPile(): boolean {
    return this.pile instanceof FoundationPile;
  }
  isOnTableauPile(): boolean {
    return this.pile instanceof TableauPile;
  }
  isLastInPile(): boolean {
    return this === this.pile?.lastCard();
  }
  indexInPile(): number {
    return this.pile ? this.pile.cards.get().indexOf(this) : -1;
  }
  mayMoveToFoundationPile(pile: FoundationPile): boolean {
    const topCard = pile.lastCard();
    return (
      (topCard instanceof BaseCard && this.name === "ace") ||
      (topCard !== undefined && this.isLastInPile() && this.suit === topCard.suit && this.indexInSuit === topCard.indexInSuit + 1)
    );
  }
  mayMoveToTableauPile(pile: TableauPile): boolean {
    const lastCard = pile.lastCard();
    return Boolean(
      (lastCard instanceof BaseCard && this.name === "king") ||
      (lastCard && this.color !== lastCard.color && this.indexInSuit === lastCard.indexInSuit - 1)
    );
  }
  isTopOfTableauSequence(): boolean {
    const cardAbove = this.pile?.cardAtIndex(this.indexInPile() - 1);
    return this.pile instanceof TableauPile && (cardAbove === undefined || !cardAbove.faceup.get());
  }
  isBottomOfTableauSequence(): boolean {
    return this.pile?.cardAtIndex(this.indexInPile() + 1) === undefined;
  }
  willAcceptCard(dragCard: Card): boolean {
    const pile = this.pile!;
    return (
      (dragCard && dragCard !== this && pile instanceof TableauPile && this.isBottomOfTableauSequence() && dragCard.mayMoveToTableauPile(pile)) ||
      (pile instanceof FoundationPile && dragCard.mayMoveToFoundationPile(pile))
    );
  }
  willAcceptDrop(): boolean {
    return this.pile instanceof TableauPile || this.pile instanceof FoundationPile;
  }
}
export class BaseCard extends Card {
  static baseCardID = -1;
  static nextBaseCardID(): number {
    return this.baseCardID--;
  }
  static allBaseCards: BaseCard[] = [];
  constructor() {
    super(0);
    BaseCard.allBaseCards.push(this);
  }
  getCardID(): number {
    return BaseCard.nextBaseCardID();
  }
  get fullName(): string {
    return "blank";
  }
  allowDrag(): boolean {
    return false;
  }
  turnFaceUp(): void {
    // no-up
  }
  getImageName(): string {
    return "playing_card.blank";
  }
}
export abstract class Pile {
  cards: ArrayAtom<Card>; 
  baseCard = new BaseCard();

  constructor(public name: string, initialCount = 0) {
    this.cards = createArrayAtom(Array<Card>(initialCount), { name: name }); 
  }
  get currentCards(): Card[] {
    return this.cards.get();
  }
  setCards(cards: Card[]): void {
    // NB: the order here is important, because the cards have derived atoms that depend on the pile,
    // and these will be triggered as soon as the pile changes
    cards.forEach((card) => (card.pile = this));
    // make sure we have a base card
    this.cards.set(cards.length > 0 && cards[0] instanceof BaseCard ? cards : [this.baseCard, ...cards]);
  }
  isEmpty(): boolean {
    return this.currentCards.length === 1;
  }
  lastCard(): Card | undefined {
    return this.currentCards.at(-1);
  }
  indexOfCard(card: Card): number {
    return this.currentCards.indexOf(card);
  }
  cardAtIndex(index: number): Card | undefined {
    return this.currentCards[index];
  }
  willAcceptCard(card: Card): boolean {
    return false;
  }
  acceptCard(card: Card): number {
    return 0;
  }
  addCard(card: Card): void {
    this.setCards([...this.currentCards, card]);
  }
  removeCard(card?: Card): void {
    card && this.setCards(this.currentCards.filter((c) => c !== card));
  }
  removeLastCard(): void {
    this.removeCard(this.lastCard());
  }
}
class StockPile extends Pile {
  constructor() {
    super("stock", 24);
  }
}
class TalonPile extends Pile {
  constructor() {
    super("talon");
  }
  createInitialCards(): ArrayAtom<Card> { 
    return createArrayAtom([], { name: `talon` });
  }
  acceptCard(card: Card): number {
    const stockPile = card.pile;
    stockPile?.removeCard(card);
    card.faceup.set(true);
    this.addCard(card);
    return Points.stockToTalon;
  }
}
class FoundationPile extends Pile {
  constructor(public index: number) {
    super(`foundation[${index}]`);
  }
  willAcceptCard(card: Card): boolean {
    return card.mayMoveToFoundationPile(this);
  }
  acceptCard(card: Card): number {
    const fromPile = card.pile;
    if (fromPile instanceof TalonPile || fromPile instanceof TableauPile) {
      fromPile.removeLastCard();
      this.addCard(card);
      return fromPile instanceof TalonPile ? Points.talonToFoundation : Points.tableauToFoundation;
    }
    return Points.none;
  }
}
class TableauPile extends Pile {
  constructor(public index: number) {
    super(`tableau[${index}]`);
  }
  willAcceptCard(card: Card): boolean {
    return card.mayMoveToTableauPile(this);
  }
  turnLastCardFaceUp(): void {
    this.currentCards.at(-1)?.turnFaceUp();
  }
  setCards(cards: Card[]): void {
    super.setCards(cards);
    this.turnLastCardFaceUp(); 
  }
  removeLastCard(): void {
    super.removeLastCard();
    this.turnLastCardFaceUp();
  }
  acceptCard(card: Card): number {
    const fromPile = card.pile;
    if (fromPile instanceof TalonPile || fromPile instanceof FoundationPile) {
      fromPile.removeLastCard();
      this.addCard(card);
      return Points.talonToTableau;
    } else if (fromPile instanceof TableauPile) {
      const index = card.indexInPile();
      const cardsToMove = fromPile.cards.get().slice(index);
      fromPile.setCards(fromPile.cards.get().slice(0, index));
      fromPile.turnLastCardFaceUp();
      this.setCards([...this.cards.get(), ...cardsToMove]);
      return Points.tableauToTableau;
    }
    return Points.none;
  }
}

export class SolitaireModel {
  data = LocalData.instance;

  newGame(): void {
    this.deal();
    this.score.set(0);
    this.elapsedTime.stop();
    //this.lowTime.set(0);
    //console.log("lowTime="+this.lowTime);
  }

  deck = zutil.sequence(1, 52).map((index) => new Card(index));
  score = atom(0);
  elapsedTime = createTimerAtom((msec) => `Time: ${zutil.formatSeconds(msec / 1000)}`, 1000);
  //elapsedTimeString = atom(() => `Time: ${zutil.formatMilliseconds(this.elapsedTime.get() * 1000)}`);
  scoreString = atom(() => `Score: ${this.score.get()}`);
  highScore = this.data.addAtom("solitaireHighScore", 0);
  highScoreString = atom(() => `High Score: ${this.highScore.get()}`);
  lowTime = this.data.addAtom("solitaireLowTime", 0);
  lowTimeString = atom(() => `Best Time: ${zutil.formatSeconds(this.lowTime.get())}`);

  addToScore(amount: number): void {
    incrementAtom(this.score, amount);
    if (this.score.get() > this.highScore.get()) {
      this.highScore.set(this.score.get());
    }
  }
  stopClock(): void {
    this.elapsedTime.stop();
    const seconds = Math.floor(this.elapsedTime.elapsedMilliseconds() / 1000);
    const lowest = this.lowTime.get();
    if (lowest === 0 || seconds < lowest) {
      this.lowTime.set(seconds);
    }
  }

  stockPile = new StockPile();
  talonPile = new TalonPile();
  foundationPiles = zutil.sequence(0, 4).map((i) => new FoundationPile(i));
  tableauPiles = zutil.sequence(0, 7).map((i) => new TableauPile(i));

  gameIsWon(): boolean {
    return !this.deck.find((c) => !c.isFaceUp()) && this.talonPile.isEmpty();
  }


  deal(): void {
    this.deck.forEach((card) => card.turnFaceDown());
    zutil.shuffle(this.deck);
    this.stockPile.setCards(this.deck.slice(0, 24));
    this.talonPile.setCards([]);
    for (let i = 0; i < 4; i++) {
      this.foundationPiles[i].setCards([]);
    }
    for (let i = 0; i < 7; i++) {
      this.tableauPiles[i].setCards([]);
    }

    let start = 24;
    for (let i = 0; i < 7; i++) {
      this.tableauPiles[i].setCards(this.deck.slice(start, start + i + 1));
      start += i + 1;
    }
  }
  findDestinationPileForCard(card: Card): Pile | undefined {
    const fromPile = card.pile;
    if (fromPile instanceof StockPile) {
      return this.talonPile;
    } else if (card.faceup.get()) {
      if (card.name === "ace") {
        return this.foundationPiles.find((p) => p.willAcceptCard(card));
      } else if (card.name === "2") {
        return this.foundationPiles.find((p) => p.willAcceptCard(card)) || this.tableauPiles.find((p) => p.willAcceptCard(card));
      } else if (fromPile instanceof TalonPile) {
        return this.tableauPiles.find((p) => p.willAcceptCard(card)) || this.foundationPiles.find((p) => p.willAcceptCard(card));
      } else if (fromPile instanceof TableauPile) {
        return this.foundationPiles.find((p) => p.willAcceptCard(card)) || this.tableauPiles.find((p) => p.willAcceptCard(card));
      } else if (fromPile instanceof FoundationPile) {
        return this.tableauPiles.find((p) => p.willAcceptCard(card));
      }
    }
    return undefined;
  }
  turnTopStockCard(): void {
    this.startTimerIfNotRunning();
    const stockCards = this.stockPile.cards.get();
    if (stockCards.length > 1) {
      const card = stockCards[stockCards.length - 1];
      this.talonPile.acceptCard(card);
    } else {
      this.flipTalonPile();
    }
  }
  flipTalonPile(): void {
    const cards = zutil.allButFirst(zget(this.talonPile.cards)).reverse();
    cards.forEach((card) => card.turnFaceDown());
    this.stockPile.setCards(cards);
    this.talonPile.setCards([]);
  }
  cardMayBeMoved(card: Card): boolean {
    const mayMoveToFoundation = Boolean(this.foundationPiles.find((p) => p.willAcceptCard(card)));
    const mayMoveToTableau = Boolean(this.tableauPiles.find((p) => p.willAcceptCard(card)));
    return (
      card.faceup &&
      ((card instanceof BaseCard && card.pile === this.stockPile) || card.pile === this.stockPile || mayMoveToFoundation || mayMoveToTableau)
    );
  }
  startTimerIfNotRunning(): void {
    if (!this.elapsedTime.isRunning()) {
      this.elapsedTime.start();
    }
  }
  cardClicked(card: Card): void {
    if (this.gameIsWon()) {
      // ignore click while running autoplay
      return;
    }
    this.startTimerIfNotRunning();
    if (card instanceof BaseCard && card.pile === this.stockPile) {
      this.flipTalonPile();
    } else {
      const toPile = this.findDestinationPileForCard( card);
      if (toPile) {
        this.addToScore(toPile.acceptCard(card));
        if (this.stockPile.isEmpty() && this.talonPile.isEmpty() && !this.deck.find((c) => !c.isFaceUp())) {
          this.autoPlay();
        }
      }
    }
    if (this.gameIsWon()) {
      this.stopClock();
    }
  }
  autoPlay(): void {
    const [card, pile] = this.findMovableCard();
    if (card) {
      this.addToScore(pile.acceptCard(card));
      setTimeout(() => {
        this.autoPlay();
      }, 100);
    }
  }
  findMovableCard(): [Card, Pile] | [undefined, undefined] {
    for (const p of this.tableauPiles) {
      const card = p.lastCard();
      if (card) {
        const pile = this.foundationPiles.find((p) => p.willAcceptCard(card));
        if (pile) {
          return [card, pile];
        }
      }
    }
    return [undefined, undefined];
  }
}
