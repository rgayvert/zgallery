import { Box, Button, CenteredTextLabel, ColorToken, HStack, BoxOptions, Spacer, ToastStack, VStack, View, place } from "zaffre";
import { createColorToken, em, pct, vmin, addOptionEvents, atom, core, transitions, zutil } from "zaffre";
import { defineComponentDefaults, mergeComponentDefaults } from "zaffre";
import { WordleModel } from "./WordleModel";
import { Keyboard } from "./Keyboard";

export interface WordleOptions extends BoxOptions {}

defineComponentDefaults<WordleOptions>("Wordle", "Box", {
  height: pct(100),
  font: core.font.headline_medium,
  position: "relative",
  onIntersectionVisible: (view) => view.focus(),
  outline: core.border.none,
  padding: core.space.s5,
});

export function Wordle(inOptions: WordleOptions = {}): View {
  const options = mergeComponentDefaults("Wordle", inOptions);

  const model = new WordleModel();
  options.model = model;
  addOptionEvents(options, { keyDown: (evt: KeyboardEvent): void => keyDown(evt) });

  function keyDown(event: KeyboardEvent): void {
    if (model.gameInProgress.get()) {
      model.keyClicked(event.key.toUpperCase());
    }
  }
  function colorOfLetterBox(row: number, col: number): ColorToken {
    const ready = model.currentWord().length === model.wordLength;
    const valid = model.currentWordIsKnown();
    return row === model.currentRow.get() && ready && !valid ? core.color.red : core.color.black;
  }
  function backgroundOfLetterBox(row: number, col: number): ColorToken {
    const val = model.guesses[row][col].get();
    return row > model.matchedRow.get()
      ? core.color.lightgray
      : model.wordToMatch[col] === val
      ? core.color.green
      : val && model.wordToMatch.includes(val)
      ? core.color.orange
      : createColorToken({ rgba: "#a4aec4" });
  }
  function colorOfKeyboardKey(key: string): ColorToken {
    return !model.gameInProgress.get()
      ? core.color.lightgray
      : model.keysSeenInCorrectSpot.get().has(key)
      ? core.color.green
      : model.keysSeenInWrongSpot.get().has(key)
      ? core.color.orange
      : model.unusedLetters.get().has(key)
      ? createColorToken({ rgba: "#a4aec4" })
      : core.color.lightgray;
  }
  function letterBox(row: number, col: number): View {
    return CenteredTextLabel(model.guesses[row][col], {
      font: core.font.headline_medium,
      width: em(1.5),
      height: em(1.5),
      border: core.border.thin,
      borderRadius: vmin(1),
      color: atom(() => colorOfLetterBox(row, col)),
      effects: { contentChanged: transitions.pop() },
      background: atom(() => backgroundOfLetterBox(row, col)),
    });
  }
  return Box(options).append(
    VStack({ gap: core.space.s3 }).append(
      ...zutil
        .sequence(0, model.numberOfGuesses)
        .map((row) =>
          HStack({ justifyContent: "stretch", gap: core.space.s3 }).append(
            ...zutil.sequence(0, model.wordLength).map((col) => letterBox(row, col))
          )
        ),
      Box({ height: em(1) }),
      Keyboard({
        disabled: atom(() => !model.gameInProgress.get(), { name: "keyboard-disabled" }),
        action: (key) => model.keyClicked(key),
        keyBackground: (key: string) => colorOfKeyboardKey(key),
      }),
      Spacer(core.space.s7),
      Button({
        label: model.newGameButtonLabel,
        padding: core.space.s2,
        font: core.font.title_medium,
        color: core.color.darkgray,
        background: core.color.lightgray,
        rounding: core.rounding.pill,
        action: () => model.newGame(),
      })
    ),
    ToastStack(model.toastItems, {
      placement: place.center,
      maxItems: 1,
      duration: 1500,
    })
  );
}
