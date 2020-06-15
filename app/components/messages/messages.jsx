import React, { useContext, useRef, useEffect } from 'react';

import styles from './messages.css';

import MessengerContext from '../messenger/context';

const Messages = () => {
    const { messages, person } = useContext(MessengerContext);
    const messagesRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            messagesRef.current.scroll(0, messagesRef.current.scrollHeight);
        }, 100);
    }, [messages]);

    return (
        <div className={person.name ? styles.messages : styles.messagesNone} ref={messagesRef}>
            {messages.map((message) => {
                return <div key={message.id} className={`${styles.message} ${person.name === message.person.name ? styles.end : styles.start}`}>
                    <img className={styles.avatar} style={person.name === message.person.name ? { order: "2" } : { order: "1" }} src={`/assets/avatars/${message.person.avatar}.png`} alt="" />
                    <div style={person.name === message.person.name ? { order: "1" } : { order: "2" }} >{message.message}</div>
                </div>;
            })}
        </div>

    );
}

export default Messages;