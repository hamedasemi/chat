import React, { useContext } from 'react';

import styles from './typing.css';

import MessengerContext from '../messenger/context';
import TypingIndicator from '../typing-indicator/typing-indicator';

const Typing = () => {
    const { typing, person } = useContext(MessengerContext);

    return (

        typing.name && person.id !== typing.id ? <div className={person.name ? styles.typing : styles.typingNone} div>
            <img className={styles.avatar} src={`/assets/avatars/${typing.avatar}.png`} alt="" />
            <TypingIndicator></TypingIndicator>
        </div> : ''

    );
}

export default Typing;