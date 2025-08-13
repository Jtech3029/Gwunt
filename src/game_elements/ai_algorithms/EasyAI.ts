import type CompleteCard from "../../UI_Elements/CompleteCard";
import type { AlgorithmProps } from "./AlgorithmsUtilities";

//return an index
export default function EasyAI(props: AlgorithmProps): number {
  const spy = checkForSpy(props.aiHand.cardsInHand);
  if (spy != -1) {
    return spy;
  }

  return -1;
}

function checkForSpy(hand: CompleteCard[]): number {
  hand.forEach((card, index) => {
    if (card.getCardClass()) {
      return index;
    }
  });
}

