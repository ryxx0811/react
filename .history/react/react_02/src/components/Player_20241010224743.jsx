import {useState} from 'react';

export default function Player({name,symbol}){
    const [isEditing,setIsEditing] =useState(false);
    function handleEditClick(){
        setIsEditing(true);
    }
    return(
        <li>
            <span className='player-info'>

                {!isEditing ?(
                <span className='player-name'>{name}</span>
                ):
                <input></input>
            }
                <span className='player-symbol'>{symbol}</span>
            </span>

            <button onClick={handleClick}>Edit</button>
          </li>
    );
}