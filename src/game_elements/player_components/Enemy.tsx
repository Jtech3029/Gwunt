import Row from "./Row";
import { useEffect } from "react";
import { CardClass } from "../game_types/RowType";
import type PlayerCards from "./PlayerCards";
import type { PlayerType } from "../game_types/PlayerType";
import {
  AI_Difficulties,
  type AlgorithmProps,
  type PlayerCardsOnBoard,
} from "../ai_algorithms/AlgorithmsUtilities";
import EasyAI from "../ai_algorithms/EasyAI";

interface EnemyProps {
  cards: PlayerCards;
  player: PlayerType;
  playerTurn: PlayerType;
  playCard: (cardPlayed: number, player: PlayerType) => void;
  passTurn: (player: PlayerType) => void;
  difficulty: string;
  playerPlayedCards: PlayerCardsOnBoard;
  playerScore: number;
  aiScore: number;
}

function Enemy(props: EnemyProps) {
  function selectRow() {}

  useEffect(() => {
    if (
      props.playerTurn === props.player &&
      props.cards.cardsInHand.length != 0
    ) {
      playAIMove(props, props.difficulty);
    } else if (props.cards.cardsInHand.length == 0) {
      props.passTurn(props.player);
    }
  });

  function playAIMove(props: EnemyProps, difficulty: string) {
    const algorithmProps: AlgorithmProps = {
      playerCards: props.playerPlayedCards,
      aiHand: props.cards,
      playerScore: props.playerScore,
      aiScore: props.aiScore,
    };

    switch (difficulty) {
      case AI_Difficulties.EASY:
        {
          const idx = EasyAI(algorithmProps);
          console.log("IDX: " + idx);
          props.playCard(idx, props.player);
        }
        break;
      case AI_Difficulties.MEDIUM:
        break;
      case AI_Difficulties.HARD:
        break;
      case AI_Difficulties.GOD:
        break;
      default:
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
