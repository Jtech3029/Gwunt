import Row from "./Row";
import Card from "../UI_Elements/Card";
import { useState } from "react";
import PlayerHand from "./PlayerHand";

interface PlayerProps {
    playerType: boolean,
    initialCards: React.ReactElement[],
}

enum rowType {
    MELEE = "MELEE",
    RANGED = "RANGED",
    SUPPORT = "SUPPORT",
}

export default function Player(props: PlayerProps) {
    const [cardsInHand, setCardsInHand] = useState<React.ReactElement[]>(props.initialCards);
    const [row1Cards, setRow1Cards] = useState<React.ReactElement[]>([]);
    const [row2Cards, setRow2Cards] = useState<React.ReactElement[][]>([]);
    const [row3Cards, setRow3Cards] = useState<React.ReactElement[][]>([]);
    

    const moveCardToRow = (card: typeof Card, rowNumber: number) => {
        // Remove card from hand

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
            <PlayerHand cards={cardsInHand}/>
        </>
    )
}