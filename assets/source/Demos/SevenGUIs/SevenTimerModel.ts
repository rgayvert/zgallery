import { atom, zutil, createTimerAtom } from "zaffre";

export class SevenTimerModel {
  elapsedTime = atom(0, { action: (et) => this.elapsedTimeChanged(et) });
  duration = atom(10, { action: (dur) => this.durationChanged(dur) });
  timer = createTimerAtom((msec) => this.elapsedTime.set(msec / 1000), 0.1);
  percent = atom(() => (100 * this.elapsedTime.get()) / this.duration.get());
  elapsedLabel = atom(() => zutil.printRoundedTo(this.elapsedTime.get(), 1));

  elapsedTimeChanged(et: number): void {
    if (et >= this.duration.get()) {
      this.timer.pause();
    }
  }
  durationChanged(dur: number): void {
    if (this.elapsedTime.get() < this.duration.get()) {
      this.timer.resume();
    }
  }
  reset(): void {
    this.timer.restart();
  }
}
