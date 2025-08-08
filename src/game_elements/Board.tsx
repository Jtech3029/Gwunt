import { BoardPlayer, type PlayerType } from "./game_types/PlayerType";
import Enemy from "./player_components/Enemy";
import Player from "./player_components/Player";
import type PlayerCards from "./player_components/PlayerCards";

interface boardProps {
  playerTurn: PlayerType;
  PlayerCards: PlayerCards;
  EnemyCards: PlayerCards;
  PlayCard: (cardPlayed: number, player: PlayerType) => void;
}
export default function Board(props: boardProps) {
  return (
    <div className="max-h-dvh max-w-dvw flex bg-gradient-to-br from-stone-900 via-amber-950 to-stone-800">
      <div className="w-20/100 h-screen bg-black"></div>
      <div className="h-dvh w-65/100">
        <div>
          <Enemy
            player={BoardPlayer.ENEMY}
            playerTurn={props.playerTurn}
            cards={props.EnemyCards}
            playCard={props.PlayCard}
            difficulty={1}
          />
        </div>
        <hr></hr>
        <div>
          <Player
            player={BoardPlayer.PLAYER}
            playerTurn={props.playerTurn}
            cards={props.PlayerCards}
            playCard={props.PlayCard}
          />
        </div>
      </div>
      <div className="w-15/100 h-screen flex flex-col justify-between">
        <div className="flex">
          <div className="w-15 h-25 opacity-50 border-2 border-amber-700/60">discard</div>
          <div className="w-15 h-25 opacity-50 border-2 border-amber-700/60">deck</div>
        </div>
        <div className="flex">
          <div className="w-15 h-25 opacity-50 border-2 border-amber-700/60">discard</div>
          <div className="w-15 h-25 opacity-50 border-2 border-amber-700/60">deck</div>
        </div>
      </div>
    </div>
  );
}
