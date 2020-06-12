import React, { useContext } from 'react';

import { MessengerContext } from '../messenger/messenger';

const Send = () => {
    const { sendMessage, message } = useContext(MessengerContext);

    const clickHandler = () => {
        sendMessage(message);
    }

    return (
        <div>
            <button onClick={clickHandler}>Send</button>
        </div>

    );
}

export default Send;