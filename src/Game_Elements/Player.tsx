import Row from "./Row";
import { useEffect, useState, type FC } from "react";
import PlayerHand from "./PlayerHand";
import { RowUnit, type RowType } from "./RowType";

interface PlayerProps {
    playerType: boolean,
    initialCards: FC[],
    remainingCards: (Cards) => void
}

const Player: FC<PlayerProps> = (props: PlayerProps) => {
    //dummy code that generates initial cards for now
    //TODO: delete this code after implementing the real cards
    const initialCards: FC[] = [];

    for (let index = 0; index < 11; index++) {
        initialCards.push(() => {
            return (() => {
                return(
                    <div>Card {1+index}</div>
                )
            })();
        }
    )
    }

    const [cardsInHand, setCardsInHand] = useState<FC[]>(initialCards);
    const [row1Cards, setRow1Cards] = useState<FC[]>([]);
    const [row2Cards, setRow2Cards] = useState<FC[]>([]);
    const [row3Cards, setRow3Cards] = useState<FC[]>([]);
    const [cardPlayed, setCardPlayed] = useState<number>(-1);
    const [rowSelected, setRowSelected] = useState<RowType | null>(null);

    const selectCard = (index: number) => {
        setCardPlayed(index);
    };

    const selectRow = (rowType: RowType) => {
        console.log(`Selected row: ${rowType}`);
        setRowSelected(rowType);
    };

    /**
     * Move the played card to the appropriate row based on the card chosen.
     */
    useEffect(() => {
        // If a card was played, remove it from the hand and add it to the appropriate row
        if (cardPlayed != -1 && rowSelected != null) {
            const card: FC = cardsInHand[cardPlayed];
            const newHand: FC[] = cardsInHand.slice(0, cardPlayed).concat(cardsInHand.slice(cardPlayed + 1));
            
            setCardsInHand(newHand);

              if (rowSelected === RowUnit.MELEE) {
                    setRow1Cards([...row1Cards, card]);
                } else if (rowSelected === RowUnit.RANGED) {
                    setRow2Cards([...row2Cards, card]);
                } else if (rowSelected === RowUnit.SUPPORT) {
                    setRow3Cards([...row3Cards, card]);
                }
                setRowSelected(null);
                setCardPlayed(-1);
        }
    }, [cardPlayed, rowSelected]);

    return(
        <>
            <Row selectRow={selectRow} rowType={RowUnit.MELEE} cardsInRow={row1Cards}/>
            <Row selectRow={selectRow} rowType={RowUnit.RANGED} cardsInRow={row2Cards}/>
            <Row selectRow={selectRow} rowType={RowUnit.SUPPORT} cardsInRow={row3Cards}/>
            <PlayerHand cardsInHand={cardsInHand} selectCard={selectCard}/>
        </>
    )
}


export default Player;