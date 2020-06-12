import React, { useContext } from 'react';

import { MessengerContext } from '../messenger/messenger';

const Messages = () => {
    const { sentMessages, receivedMessages } = useContext(MessengerContext);
    
    return (
        <div>
            <div>
                {sentMessages.map((sentMessage, index) => {
                    return <div key={index}>{sentMessage}</div>;
                })}
            </div>
            <div>
                {receivedMessages.map((receivedMessage, index) => {
                    return <div key={index}>{receivedMessage}</div>;
                })}
            </div>
        </div>

    );
}

export default Messages;