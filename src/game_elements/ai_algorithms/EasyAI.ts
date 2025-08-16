import type CompleteCard from "../../UI_Elements/CompleteCard";
import { CardSpecials } from "../game_types/CardSpecials";
import { CardClass } from "../game_types/RowType";
import type { AlgorithmProps, PlayerCardsOnBoard } from "./AlgorithmsUtilities";

const MINIMUM_SCORCH: number = 10;

//return an index
export default function EasyAI(props: AlgorithmProps): number {
  const spy: number[] = getCardWithSpecial(
    props.aiHand.cardsInHand,
    CardSpecials.SPY,
  );

  if (spy.length != 0) {
    return spy[0];
  }

  const scorch = scorchAttack(props.playerCards, props.aiHand.cardsInHand);

  if (scorch !== -1) {
    return scorch;
  }

  if (props.aiScore + 10 <= props.playerScore) {
    return -1;
  }

  return Math.floor(Math.random() * props.aiHand.cardsInHand.length);
}

function getCardWithSpecial(
  hand: CompleteCard[],
  cardSpecial: number,
): number[] {
  const indexes: number[] = [];

  for (let i = 0; i < hand.length; i++) {
    if (hand[i].getCardSpecial() === cardSpecial) {
      indexes.push(i);
    }
  }

  return indexes;
}

function scorchAttack(
  playerRows: PlayerCardsOnBoard,
  hand: CompleteCard[],
): number {
  const scorchCards: number[] = getCardWithSpecial(hand, CardSpecials.SCORCH);
  if (scorchCards.length === 0) {
    return -1;
  } else {
    if (calculateRowScore(playerRows.rowOne) >= MINIMUM_SCORCH) {
      const result = scorchCards.find(
        (card) => hand[card].getCardClass() == CardClass.MELEE,
      );

      if (result !== undefined) {
        return result;
      }
    }

    if (calculateRowScore(playerRows.rowTwo) >= MINIMUM_SCORCH) {
      const result = scorchCards.find(
        (card) => hand[card].getCardClass() == CardClass.RANGED,
      );

      if (result !== undefined) {
        return result;
      }
    }

    if (calculateRowScore(playerRows.rowThree) >= MINIMUM_SCORCH) {
      const result = scorchCards.find(
        (card) => hand[card].getCardClass() == CardClass.SUPPORT,
      );

      if (result !== undefined) {
        return result;
      }
    }

    return -1;
  }
}

function calculateRowScore(row: CompleteCard[]): number {
  let score = 0;
  row.forEach((el) => {
    score += el.getDamage();
  });
  return score;
}
