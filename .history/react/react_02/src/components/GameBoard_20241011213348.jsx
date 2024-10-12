import { useState } from "react";
const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

export default function GameBoard(){
    const [GameBoard, setGameBoard]=useState(initialGameBoard);
    function handleSelectSquare(rowIndex,colIndex){
        setGameBoard((prevGameBoard)=>{
            const updatedBoard=[...prevGameBoard.map(innerArray=>[...innerArray])];
            updatedBoard[rowIndex][colIndex]='X'
            return updatedBoardBoard;

        });
    }

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