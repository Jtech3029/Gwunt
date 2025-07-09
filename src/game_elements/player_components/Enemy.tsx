import Row from "./Row";
import { useEffect, useState, type JSX } from "react";
import PlayerHand from "./PlayerHand";
import { RowUnit, type RowType } from "../game_types/RowType";

interface PlayerProps {
    playerType: boolean,
    remainingCards: (Cards) => void,
    initialCards: JSX.Element[],
    firstRowCards: JSX.Element[],
    secondRowCards: JSX.Element[],
    thirdRowCards: JSX.Element[],
    isTurn: boolean
}


function Enemy (props: PlayerProps) {
    const [cardsInHand, setCardsInHand] = useState<JSX.Element[]>(props.initialCards);    

    useEffect(() => {
        
        EnemyAi()
    },[playerTurn])
    return(
        <>
            <Row selectRow={selectRow} rowType={RowUnit.SUPPORT} cardsInRow={props.cards.rowThreeCards}/>
            <Row selectRow={selectRow} rowType={RowUnit.RANGED} cardsInRow={props.cards.rowTwoCards}/>
            <Row selectRow={selectRow} rowType={RowUnit.MELEE} cardsInRow={props.cards.rowOneCards}/>
            <PlayerHand cardsInHand={props.cards.cardsInHand} selectCard={selectCard}/>
        </>
    )
}


export default Enemy;