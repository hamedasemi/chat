import React, { useContext } from 'react';

import { MessengerContext } from '../messenger/messenger';

const Name = () => {
    const { createName, name, setName } = useContext(MessengerContext);

    const changeHandler = (event) => {
        createName(event.target.value);
    }
    
    const clickHandler = () => {
        setName(name);
    }

    return (
        <div>
            <input type="text" placeholder="Name" value={name} onChange={changeHandler}/>
            <button onClick={clickHandler}>SET</button>
        </div>

    );
}

export default Name;