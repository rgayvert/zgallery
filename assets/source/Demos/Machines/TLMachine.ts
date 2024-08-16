import { Atom, atom, IStates, ITransition, TimedMachine, TimedMachineOptions } from "zaffre";

export const lightColors = ["red", "yellow", "green"] as const;
export type lightColor = (typeof lightColors)[number];

export class TLMachine extends TimedMachine<lightColor> {
  light: Atom<lightColor> = atom("red");

  getStates(): IStates<lightColor> {
    return {
      red: { onEnter: () => this.light.set("red") },
      green: { onEnter: () => this.light.set("green") },
      yellow: { onEnter: () => this.light.set("yellow") },
    };
  }
  getTransitions(): ITransition<lightColor>[] {
    return [
      { from: "red", to: "green", when: () => this.counter.get() === 5 },
      { from: "green", to: "yellow", when: () => this.counter.get() === 4 },
      { from: "yellow", to: "red", when: () => this.counter.get() === 2 },
    ];
  }

  constructor(name: string, intervalMillis: number, active: Atom<boolean>) {
    const machineOptions: TimedMachineOptions<lightColor> = {
      name: name, 
      states: lightColors, 
      initialStateName: "red", 
      intervalMillis: intervalMillis, 
      active: active, 
      resetCounterAfterTransition: true
    };
    super(machineOptions);
    this.configure();
  }
}
