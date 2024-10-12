import {userState} from ''
export default function Player({name,symbol}){

    const []
    return(
        <li>
            <span className='player-info'>
              <span className='player-name'>{name}</span>
              <span className='player-symbol'>{symbol}</span>
            </span>
            <button>Edit</button>
          </li>
    );
}