import React, { useContext } from 'react';

import styles from './greeting.css';

import MessengerContext from '../messenger/context';

const Greeting = () => {
    const { person } = useContext(MessengerContext);

    return (
        <div className={person.name ? styles.greeting : styles.greetingNone}>
            <h1>Welcome {person.name}</h1>
        </div>
    );
}

export default Greeting;