import React, { useContext } from 'react';

import styles from './input.css';

import MessengerContext from '../messenger/context';

const Input = () => {
    const { createMessage, message, name } = useContext(MessengerContext);

    const changeHandler = (event) => {
        createMessage({
            message: event.target.value,
            name: name
        })
    }

    return (
        <div className={name ? styles.input : styles.inputNone}>
            <input placeholder="Message" value={message.message} onChange={changeHandler} />
        </div>

    );
}

export default Input;