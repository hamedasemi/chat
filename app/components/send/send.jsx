import React, { useContext, useEffect } from 'react';

import styles from './send.css';

import MessengerContext from '../messenger/context';

const Send = () => {
    const { sendMessage, message, sendingMessage, name, receiveMessage } = useContext(MessengerContext);

    const clickHandler = () => {
        sendMessage(message);
        
    }

    useEffect(()=>{
        receiveMessage();
    },[])

    return (
        <div className={name ? styles.send : styles.sendNone}>
            <button onClick={clickHandler}>
                <span className={sendingMessage ? styles.sending : ''}>Send</span>
                <span className={sendingMessage ? '' : styles.sending}>Sending</span>
            </button>
        </div>

    );
}

export default Send;