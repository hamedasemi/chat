import React, { useContext } from 'react';

import styles from './input.css';

import MessengerContext from '../messenger/context';

const Input = () => {
    const { createMessage, message, person } = useContext(MessengerContext);

    const changeHandler = (event) => {
        createMessage({
            message: event.target.value,
            person: person
        })
    }

    return (
        <div className={person.name ? styles.input : styles.inputNone}>
            <input placeholder="Message" value={message.message} onChange={changeHandler} />
        </div>

    );
}

export default Input;