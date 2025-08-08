import Row from "./Row";
import { useEffect } from "react";
import { CardClass } from "../game_types/RowType";
import type PlayerCards from "./PlayerCards";
import type { PlayerType } from "../game_types/PlayerType";

interface EnemyProps {
  cards: PlayerCards;
  player: PlayerType;
  playerTurn: PlayerType;
  playCard: (cardPlayed: number, player: PlayerType) => void;
  difficulty: number;
}

function Enemy(props: EnemyProps) {
  function selectRow() {}

  useEffect(() => {
    if (props.playerTurn === props.player) {
      playAIMove();
    }
  }, [props.playerTurn]);

  function playAIMove() {
    switch (props.difficulty) {
      case 1:
        props.playCard(
          Math.floor(Math.random() * props.cards.cardsInHand.length),
          props.player
        );
        break;
      case 2:
        break;
      case 3:
        break;
      default:
        break;
    }
  }
  return (
    <>
      <div className="grid grid-rows-3 grid-cols-1 gap-3 mt-3 mb-3">
        <Row
          chooseRow={selectRow}
          rowType={CardClass.SUPPORT}
          cardsInRow={props.cards.rowThreeCards}
        />
        <Row
          chooseRow={selectRow}
          rowType={CardClass.RANGED}
          cardsInRow={props.cards.rowTwoCards}
        />
        <Row
          chooseRow={selectRow}
          rowType={CardClass.MELEE}
          cardsInRow={props.cards.rowOneCards}
        />
      </div>
    </>
  );
}

export default Enemy;
