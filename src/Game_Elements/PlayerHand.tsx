import type { FC } from "react"

interface playerHandProps {
    cards: FC[],
    setCardPlayed: (card: FC) => void
}

export default function PlayerHand(props: playerHandProps) {

    return(
        <>
            {props.cards.map((card: FC, index: number) => (
                <div key={index}>
                    {card}
                </div>
            ))}
        </>
    )
}