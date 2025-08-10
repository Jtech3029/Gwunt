import { useEffect, useRef, type JSX } from "react";
import type { CardType } from "../game_types/RowType";

interface rowProps {
  cardsInRow: JSX.Element[];
  chooseRow: (rowType: CardType) => void;
  rowType: CardType;
  hoverPosition?: { x: number; y: number }; // Add this to your interface
}

export default function Row(props: rowProps) {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const hoverPosition = props.hoverPosition || { 
    x: window.innerWidth - 150, 
    y: window.innerHeight / 2 
  };

  useEffect(() => {
    setTimeout(() => {

    }, 1000)
  },[props.cardsInRow])
  return (
    <div
      className="h-[11.5dvh] flex justify-center opacity-50 border-2 border-amber-700/60 text-amber-400 mb-2 relative"
      onClick={() => props.chooseRow(props.rowType)}
    >
      {props.cardsInRow.map((card: JSX.Element, index: number) => (
        <div
          key={index}
          ref={(el) => cardRefs.current[index] = el}
          className="fixed z-50 transition-all duration-300 ease-in-out"
          style={{
            left: `${hoverPosition.x}px`,
            top: `${hoverPosition.y}px`,
            transform: 'translate(-50%, -50%) scale(3)',
          }}
        >
          {card}
        </div>
      ))}
    </div>
  );
}