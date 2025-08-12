import type { JSX } from "react";
import type { CardType } from "../game_types/RowType";
import type CompleteCard from "../../UI_Elements/CompleteCard";

interface rowProps {
  cardsInRow: CompleteCard[];
  chooseRow: (rowType: CardType) => void;
  rowType: CardType;
}

export default function Row(props: rowProps) {
  //set css values to current one in order to allow for testing
  //remove these lines after implementing the logic for row selection
  // return(
  //     <div className="h-28 w-28 border border-indigo-600" onClick={() => props.chooseRow(props.rowType)}>
  //         {props.cardsInRow.map((card: JSX.Element, index: number) => (
  //             <div key={index}>
  //                 {card}
  //             </div>
  //         ))}
  //     </div>
  // )
  //

  return (
    <div
      className="h-[11.5dvh] flex justify-evenly opacity-50 border-2 border-amber-700/60 text-amber-400 mb-2"
      onClick={() => props.chooseRow(props.rowType)}
    >
      {props.rowType}
      {/* {props.cardsInRow.map((card: JSX.Element, index: number) => ( */}
      {/*   <div key={index}>{card}</div> */}
      {/* ))} */}

      {props.cardsInRow.map((card: CompleteCard, index: number) => (
        <div key={index}> {card.renderCard()} </div>
      ))}
    </div>
  );
}
