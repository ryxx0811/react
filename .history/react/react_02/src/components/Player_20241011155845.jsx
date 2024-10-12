import {useState} from 'react';

export default function Player({initialName,symbol}){
    const [playerName,setPlayerName] = useState(initialName);
    const [isEditing,setIsEditing] =useState(false);

    function handleEditClick(){
        setIsEditing((editing)=>!editing);
    }

    let editablePlayerName = <span className='player-name'>{name}</span>;
    //let btnCaption = 'Edit';

    if(isEditing){
        editablePlayerNamee = <input type='text' required value={name}/>;
        //btnCaption = 'Save'
    }
    return(
        <li>
            <span className='player'>
                {playerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing? 'Save':'Edit'}</button>
        </li>
    );
}