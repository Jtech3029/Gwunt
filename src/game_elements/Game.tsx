import {useState, type FC } from "react"
import Board from "./Board";
import { RowUnit, type RowType } from "./game_types/RowType";
import { BoardPlayer, type PlayerType } from "./game_types/PlayerType";
import PlayerCards from "./PlayerCards";

//Game.tsx will hold the game logic until we transport the game to a backend
//until them, we'll use this component to hold all the game logic and act as the backend
export default function Game() {
    const PLAYERCARDS: FC[] = [];
    const ENEMYCARDS: FC[] = [];

    for (let index = 0; index < 11; index++) {
        ENEMYCARDS.push(() => {
            return (() => {
                return(
                    <div>Card {1+index}</div>
                )
            })();
        })
        PLAYERCARDS.push(() => {
            return (() => {
                return(
                    <div>Card {1+index}</div>
                )
            })();
        })
    }

    const [playerRowOneCards, setPlayerRowOneCards] = useState<FC[]>([]);
    const [playerRowTwoCards, setPlayerRowTwoCards] = useState<FC[]>([]);
    const [playerRowThreeCards, setPlayerRowThreeCards] = useState<FC[]>([]);
    const [playerCardsInHand, setPlayerCardsInHand] = useState<FC[]>(PlayerCards);
    const playerOne = new PlayerCards(playerRowOneCards, playerRowTwoCards, playerRowThreeCards, playerCardsInHand);

    const [enemyRowOneCards, setEnemyRowOneCards] = useState<FC[]>([]);
    const [enemyRowTwoCards, setEnemyRowTwoCards] = useState<FC[]>([]);
    const [enemyRowThreeCards, setEnemyRowThreeCards] = useState<FC[]>([]);
    const [enemyCardsInHand, setEnemyCardsInHand] = useState<FC[]>(EnemyCards);

    const playerTwo = new PlayerCards(enemyRowOneCards, enemyRowTwoCards, enemyRowThreeCards, enemyCardsInHand);

    const [playerTurn, setPlayerTurn] = useState<PlayerType>(BoardPlayer.PLAYER);
    
    /**
     * Move the played card to the appropriate row based on the card chosen.
     */
    function playCard(cardPlayed: number, rowSelected: RowType, player: PlayerType) {
        if(player === BoardPlayer.PLAYER) {
            const card: FC = playerCardsInHand[cardPlayed];
            const newHand: FC[] = playerCardsInHand.slice(0, cardPlayed).concat(playerCardsInHand.slice(cardPlayed + 1));
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
            const card: FC = enemyCardsInHand[cardPlayed];
            const newHand: FC[] = enemyCardsInHand.slice(0, cardPlayed).concat(enemyCardsInHand.slice(cardPlayed + 1));
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
            <Board playerTurn={playerTurn} initialPlayerCards={playerOne} initialEnemyCards={playerTwo} playCard={playCard}/>
        </>
    )
}

function assignCards() {
    // Assign cards to players
}
