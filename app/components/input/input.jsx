import React, { useContext } from 'react';

import { MessengerContext } from '../messenger/messenger';

const Input = () => {
    const { createMessage, message } = useContext(MessengerContext);

    const changeHandler = (event) => {
        createMessage(event.target.value);
    }

    return (
        <div>
            <input type="text" value={message} onChange={changeHandler} />
        </div>

    );
}

export default Input;