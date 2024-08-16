import { Atom, Button, HStack, Spacer, TextLabel, createTimerAtom, StackOptions } from "zaffre";
import { VStack, View, atom, core, px, zutil } from "zaffre";
import { YouTubeIFrame, YouTubeIFrameOptions } from "./YouTubeIFrame";

export function YouTubeExample(): View {
  const seekTime = atom(0);
  const player: Atom<YT.Player | undefined> = atom(undefined);
  const currentTime = createTimerAtom(() => getCurrentTime(), 500, { runImmediately: true });
  const playing = atom(false);
  const currentTimeString = atom(() => zutil.formatSeconds(currentTime.get()));

  function getCurrentTime(): number {
    const p = player.get();
    return p && p.getCurrentTime ? p.getCurrentTime() : 0;
  }

  function seek(delta: number): void {
    const p = player.get();
    pause();
    if (p) {
      const tt = p.getCurrentTime();
      p.seekTo(tt + delta, true);
    }
  }

  function toggle(): void {
    const p = player.get();
    if (p) {
      const state = p.getPlayerState();
      if (state === YT.PlayerState.PLAYING) {
        p.pauseVideo();
        playing.set(false);
      } else {
        p.setPlaybackRate(1);
        p.playVideo();
        playing.set(true);
      }
    }
  }
  function pause(): void {
    const p = player.get();
    if (p && p.getPlayerState() === YT.PlayerState.PLAYING) {
      player.get()?.pauseVideo();
    }
    playing.set(false);
  }

  function makeButton(label: string, deltaT: number): View {
    if (deltaT !== 0) {
      return Button({
        rounding: core.rounding.pill,
        labelOptions: {
          padding: px(0),
        },
        label: label,
        action: () => seek(deltaT),
      });
    } else {
      return Button({
        leadingIconURI: atom(() => (playing.get() ? "icon.stop-circle" : "icon.play")),
        action: () => toggle(),
        controlSize: "xxl",
        border: core.border.none,
        paddingInline: core.space.s4,
      });
    }
  }
  function createVideoButtons(): View {
    const buttonSpecs: [string, number][] = [
      ["<<<", -10],
      ["<<", -2],
      ["<", -0.5],
      ["", 0],
      [">", 0.5],
      [">>", 2],
      [">>>", 10],
    ];
    return HStack({ gap: core.space.s4 }).append(
      TextLabel(currentTimeString, { font: core.font.label_large }),
      Spacer(core.space.s6),
      ...buttonSpecs.map(([label, deltaT]) => makeButton(label, deltaT))
    );
  }
  const topOptions: StackOptions = {
    gap: core.space.s6,
    height: px(800),
    outline: "none",
    alignItems: "start",
    events: {
      keyBindings: {
        "Space": () => toggle(),
      },
    },
  };
  const videoOptions: YouTubeIFrameOptions = {
    width: px(800),
    height: px(450),
    seekTime: seekTime,
    player: player,
    controls: false,
  };

  return HStack(topOptions).append(
    VStack().append(YouTubeIFrame("p53X66_NVEg", videoOptions), Spacer(core.space.s5), createVideoButtons())
  );
}
