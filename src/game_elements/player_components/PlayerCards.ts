import type { JSX } from "react";

class PlayerCards {
    rowOneCards: JSX.Element[];
    rowTwoCards: JSX.Element[];
    rowThreeCards: JSX.Element[];
    cardsInHand: JSX.Element[];

    constructor(rowOneCards: JSX.Element[], rowTwoCards: JSX.Element[], rowThreeCards: JSX.Element[], cardsInHand: JSX.Element[]) {
        this.rowOneCards = rowOneCards;
        this.rowTwoCards = rowTwoCards;
        this.rowThreeCards = rowThreeCards
        this.cardsInHand = cardsInHand;
    }
}

export default PlayerCards;