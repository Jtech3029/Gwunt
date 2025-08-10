import { type JSX, useState, useRef, useEffect } from "react";

interface PlayerHandProps {
  cardsInHand: JSX.Element[];
  selectCard: (index: number) => void;
  hoverPosition?: { x: number; y: number };
}

export default function PlayerHand(props: PlayerHandProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cardPositions, setCardPositions] = useState<DOMRect[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const hoverPosition = props.hoverPosition || { 
    x: window.innerWidth - 50, 
    y: window.innerHeight / 2 
  };

  useEffect(() => {
    // Calculate initial positions of all cards
    const positions = cardRefs.current.map(ref => 
      ref ? ref.getBoundingClientRect() : new DOMRect()
    );
    setCardPositions(positions);
  }, [props.cardsInHand]);

  const getTransformForCard = (index: number) => {
    if (hoveredIndex !== index || !cardPositions[index]) return '';
    
    const cardRect = cardPositions[index];
    const deltaX = hoverPosition.x - (cardRect.left + cardRect.width / 2);
    const deltaY = hoverPosition.y - (cardRect.top + cardRect.height / 2);
    
    return `translate(${deltaX}px, ${deltaY}px) scale(1.1)`;
  };

  const chooseCard = (index: number) => {
    setHoveredIndex(index);
    props.selectCard(index);
  }
  return (
    <div className="h-[13dvh] flex justify-evenly bg-gradient-to-r from-stone-900/80 to-stone-800/80 border-2 border-stone-700/60 shadow-2xl p-2">
      {props.cardsInHand.map((card, index: number) => (
        <div
          key={index}
          ref={(el) => cardRefs.current[index] = el}
          onClick={() => chooseCard(index)}
          className={`
            transition-all duration-300 ease-in-out transform-gpu
            ${hoveredIndex === index ? 'z-50 relative' : 'z-auto'}
          `}
          style={{
            transform: getTransformForCard(index),
          }}
        >
          {card}
        </div>
      ))}
    </div>
  );
}