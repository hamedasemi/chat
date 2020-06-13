import React, { useContext } from 'react';

import styles from './send.css';

import MessengerContext from '../messenger/context';

const Send = () => {
    const { sendMessage, message, sendingMessage } = useContext(MessengerContext);

    const clickHandler = () => {
        sendMessage(message);
    }

    return (
        <div>
            <button onClick={clickHandler}>
                <span className={sendingMessage ? styles.sending : ''}>Send</span>
                <span className={sendingMessage ? '' : styles.sending}>Sending</span>
            </button>
        </div>

    );
}

export default Send;