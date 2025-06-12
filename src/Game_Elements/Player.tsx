import Row from "./Row";
import { useEffect, useState, type FC } from "react";
import PlayerHand from "./PlayerHand";

interface PlayerProps {
    playerType: boolean,
    initialCards: FC[],
    remainingCards: (Cards) => void
}

const rowType = {
    MELEE: "MELEE",
    RANGED: "RANGED",
    SUPPORT: "SUPPORT",
}

const Player: FC<PlayerProps> = (props: PlayerProps) => {
    //dummy code that generates initial cards for now
    //TODO: delete this code after implementing the real cards
    const initialCards: FC[] = [];

    for (let index = 0; index < 11; index++) {
        initialCards.push(() => {
            return (() => {
                return(
                    <div>Card {1+index}</div>
                )
            })();
        }
    )
    }

    const [cardsInHand, setCardsInHand] = useState<FC[]>(initialCards);
    const [row1Cards, setRow1Cards] = useState<FC[]>([]);
    const [row2Cards, setRow2Cards] = useState<FC[]>([]);
    const [row3Cards, setRow3Cards] = useState<FC[]>([]);
    const [cardPlayed, setCardPlayed] = useState<number>(-1);

    const selectCard = (index: number) => {
        setCardPlayed(index);
    };

    useEffect(() => {
        // If a card was played, remove it from the hand and add it to the appropriate row
        if (cardPlayed != -1) {
            const card: FC = cardsInHand[cardPlayed];
            const newHand: FC[] = cardsInHand.slice(0, cardPlayed).concat(cardsInHand.slice(cardPlayed + 1));

            setCardsInHand(newHand);

            //moveCardToRow(card, rowType.MELEE);
            setCardPlayed(-1);
            moveCardToRow(card);
        }
    });

    const moveCardToRow = (card: FC) => {

        // Add card to the specified row
        setRow1Cards([...row1Cards, card]);
    };

    return(
        <>
            <Row type={rowType.MELEE} cards={row1Cards}/>
            <Row cards={row2Cards}/>
            <Row cards={row3Cards}/>
            <PlayerHand cards={cardsInHand} selectCard={selectCard}/>
        </>
    )
}


export default Player;