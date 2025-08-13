import { useEffect, useRef, useState, type JSX } from "react";
import type { CardType } from "../game_types/RowType";

interface rowProps {
  cardsInRow: JSX.Element[];
  chooseRow: (rowType: CardType) => void;
  rowType: CardType;
  hoverPosition?: { x: number; y: number }; // Add this to your interface
}

export default function Row(props: rowProps) {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [cardPositions, setCardPositions] = useState<DOMRect[]>([]);

  const hoverPosition = props.hoverPosition || {
    x: window.innerWidth - 150,
    y: window.innerHeight / 2,
  };
  const [yes, setYes] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setYes(false);
    }, 3000);
        // Calculate initial positions of all cards
    const positions = cardRefs.current.map(ref => 
      ref ? ref.getBoundingClientRect() : new DOMRect()
    );
    setCardPositions(positions);
  }, [props.cardsInRow]);

  function getCardPositions(index: number) {
    if (!cardRefs.current[index]) return {};
    const yes = cardPositions[index];
    const deltaX = hoverPosition.x - (yes.left + yes.width / 2);
    const deltaY = hoverPosition.y - (yes.top + yes.height / 2);
    return {transform: `translate(${deltaX}px, ${deltaY}px) scale(3)`};
  }

  return (
    <div
      className="h-[11.5dvh] flex justify-center opacity-50 border-2 border-amber-700/60 text-amber-400 mb-2 relative"
      onClick={() => props.chooseRow(props.rowType)}
    >
      {props.cardsInRow.map((card: JSX.Element, index: number) => (
        <div
          key={index}
          ref={(el) => cardRefs.current[index] = el}
          className="transition-transform hidden"
          style={yes ? getCardPositions(index) : {transitionDuration: "1s"}}
        >
          {card}
        </div>
      ))}
    </div>
  );
}
