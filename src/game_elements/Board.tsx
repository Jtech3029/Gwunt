import { BoardPlayer, type PlayerType } from "./game_types/PlayerType";
import Enemy from "./player_components/Enemy";
import Player from "./player_components/Player";
import type PlayerCards from "./player_components/PlayerCards";

interface boardProps {
    playerTurn: PlayerType
    PlayerCards: PlayerCards
    EnemyCards: PlayerCards
    PlayCard: (cardPlayed: number, player: PlayerType) => void
}
export default function Board(props: boardProps) {

    return(
        <>
            <Enemy player={BoardPlayer.ENEMY} playerTurn={props.playerTurn} cards={props.EnemyCards} playCard={props.PlayCard} difficulty={1}/>
            <Player player={BoardPlayer.PLAYER} playerTurn={props.playerTurn} cards={props.PlayerCards} playCard={props.PlayCard}/>
        </>
    )
}

