import { View, core, createTimerAtom, TextLabel, atom } from "zaffre";
import { Button, HStack, zutil, ch, VStack, TimerAtom } from "zaffre";

export function TimerAtomExample(): View {
  const clock = createTimerAtom(() => `Clock: ${new Date().toLocaleTimeString()}`, 1000, {
    runImmediately: true,
  });
  const stopWatch = createTimerAtom(
    (msec) => `Stopwatch: ${zutil.formatSeconds(msec / 1000)}`,
    1000
  );
  const intervalTimer = createTimerAtom(
    (msec) => `Interval Timer: ${zutil.formatSeconds(msec / 1000)}`,
    [1000, 2000, 3000, 4000, 5000]
  );

  function createTimerWithButton(timer: TimerAtom<string>): View {
    return HStack({ gap: core.space.s3 }).append(
      TextLabel(timer, {
        padding: core.space.s2,
        font: core.font.headline_medium,
      }),
      Button({
        label: atom(() => (timer.isRunning() ? "Stop" : "Start")),
        action: () => timer.toggle(),
        width: ch(10),
        rounding: core.rounding.pill,
        ripple: false,
      })
    );
  }
  return VStack().append(
    TextLabel(clock, {
      padding: core.space.s2,
      font: core.font.headline_medium,
    }),
    createTimerWithButton(stopWatch),
    createTimerWithButton(intervalTimer)
  );
}
