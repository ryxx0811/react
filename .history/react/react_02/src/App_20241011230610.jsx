import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
function App() {
  const [activePlayer,setActivePlayer]= useState('X');

  function handleSelectSqure(){
    setActivePlayer((curActiveplayer)=>curActiveplayer==='X'? 'O':'X');
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players'>
          <Player initialName='Player 1' symbol='X'/>
          <Player initialName='Player 2' symbol='O'/>
        </ol>
        <GameBoard onSelectSquare={han}/>
      </div>
      
    </main>

  );
}

export default App
