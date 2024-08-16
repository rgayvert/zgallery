import { Atom, LocalData, atom, decrementAtom, incrementAtom, zstring } from "zaffre";

export class CounterModel {
  count: Atom<number>;
  maxValue = 99;
  minValue = -9;
  mayNotIncrement: Atom<boolean>;
  mayNotDecrement: Atom<boolean>;

  public constructor(public key = "count", public defaultValue = 10) {
    this.count = LocalData.instance.addAtom(key, defaultValue);
    this.mayNotIncrement = atom(() => this.count.get() >= this.maxValue);
    this.mayNotDecrement = atom(() => this.count.get() <= this.minValue);
  }
  countString(): zstring {
    return atom(() => this.count.get().toString());
  }

  increment(): void {
    incrementAtom(this.count);
  }
  decrement(): void {
    decrementAtom(this.count);
  }
  reset(): void {
    this.count.resetToDefaultValue();
  }
}