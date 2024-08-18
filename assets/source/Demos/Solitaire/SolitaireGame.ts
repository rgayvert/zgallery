import { Box, CenterBox, Grid, HStack, BoxOptions, SimpleViewList, Spacer, TextButton, addOptionEvents, pct } from "zaffre";
import { TextLabel, VStack, View, ZStack, atom, core, zget, ch, em } from "zaffre";
import { defineComponentDefaults, mergeComponentDefaults } from "zaffre";
import { SolitaireModel, BaseCard, Pile } from "./SolitaireModel";
import { CardComponent } from "./CardComponent";

export interface SolitaireOptions extends BoxOptions {}

defineComponentDefaults<SolitaireOptions>("SolitaireGame", "Box", {
  width: pct(100), 
  outline: core.border.none,
  onIntersectionVisible: (view) => view.focus(true),
});

export function SolitaireGame(inOptions: SolitaireOptions = {}): View {
  const options = mergeComponentDefaults("SolitaireGame", inOptions);

  const model = new SolitaireModel();
  addOptionEvents(options, { 
    keyBindings: {
      "Space": () => model.turnTopStockCard(),
    },
  });

  model.deal(); 
  const allCardComponents = new Map(
    [...BaseCard.allBaseCards, ...model.deck].map((card) => [card.cardID, CardComponent(card, () => model.cardClicked(card))])
  );
  
  function makeStack(pile: Pile, name: string, offset = "0"): View {
    const items = atom(() => zget(pile.cards).map((card) => allCardComponents.get(card.cardID)!));
    return ZStack({
      name: name,
      offsetY: offset,
      hasBaseView: true,
      padding: core.space.s0,
      font: core.font.display_medium,
    }).append(SimpleViewList(items));
  }
  return CenterBox(options).append(
    VStack({ maxWidth: ch(100), padding: core.space.s3, alignItems: "center" }).append(
      HStack({ padding: core.space.s3 }).append(
        TextLabel(model.highScoreString, { font: core.font.title_medium }),
        Spacer(core.space.s4),
        TextLabel(model.lowTimeString, { font: core.font.title_medium }),
        Spacer(core.space.s6),
        TextLabel(model.scoreString, { font: core.font.title_medium }),
        Spacer(core.space.s4),
        TextLabel(model.elapsedTime, { font: core.font.title_medium }),
        Box({ width: em(3) }),
        TextButton("New Game",{ padding: core.space.s0, font: core.font.title_medium, action: () => model.newGame() })
      ),
    
    Grid({ gap: core.space.s2, templateRows: "1fr 4fr", outlineGridCells: true, ncolumns: 7, width: pct(100), aspectRatio: 6 / 5 }).append(
      makeStack(model.stockPile, "stock"),
      makeStack(model.talonPile, "talon"),
      Box({ name: "filler" }),
      ...model.foundationPiles.map((pile, index) => makeStack(pile, `foundation_${index}`)),
      ...model.tableauPiles.map((pile, index) => makeStack(pile, `tableau_${index}`, "5%"))
    )
  ));
}

export default SolitaireGame;
