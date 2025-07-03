import { useEffect, useState, type FC } from "react"
import Board from "./Board";
import { RowUnit } from "./RowType";

class playerCards {
    constructor(row1Cards, row2Cards, row3Cards, cardsInHand) {
        this.row1Cards = row1Cards;
        this.row2Cards = row2Cards;
        this.row3Cards = row3Cards
        this.cardsInHand = cardsInHand;
    }
}
//Game.tsx will hold the game logic until we transport the game to a backend
//until them, we'll use this component to hold all the game logic and act as the backend
export default function Game() {
        const PlayerCards: FC[] = [];
    const EnemyCards: FC[] = [];

    for (let index = 0; index < 11; index++) {
        EnemyCards.push(() => {
            return (() => {
                return(
                    <div>Card {1+index}</div>
                )
            })();
        })
        PlayerCards.push(() => {
            return (() => {
                return(
                    <div>Card {1+index}</div>
                )
            })();
        })
    }

    const [player1Row1Cards, setPlayer1Row1Cards] = useState<FC[]>([]);
    const [player1row2Cards, setPlayer1Row2Cards] = useState<FC[]>([]);
    const [player1row3Cards, setPlayer1Row3Cards] = useState<FC[]>([]);
    const [player1CardsInHand, setPlayer1CardsInHand] = useState<FC[]>(PlayerCards);
    const playerOne = new playerCards(player1Row1Cards, player1row2Cards, player1row3Cards, player1CardsInHand)

    const [player2Row1Cards, setPlayer2Row1Cards] = useState<FC[]>([]);
    const [player2row2Cards, setPlayer2Row2Cards] = useState<FC[]>([]);
    const [player2row3Cards, setPlayer2Row3Cards] = useState<FC[]>([]);
    const [player2CardsInHand, setPlayer2CardsInHand] = useState<FC[]>(EnemyCards);

    const playerTwo = new playerCards(player2Row1Cards, player2row2Cards, player2row3Cards, player2CardsInHand)

    const [playerTurn, setPlayerTurn] = useState<string>("Player");
    
    /**
     * Move the played card to the appropriate row based on the card chosen.
     */
    function playCard(cardPlayed, rowSelected, player) {
        if(player === "Player") {
            const card: FC = player1CardsInHand[cardPlayed];
            const newHand: FC[] = player1CardsInHand.slice(0, cardPlayed).concat(player1CardsInHand.slice(cardPlayed + 1));
            setPlayer1CardsInHand(newHand);

            if (rowSelected === RowUnit.MELEE) {
                    setPlayer1Row1Cards([...player1Row1Cards, card]);
                } else if (rowSelected === RowUnit.RANGED) {
                    setPlayer1Row2Cards([...player1row2Cards, card]);
                } else if (rowSelected === RowUnit.SUPPORT) {
                    setPlayer1Row3Cards([...player1row3Cards, card]);
                }
            setPlayerTurn("Enemy");
        }
        if(player === "Enemy") {
            const card: FC = player2CardsInHand[cardPlayed];
            const newHand: FC[] = player2CardsInHand.slice(0, cardPlayed).concat(player2CardsInHand.slice(cardPlayed + 1));
            setPlayer2CardsInHand(newHand);

            if (rowSelected === RowUnit.MELEE) {
                    setPlayer2Row1Cards([...player2Row1Cards, card]);
                } else if (rowSelected === RowUnit.RANGED) {
                    setPlayer2Row2Cards([...player2row2Cards, card]);
                } else if (rowSelected === RowUnit.SUPPORT) {
                    setPlayer2Row3Cards([...player2row3Cards, card]);
                }
            setPlayerTurn("Player");
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
