import Row from "./Row";
import { useEffect, useState, type FC } from "react";
import PlayerHand from "./PlayerHand";
import { CardClass, type CardType } from "../game_types/RowType";
import type PlayerCards from "./PlayerCards";
import type { PlayerType } from "../game_types/PlayerType";

interface PlayerProps {
  cards: PlayerCards;
  player: PlayerType;
  playerTurn: PlayerType;
  playCard: (cardPlayed: number, player: PlayerType) => void;
}

const Player: FC<PlayerProps> = (props: PlayerProps) => {
  const [cardPlayed, setCardPlayed] = useState<number>(-1);
  const [confirmMove, setConfirmMove] = useState<boolean | null>(null);

  const selectCard = (index: number) => {
    if (props.playerTurn === props.player) {
      setCardPlayed(index);
    }
  };

  const confirmSelect = (rowChosen: CardType) => {
    if (
      props.playerTurn === props.player &&
      cardPlayed != -1 &&
      rowChosen === props.cards.cardsInHand[cardPlayed].props.cardClass
    ) {
      setConfirmMove(true);
    }
  };

  useEffect(() => {
    if (cardPlayed != -1 && confirmMove != null) {
      props.playCard(cardPlayed, props.player);
      setCardPlayed(-1);
      setConfirmMove(null);
    }
  }, [confirmMove, cardPlayed]);

  return (
    <>
      <div className="grid grid-rows-4 grid-cols-1">
        <Row
          chooseRow={confirmSelect}
          rowType={CardClass.MELEE}
          cardsInRow={props.cards.rowOneCards}
        />
        <Row
          chooseRow={confirmSelect}
          rowType={CardClass.RANGED}
          cardsInRow={props.cards.rowTwoCards}
        />
        <Row
          chooseRow={confirmSelect}
          rowType={CardClass.SUPPORT}
          cardsInRow={props.cards.rowThreeCards}
        />
        <PlayerHand
          cardsInHand={props.cards.cardsInHand}
          selectCard={selectCard}
        />
      </div>
    </>
  );
};

export default Player;

