import { useState } from "react";
const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

export default function GameBoard(){
    oncst [GameBoard, setGameBoard]=useState(initialGameBoard);

    function handleSelectSquare(rowIndex,colIndex){
        setGameBoard((prevGameBoard)=>{
            const updateBoard=[...prevGameBoard.map()]
            prevGameBoard[rowIndex][colIndex]='X'
            return prevGameBoard;

        });
    }
    return <ol id='game-board'>
        {initialGameBoard.map((row,rowIndex)=>(
        <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex)=>(
                  <li key={colIndex}>
                    <button>{playerSymbol}</button>
                  </li>
                ))}
            </ol>
        </li>
        ))}
    </ol>;
}