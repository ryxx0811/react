import { useState } from "react";
const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

export default function GameBoard(){
    const [GameBoard, setGameBoard]=useState(initialGameBoard);

    return <ol id='game-board'>
        {initialGameBoard.map((row,rowIndex)=>(
        <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex)=>(
                  <li key={colIndex}>
                    <button onClick={()=>handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
                  </li>
                ))}
            </ol>
        </li>
        ))}
    </ol>;
}