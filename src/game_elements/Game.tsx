import {useState, type JSX } from "react"
import Board from "./Board";
import { RowUnit, type RowType } from "./game_types/RowType";
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
    const [playerRowThreeCards, setPlayerRowThreeCards] = useState<JSX.Element[]>([]);
    const [playerCardsInHand, setPlayerCardsInHand] = useState<JSX.Element[]>(PLAYERCARDS);
    const playerOne = new PlayerCards(playerRowOneCards, playerRowTwoCards, playerRowThreeCards, playerCardsInHand);

    const [enemyRowOneCards, setEnemyRowOneCards] = useState<JSX.Element[]>([]);
    const [enemyRowTwoCards, setEnemyRowTwoCards] = useState<JSX.Element[]>([]);
    const [enemyRowThreeCards, setEnemyRowThreeCards] = useState<JSX.Element[]>([]);
    const [enemyCardsInHand, setEnemyCardsInHand] = useState<JSX.Element[]>(ENEMYCARDS);

    const playerTwo = new PlayerCards(enemyRowOneCards, enemyRowTwoCards, enemyRowThreeCards, enemyCardsInHand);

    const [playerTurn, setPlayerTurn] = useState<PlayerType>(BoardPlayer.PLAYER);
    
    /**
     * Move the played card to the appropriate row based on the card chosen.
     */
    function PlayCard(cardPlayed: number, rowSelected: RowType, player: PlayerType) {
        if(player === BoardPlayer.PLAYER) {
            const card: JSX.Element = playerCardsInHand[cardPlayed];
            const newHand: JSX.Element[] = playerCardsInHand.slice(0, cardPlayed).concat(playerCardsInHand.slice(cardPlayed + 1));
            setPlayerCardsInHand(newHand);

            if (rowSelected === RowUnit.MELEE) {
                    setPlayerRowOneCards([...playerRowOneCards, card]);
                } else if (rowSelected === RowUnit.RANGED) {
                    setPlayerRowTwoCards([...playerRowTwoCards, card]);
                } else if (rowSelected === RowUnit.SUPPORT) {
                    setPlayerRowThreeCards([...playerRowThreeCards, card]);
                }
            setPlayerTurn(BoardPlayer.ENEMY);
        }
        if(player === BoardPlayer.ENEMY) {
            const card: JSX.Element = enemyCardsInHand[cardPlayed];
            const newHand: JSX.Element[] = enemyCardsInHand.slice(0, cardPlayed).concat(enemyCardsInHand.slice(cardPlayed + 1));
            setEnemyCardsInHand(newHand);

            if (rowSelected === RowUnit.MELEE) {
                    setEnemyRowOneCards([...enemyRowOneCards, card]);
                } else if (rowSelected === RowUnit.RANGED) {
                    setEnemyRowTwoCards([...enemyRowTwoCards, card]);
                } else if (rowSelected === RowUnit.SUPPORT) {
                    setEnemyRowThreeCards([...enemyRowThreeCards, card]);
                }
            setPlayerTurn(BoardPlayer.PLAYER);
        }
    }
    
    return(
        <>
            <Board playerTurn={playerTurn} PlayerCards={playerOne} EnemyCards={playerTwo} PlayCard={PlayCard}/>
        </>
    )
}

