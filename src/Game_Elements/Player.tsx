import Row from "./Row";
import { useEffect, useState, type FC } from "react";
import PlayerHand from "./PlayerHand";
import { RowUnit, type RowType } from "./RowType";

interface PlayerProps {
    playerType: boolean,
    remainingCards: (Cards) => void,
    initialCards: FC[],
    firstRowCards: FC[],
    secondRowCards: FC[],
    thirdRowCards: FC[],
    isTurn: boolean
}

const Player: FC<PlayerProps> = (props: PlayerProps) => {
    const [cardsInHand, setCardsInHand] = useState<FC[]>(props.initialCards);
    const [cardPlayed, setCardPlayed] = useState<number>(-1);
    const [rowSelected, setRowSelected] = useState<RowType | null>(null);

    const selectCard = (index: number) => {
        if(props.playerTurn === props.player) {
            setCardPlayed(index);
        }
    };

    const selectRow = (rowType: RowType) => {
        if(props.playerTurn === props.player && cardPlayed != -1) {
            setRowSelected(rowType);
        }
    };

    useEffect(() => {
        if(cardPlayed != -1 && rowSelected != null) {
            props.playCard(cardPlayed, rowSelected, props.player);
            setCardPlayed(-1);
            setRowSelected(null);
        }
    },[rowSelected, cardPlayed])
    
    return(
        <>
            <Row selectRow={selectRow} rowType={RowUnit.MELEE} cardsInRow={props.cards.row1Cards}/>
            <Row selectRow={selectRow} rowType={RowUnit.RANGED} cardsInRow={props.cards.row2Cards}/>
            <Row selectRow={selectRow} rowType={RowUnit.SUPPORT} cardsInRow={props.cards.row3Cards}/>
            <PlayerHand cardsInHand={props.cards.cardsInHand} selectCard={selectCard}/>
        </>
    )
}


export default Player;