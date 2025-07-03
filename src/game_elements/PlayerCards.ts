import type { FC } from "react";

class PlayerCards {
    rowOneCards: FC[];
    rowTwoCards: FC[];
    rowThreeCards: FC[];
    cardsInHand: FC[];

    constructor(rowOneCards: FC[], rowTwoCards: FC[], rowThreeCards: FC[], cardsInHand: FC[]) {
        this.rowOneCards = rowOneCards;
        this.rowTwoCards = rowTwoCards;
        this.rowThreeCards = rowThreeCards
        this.cardsInHand = cardsInHand;
    }
}

export default PlayerCards