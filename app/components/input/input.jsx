import React, { useContext } from 'react';

import MessengerContext from '../messenger/context';

const Input = () => {
    const { createMessage, message } = useContext(MessengerContext);

    const changeHandler = (event) => {
        createMessage({
            message: event.target.value
        })
    }

    return (
        <div>
            <textarea name="" id="" cols="30" rows="10" placeholder="Message" value={message.message} onChange={changeHandler} ></textarea>
        </div>

    );
}

export default Input;