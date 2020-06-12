import React, { useContext } from 'react';

import { MessengerContext } from '../messenger/messenger';

const Messages = () => {
    const { messages } = useContext(MessengerContext);

    return (
        <div>
            <div>
                {messages.map((message) => {
                    return <div key={message.id}>{message.message} {message.date} {message.time}</div>;
                })}
            </div>
        </div>

    );
}

export default Messages;