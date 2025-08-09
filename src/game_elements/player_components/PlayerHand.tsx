import type { JSX } from "react";

interface playerHandProps {
  cardsInHand: JSX.Element[];
  selectCard: (index: number) => void;
}

export default function PlayerHand(props: playerHandProps) {
  return (
    <>
      <div className="h-[13dvh] flex justify-evenly bg-gradient-to-r from-stone-900/80 to-stone-800/80 border-2 border-stone-700/60 shadow-2xl">
        {props.cardsInHand.map((card, index: number) => (
          <div key={index} onClick={() => props.selectCard(index)}>
            {card}
          </div>
        ))}
      </div>
    </>
  );
}
