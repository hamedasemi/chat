import React, { useContext } from 'react';

import MessengerContext from '../messenger/context';

const Send = () => {
    const { sendMessage, message } = useContext(MessengerContext);

    const clickHandler = () => {
        console.log(message)
        sendMessage(message);
    }

    return (
        <div>
            <button onClick={clickHandler}>Send</button>
        </div>

    );
}

export default Send;