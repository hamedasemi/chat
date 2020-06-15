import React, { useContext, useRef, useEffect } from 'react';

import styles from './input.css';

import MessengerContext from '../messenger/context';

const Input = () => {
    const { createMessage, message, person, sendMessage, receiveMessage, sendingMessage } = useContext(MessengerContext);
    const inputRef = useRef();

    const changeHandler = (event) => {
        createMessage({
            message: event.target.value,
            person: person
        })
    }

    const clickHandler = () => {
        sendMessage(message);
    }

    useEffect(()=>{
        receiveMessage();
    },[])

    const keyPressHandler = (event) => {
        if (event.which === 13) {
            sendMessage(message);
        }
    }

    useEffect(()=>{
        setTimeout(() => {
            inputRef.current.focus();
        }, 100);
    }, [person]);

    return (
        <div className={person.name ? styles.input : styles.inputNone}>
            <input className={styles.inputText} ref={inputRef} placeholder="Message" value={message.message} onChange={changeHandler} onKeyPress={keyPressHandler} />
            <button onClick={clickHandler} className={styles.button}>
                <span className={sendingMessage ? styles.sending : ''}>Send</span>
                <span className={sendingMessage ? '' : styles.sending}>Sending</span>
            </button>
        </div>

    );
}

export default Input;