import React, { useContext } from 'react';

import styles from './input.css';

import MessengerContext from '../messenger/context';

const Input = () => {
    const { createMessage, message, person, sendMessage } = useContext(MessengerContext);

    const changeHandler = (event) => {
        createMessage({
            message: event.target.value,
            person: person
        })
    }

    const keyPressHandler = (event) => {
        if (event.which === 13) {
            sendMessage(message);
        }
    }

    return (
        <div className={person.name ? styles.input : styles.inputNone}>
            <input placeholder="Message" value={message.message} onChange={changeHandler} onKeyPress={keyPressHandler} />
        </div>

    );
}

export default Input;