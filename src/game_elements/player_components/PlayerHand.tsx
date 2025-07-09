import type { JSX } from "react"

interface playerHandProps {
    cardsInHand: JSX.Element[],
    selectCard: (index: number) => void
}

export default function PlayerHand(props: playerHandProps) {
    return(
        <>
            {props.cardsInHand.map((card, index: number) => (
                <div key={index} onClick={() => props.selectCard(index)}>
                    {card}
                </div>
            ))}
        </>
    )
}