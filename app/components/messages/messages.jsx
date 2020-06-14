import React, { useContext } from 'react';

import styles from './messages.css';

import MessengerContext from '../messenger/context';

const Messages = () => {
    const { messages, name } = useContext(MessengerContext);

    return (
        <div className={name ? styles.messages : styles.messagesNone}>
            <div>
                {messages.map((message) => {
                    return <div key={message.id}><b>{message.name}: </b>{message.message} {message.date} {message.time}</div>;
                })}
            </div>
        </div>

    );
}

export default Messages;