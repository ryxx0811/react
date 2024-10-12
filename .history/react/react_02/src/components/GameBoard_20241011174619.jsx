const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

export default function GameBoard(){
    return <ol id='game-board'>
        {initialGameBoard.map((row,rowIndex)=><li key={rowIndex}>
            <ol>
                {row.map((playerSysmbol,colIndex)=><li key={colIndex}><button></button>{col}</li>)}
            </ol>
        </li>)}
    </ol>;
}