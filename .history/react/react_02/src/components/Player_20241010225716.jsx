import {useState} from 'react';

export default function Player({name,symbol}){
    const [isEditing,setIsEditing] =useState(false);

    function handleEditClick(){
        setIsEditing(true);
    }
    
        <li>
            <span className='player'>
                <span className='player-name'>{name}</span>
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleClick}>Edit</button>
        </li>
    );
}