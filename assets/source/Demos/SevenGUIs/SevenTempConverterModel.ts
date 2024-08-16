import { atom, zutil } from "zaffre";

export class SevenTempConverterModel {
  // to avoid circular updates, we use a separate date as the sole-source-of-truth
  temperature = atom(0);
  celsius = atom(0);
  fahrenheit = atom(32);

  constructor() {
    this.celsius.addAction((c) => this.temperature.set(c));
    this.fahrenheit.addAction((f) => this.temperature.set(((f - 32) * 5) / 9));
    this.temperature.addAction((tc) => {
      this.celsius.set(zutil.roundTo(tc, 2));
      this.fahrenheit.set(zutil.roundTo((tc * 9) / 5 + 32, 2));
    });
  }

}

