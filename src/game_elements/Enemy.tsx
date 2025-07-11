import Row from "./Row";
import { useEffect, useState, type FC } from "react";
import PlayerHand from "./PlayerHand";
import { RowUnit, type RowType } from "./game_types/RowType";

interface PlayerProps {
    playerType: boolean,
    remainingCards: (Cards) => void,
    initialCards: FC[],
    firstRowCards: FC[],
    secondRowCards: FC[],
    thirdRowCards: FC[],
    isTurn: boolean
}

const Enemy: FC<PlayerProps> = (props: PlayerProps) => {
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
    

    useEffect(() => {

        EnemyAi()
    },[playerTurn])
    return(
        <>
            <Row selectRow={selectRow} rowType={RowUnit.MELEE} cardsInRow={props.cards.rowOneCards}/>
            <Row selectRow={selectRow} rowType={RowUnit.RANGED} cardsInRow={props.cards.rowTwoCards}/>
            <Row selectRow={selectRow} rowType={RowUnit.SUPPORT} cardsInRow={props.cards.rowThreeCards}/>
            <PlayerHand cardsInHand={props.cards.cardsInHand} selectCard={selectCard}/>
        </>
    )
}


export default Enemy;