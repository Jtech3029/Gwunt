import Row from "./Row";
import { useState, type FC } from "react";
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
    const [cardsInHand, setCardsInHand] = useState<FC[]>(props.initialCards);
    const [row1Cards, setRow1Cards] = useState<FC[]>([]);
    const [row2Cards, setRow2Cards] = useState<FC[]>([]);
    const [row3Cards, setRow3Cards] = useState<FC[]>([]);
    const [cardPlayed, setCardPlayed] = useState<FC | null>(null);

    const moveCardToRow = (card: FC, rowNumber: number) => {
        // Remove card from hand
        const index = cardsInHand.indexOf(card);
        const newCardHand = cardsInHand.slice(0,index);
        // Add card to the specified row
        switch (rowNumber) {
            case 1:
                setRow1Cards([...row1Cards, card]);
                break;
            case 2:
                setRow2Cards([...row2Cards, card]);
                break;
            case 3:
                setRow3Cards([...row3Cards, card]);
                break;
            default:
                break;
        }
    };
    return(
        <>
            <Row type={rowType.MELEE} cards={row1Cards}/>
            <Row cards={row2Cards}/>
            <Row cards={row3Cards}/>
            <PlayerHand cards={cardsInHand} setCardPlayed={setCardPlayed}/>
        </>
    )
}


export default Player;