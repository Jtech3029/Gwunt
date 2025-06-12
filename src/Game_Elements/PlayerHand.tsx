import type { FC } from "react"
import React from "react"

interface playerHandProps {
    cards: FC[],
    selectCard: (card: FC) => void
}

export default function PlayerHand(props: playerHandProps) {
    return(
        <>
            {props.cards.map((card: FC, index: number) => (
                <div key={index} onClick={() => props.selectCard(index)}>
                    {React.createElement(card)}
                </div>
            ))}
        </>
    )
}