
function App() {
  return (
    <main>
      <div id='game-container'>
        <ol id='players'>
          <li>
            <span>
            <span className='player-name'>Player 1</span>
            <span className='player-symbol'>X</span>
            </span>
          </li>
          <li>
            <span className='player-name'>Player 2</span>
            <span className='player-symbol'>O</span>  
          </li>
            

        </ol>
      </div>
    </main>

  );
}

export default App
