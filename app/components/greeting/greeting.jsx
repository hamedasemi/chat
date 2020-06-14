import React, { useContext } from 'react';

import styles from './greeting.css';

import MessengerContext from '../messenger/context';

const Greeting = () => {
    const { name } = useContext(MessengerContext);

    return (
        <div className={name ? styles.greeting : styles.greetingNone}>
            <h1>Welcome {name}</h1>
        </div>
    );
}

export default Greeting;