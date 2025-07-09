import { BoardPlayer, type PlayerType } from "./game_types/PlayerType";
import type { RowType } from "./game_types/RowType";
import Player from "./player_components/Player";
import type PlayerCards from "./player_components/PlayerCards";

interface boardProps {
    playerTurn: PlayerType
    PlayerCards: PlayerCards
    EnemyCards: PlayerCards
    PlayCard: (cardPlayed: number, rowSelected: RowType, player: PlayerType) => void
}
export default function Board(props: boardProps) {

    return(
        <>
            <Player player={BoardPlayer.ENEMY} playerTurn={props.playerTurn} cards={props.EnemyCards} playCard={props.PlayCard}/>
            <Player player={BoardPlayer.PLAYER} playerTurn={props.playerTurn} cards={props.PlayerCards} playCard={props.PlayCard}/>
        </>
    )
}

