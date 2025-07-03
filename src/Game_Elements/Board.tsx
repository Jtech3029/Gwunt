import { useEffect, useState } from "react"
import Player from "./Player";

interface boardProps {
    playerTurn: boolean
}
export default function Board(props: boardProps) {

    return(
        <>
            <Player player={"Enemy"} playerTurn={props.playerTurn} cards={props.initialEnemyCards} playCard={props.playCard}/>
            <Player player={"Player"} playerTurn={props.playerTurn} cards={props.initialPlayerCards} playCard={props.playCard}/>
        </>
    )
}

