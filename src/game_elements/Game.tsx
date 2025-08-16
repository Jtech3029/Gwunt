import { useEffect, useState, type JSX } from "react";
import Board from "./Board";
import { CardClass } from "./game_types/RowType";
import { BoardPlayer, type PlayerType } from "./game_types/PlayerType";
import PlayerCards from "./player_components/PlayerCards";
import createCardDeck from "./CreateCardDeck";
import northernRealms from "./northernRealms";
import CompleteCard from "../UI_Elements/CompleteCard";
import PassedBar from "../UI_Elements/Passed_Bar";

//Game.tsx will hold the game logic until we transport the game to a backend
//until them, we'll use this component to hold all the game logic and act as the backend
export default function Game() {
  const PLAYERCARDS: CompleteCard[] = createCardDeck(northernRealms);
  const ENEMYCARDS: CompleteCard[] = createCardDeck(northernRealms);

  const [playerRowOneCards, setPlayerRowOneCards] = useState<CompleteCard[]>(
    [],
  );
  const [playerRowTwoCards, setPlayerRowTwoCards] = useState<CompleteCard[]>(
    [],
  );
  const [playerRowThreeCards, setPlayerRowThreeCards] = useState<
    CompleteCard[]
  >([]);
  const [playerHasPassed, setPlayerHasPassed] = useState(false);
  const [playerLives, setPlayerLives] = useState(2);

  const [playerCardsInHand, setPlayerCardsInHand] =
    useState<CompleteCard[]>(PLAYERCARDS);
  const playerOne = new PlayerCards(
    playerRowOneCards,
    playerRowTwoCards,
    playerRowThreeCards,
    playerCardsInHand,
  );

  const [enemyRowOneCards, setEnemyRowOneCards] = useState<CompleteCard[]>([]);
  const [enemyRowTwoCards, setEnemyRowTwoCards] = useState<CompleteCard[]>([]);
  const [enemyRowThreeCards, setEnemyRowThreeCards] = useState<CompleteCard[]>(
    [],
  );
  const [enemyHasPassed, setEnemyHasPassed] = useState(false);
  const [enemyLives, setEnemyLives] = useState(2);

  const [enemyCardsInHand, setEnemyCardsInHand] =
    useState<CompleteCard[]>(ENEMYCARDS);
  const playerTwo = new PlayerCards(
    enemyRowOneCards,
    enemyRowTwoCards,
    enemyRowThreeCards,
    enemyCardsInHand,
  );

  const [playerTurn, setPlayerTurn] = useState<PlayerType>(BoardPlayer.PLAYER);

  const [playerScore, setPlayerScore] = useState<number>(0);
  const [enemyScore, setEnemyScore] = useState<number>(0);

  /**
   * Move the played card to the appropriate row based on the card chosen.
   */
  function PlayCard(cardPlayed: number, player: PlayerType) {
    if (player === BoardPlayer.PLAYER) {
      const card: CompleteCard = playerCardsInHand[cardPlayed];
      const newHand: CompleteCard[] = playerCardsInHand
        .slice(0, cardPlayed)
        .concat(playerCardsInHand.slice(cardPlayed + 1));
      setPlayerCardsInHand(newHand);

      // if (card.props.cardClass === CardClass.MELEE) {
      //   setPlayerRowOneCards([...playerRowOneCards, card]);
      // } else if (card.props.cardClass === CardClass.RANGED) {
      //   setPlayerRowTwoCards([...playerRowTwoCards, card]);
      // } else if (card.props.cardClass === CardClass.SUPPORT) {
      //   setPlayerRowThreeCards([...playerRowThreeCards, card]);
      // }
      switch (card.getCardClass()) {
        case CardClass.MELEE:
          setPlayerRowOneCards([...playerRowOneCards, card]);
          break;
        case CardClass.RANGED:
          setPlayerRowTwoCards([...playerRowTwoCards, card]);
          break;
        case CardClass.SUPPORT:
          setPlayerRowThreeCards([...playerRowThreeCards, card]);
          break;
        default:
          console.log("Error");
      }

      if (!enemyHasPassed) {
        setPlayerTurn(BoardPlayer.ENEMY);
      } else {
        console.log("SUP");
      }

      if (newHand.length <= 0) {
        passTurn(player);
      }
    }
    if (player === BoardPlayer.ENEMY) {
      if (cardPlayed == -1) {
        passTurn(player);
        return;
      }

      const card: CompleteCard = enemyCardsInHand[cardPlayed];
      const newHand: CompleteCard[] = enemyCardsInHand
        .slice(0, cardPlayed)
        .concat(enemyCardsInHand.slice(cardPlayed + 1));
      setEnemyCardsInHand(newHand);

      if (card.getCardClass() === CardClass.MELEE) {
        setEnemyRowOneCards([...enemyRowOneCards, card]);
      } else if (card.getCardClass() === CardClass.RANGED) {
        setEnemyRowTwoCards([...enemyRowTwoCards, card]);
      } else if (card.getCardClass() === CardClass.SUPPORT) {
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

  function calculateScore() {
    //TODO make more efficient
    let newScore = 0;
    playerRowOneCards.forEach((element) => {
      newScore += element.getDamage();
    });

    playerRowTwoCards.forEach((element) => {
      newScore += element.getDamage();
    });

    playerRowThreeCards.forEach((element) => {
      newScore += element.getDamage();
    });
    setPlayerScore(newScore);

    let newEnemyScore = 0;
    enemyRowOneCards.forEach((element) => {
      newEnemyScore += element.getDamage();
    });

    enemyRowTwoCards.forEach((element) => {
      newEnemyScore += element.getDamage();
    });

    enemyRowThreeCards.forEach((element) => {
      newEnemyScore += element.getDamage();
    });
    setEnemyScore(newEnemyScore);
  }

  // function checkWinner() {
  //   let playerScore = 0;
  //   let enemyScore = 0;
  //   playerRowOneCards.forEach((element) => {
  //     playerScore = element.props.damage;
  //   });
  //   playerRowTwoCards.forEach((element) => {
  //     playerScore = element.props.damage;
  //   });
  //   playerRowThreeCards.forEach((element) => {
  //     playerScore = element.props.damage;
  //   });
  //
  //   enemyRowOneCards.forEach((element) => {
  //     enemyScore = element.props.damage;
  //   });
  //   enemyRowTwoCards.forEach((element) => {
  //     enemyScore = element.props.damage;
  //   });
  //   enemyRowThreeCards.forEach((element) => {
  //     enemyScore = element.props.damage;
  //   });
  //
  //   if (playerScore > enemyScore) {
  //     setEnemyLives(enemyLives - 1);
  //   } else if (playerScore < enemyScore) {
  //     setPlayerLives(playerLives - 1);
  //   } else {
  //     setEnemyLives(enemyLives - 1);
  //     setPlayerLives(playerLives - 1);
  //   }
  // }

  const [timer, setTimer] = useState<number>(0);
  const [started, setStarted] = useState<boolean>(false);
  const [wannaPass, setWannaPass] = useState<boolean>(false);

  function startTimer(e: KeyboardEvent) {
    if (e.code == "Space" && started == false) {
      const x = setTimeout(() => {
        setWannaPass(true);
      }, 500);

      setTimer(x);
      setStarted(true);
    }
  }

  function endTimer() {
    clearTimeout(timer);
    setStarted(false);
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
    window.addEventListener("keydown", startTimer);
    window.addEventListener("keyup", endTimer);

    calculateScore();
    if (playerHasPassed && enemyHasPassed) {
      // checkWinner();
      clearBoard();
    }

    return () => {
      window.removeEventListener("keydown", startTimer);
      window.removeEventListener("keyup", endTimer);
    };
  }, [playerHasPassed, enemyHasPassed, calculateScore]);

  return (
    <div className="overflow-hidden h-full w-full">
      <Board
        playerTurn={playerTurn}
        PlayerCards={playerOne}
        EnemyCards={playerTwo}
        PlayCard={PlayCard}
        passTurn={passTurn}
        playerDamage={playerScore}
        enemyDamage={enemyScore}
      />
      {wannaPass && <PassedBar />}
    </div>
  );
}
