import type CompleteCard from "../../UI_Elements/CompleteCard";
import type PlayerCards from "../player_components/PlayerCards";

export const AI_Difficulties = {
  EASY: "EASY",
  MEDIUM: "MEDIUM ",
  HARD: "HARD",
  GOD: "GOD",
} as const;

export interface PlayerCardsOnBoard {
  rowOne: CompleteCard[];
  rowTwo: CompleteCard[];
  rowThree: CompleteCard[];
}

export interface AlgorithmProps {
  playerCards: PlayerCardsOnBoard;
  aiHand: PlayerCards;
  playerScore: number;
  aiScore: number;
}
