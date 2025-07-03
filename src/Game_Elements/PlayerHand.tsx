import type { FC } from "react"
import React from "react"

interface playerHandProps {
    cardsInHand: FC[],
    selectCard: (index: number) => void
}

export default function PlayerHand(props: playerHandProps) {
    return(
        <>
            {props.cardsInHand.map((card: FC, index: number) => (
                <div key={index} onClick={() => props.selectCard(index)}>
                    {React.createElement(card)}
                </div>
            ))}
        </>
    )
}