export default function Player({name,symbol}){
    return(
        <li>
            <span className='player-info'>
              <span className='player-name'>Player 1</span>
              <span className='player-symbol'>X</span>
            </span>
            <button>Edit</button>
          </li>
    );
}