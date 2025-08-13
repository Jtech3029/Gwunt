// import type { JSX } from "react";
//
// class PlayerCards {
//     rowOneCards: JSX.Element[];
//     rowTwoCards: JSX.Element[];
//     rowThreeCards: JSX.Element[];
//     cardsInHand: JSX.Element[];
//
//     constructor(rowOneCards: JSX.Element[], rowTwoCards: JSX.Element[], rowThreeCards: JSX.Element[], cardsInHand: JSX.Element[]) {
//         this.rowOneCards = rowOneCards;
//         this.rowTwoCards = rowTwoCards;
//         this.rowThreeCards = rowThreeCards
//         this.cardsInHand = cardsInHand;
//     }
// }
//
// export default PlayerCards;
//

import type CompleteCard from "../../UI_Elements/CompleteCard";

class PlayerCards {
  rowOneCards: CompleteCard[];
  rowTwoCards: CompleteCard[];
  rowThreeCards: CompleteCard[];
  cardsInHand: CompleteCard[];

  constructor(
    rowOneCards: CompleteCard[],
    rowTwoCards: CompleteCard[],
    rowThreeCards: CompleteCard[],
    cardsInHand: CompleteCard[],
  ) {
    this.rowOneCards = rowOneCards;
    this.rowTwoCards = rowTwoCards;
    this.rowThreeCards = rowThreeCards;
    this.cardsInHand = cardsInHand;
  }
}
export default PlayerCards;
