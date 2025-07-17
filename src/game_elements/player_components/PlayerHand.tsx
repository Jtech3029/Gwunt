import type { JSX } from "react";

interface playerHandProps {
  cardsInHand: JSX.Element[];
  selectCard: (index: number) => void;
}

export default function PlayerHand(props: playerHandProps) {
  return (
    <>
      <div className="h-full w-full flex justify-evenly bg-emerald-200 border-2 border-solid">
        {props.cardsInHand.map((card, index: number) => (
          <div key={index} onClick={() => props.selectCard(index)}>
            {card}
          </div>
        ))}
      </div>
    </>
  );
}

