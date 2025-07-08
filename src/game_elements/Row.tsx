import type { JSX } from "react"
import type { RowType } from "./game_types/RowType"

interface rowProps {
    cardsInRow: JSX.Element[],
    selectRow: (rowType: RowType) => void
    rowType: RowType
}

export default function Row(props: rowProps) {


    //set css values to current one in order to allow for testing
    //remove these lines after implementing the logic for row selection
    return(
        <div className="h-28 w-28 border border-indigo-600" onClick={() => props.selectRow(props.rowType)}>
            {props.cardsInRow.map((card: JSX.Element, index: number) => (
                <div key={index}>
                    {card}
                </div>
            ))}
        </div>
    )
}