import { useEffect, useState, type JSX } from "react";
import Board from "./Board";
import { CardClass } from "./game_types/RowType";
import { BoardPlayer, type PlayerType } from "./game_types/PlayerType";
import PlayerCards from "./player_components/PlayerCards";
import createCardDeck from "./CreateCardDeck";
import northernRealms from "./northernRealms";

//Game.tsx will hold the game logic until we transport the game to a backend
//until them, we'll use this component to hold all the game logic and act as the backend
export default function Game() {
  const PLAYERCARDS: JSX.Element[] = createCardDeck(northernRealms);
  const ENEMYCARDS: JSX.Element[] = createCardDeck(northernRealms);

  const [playerRowOneCards, setPlayerRowOneCards] = useState<JSX.Element[]>([]);
  const [playerRowTwoCards, setPlayerRowTwoCards] = useState<JSX.Element[]>([]);
  const [playerRowThreeCards, setPlayerRowThreeCards] = useState<JSX.Element[]>(
    []
  );
  const [playerHasPassed, setPlayerHasPassed] = useState(false);
  const [playerLives, setPlayerLives] = useState(2);

  const [playerCardsInHand, setPlayerCardsInHand] =
    useState<JSX.Element[]>(PLAYERCARDS);
  const playerOne = new PlayerCards(
    playerRowOneCards,
    playerRowTwoCards,
    playerRowThreeCards,
    playerCardsInHand
  );

  const [enemyRowOneCards, setEnemyRowOneCards] = useState<JSX.Element[]>([]);
  const [enemyRowTwoCards, setEnemyRowTwoCards] = useState<JSX.Element[]>([]);
  const [enemyRowThreeCards, setEnemyRowThreeCards] = useState<JSX.Element[]>(
    []
  );
  const [enemyHasPassed, setEnemyHasPassed] = useState(false);
  const [enemyLives, setEnemyLives] = useState(2);

  const [enemyCardsInHand, setEnemyCardsInHand] =
    useState<JSX.Element[]>(ENEMYCARDS);
  const playerTwo = new PlayerCards(
    enemyRowOneCards,
    enemyRowTwoCards,
    enemyRowThreeCards,
    enemyCardsInHand
  );

  const [playerTurn, setPlayerTurn] = useState<PlayerType>(BoardPlayer.PLAYER);
  /**
   * Move the played card to the appropriate row based on the card chosen.
   */
  function PlayCard(cardPlayed: number, player: PlayerType) {
    if (player === BoardPlayer.PLAYER) {
      const card: JSX.Element = playerCardsInHand[cardPlayed];
      const newHand: JSX.Element[] = playerCardsInHand
        .slice(0, cardPlayed)
        .concat(playerCardsInHand.slice(cardPlayed + 1));
      setPlayerCardsInHand(newHand);

      if (card.props.cardClass === CardClass.MELEE) {
        setPlayerRowOneCards([...playerRowOneCards, card]);
      } else if (card.props.cardClass === CardClass.RANGED) {
        setPlayerRowTwoCards([...playerRowTwoCards, card]);
      } else if (card.props.cardClass === CardClass.SUPPORT) {
        setPlayerRowThreeCards([...playerRowThreeCards, card]);
      }
      if (!enemyHasPassed) {
        setPlayerTurn(BoardPlayer.ENEMY);
      }
      if (newHand.length <= 0) {
        passTurn(player);
      }
    }
    if (player === BoardPlayer.ENEMY) {
      const card: JSX.Element = enemyCardsInHand[cardPlayed];
      const newHand: JSX.Element[] = enemyCardsInHand
        .slice(0, cardPlayed)
        .concat(enemyCardsInHand.slice(cardPlayed + 1));
      setEnemyCardsInHand(newHand);

      if (card.props.cardClass === CardClass.MELEE) {
        setEnemyRowOneCards([...enemyRowOneCards, card]);
      } else if (card.props.cardClass === CardClass.RANGED) {
        setEnemyRowTwoCards([...enemyRowTwoCards, card]);
      } else if (card.props.cardClass === CardClass.SUPPORT) {
        setEnemyRowThreeCards([...enemyRowThreeCards, card]);
      }
      if (!playerHasPassed) {
        setPlayerTurn(BoardPlayer.PLAYER);
      }
      if (newHand.length <= 0) {
        passTurn(player);
      }
    }
  }

  function passTurn(player: PlayerType) {
    if (player === BoardPlayer.PLAYER) {
      setPlayerHasPassed(true);
      setPlayerTurn(BoardPlayer.ENEMY);
    } else if (player === BoardPlayer.ENEMY) {
      setEnemyHasPassed(true);
      setPlayerTurn(BoardPlayer.PLAYER);
    }
  }

  function checkWinner() {
    let playerScore = 0;
    let enemyScore = 0;
    playerRowOneCards.forEach((element) => {
      playerScore = element.props.damage;
    });
    playerRowTwoCards.forEach((element) => {
      playerScore = element.props.damage;
    });
    playerRowThreeCards.forEach((element) => {
      playerScore = element.props.damage;
    });

    enemyRowOneCards.forEach((element) => {
      enemyScore = element.props.damage;
    });
    enemyRowTwoCards.forEach((element) => {
      enemyScore = element.props.damage;
    });
    enemyRowThreeCards.forEach((element) => {
      enemyScore = element.props.damage;
    });

    if (playerScore > enemyScore) {
      setEnemyLives(enemyLives - 1);
    } else if (playerScore < enemyScore) {
      setPlayerLives(playerLives - 1);
    } else {
      setEnemyLives(enemyLives - 1);
      setPlayerLives(playerLives - 1);
    }
  }

  function clearBoard() {
    setPlayerRowOneCards([]);
    setPlayerRowTwoCards([]);
    setPlayerRowThreeCards([]);

    setEnemyRowOneCards([]);
    setEnemyRowTwoCards([]);
    setEnemyRowThreeCards([]);
  }

  useEffect(() => {
    if (playerHasPassed && enemyHasPassed) {
      checkWinner();
      clearBoard();
    }
  }, [playerHasPassed, enemyHasPassed]);
  return (
    <>
      <Board
        playerTurn={playerTurn}
        PlayerCards={playerOne}
        EnemyCards={playerTwo}
        PlayCard={PlayCard}
        passTurn={passTurn}
      />
    </>
  );
}
