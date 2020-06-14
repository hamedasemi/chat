import React, { useContext, useState } from 'react';

import styles from './name.css';

import MessengerContext from '../messenger/context';

const Name = () => {
    const [localName, setLocalName] = useState('');
    const { setName, name } = useContext(MessengerContext);

    const changeHandler = ({ target: { value } }) => {
        setLocalName(value);
    }

    const clickHandler = () => {
        setName(localName);
        setLocalName('');
    }

    return (
        <div className={name ? styles.nameNone : styles.name}>
            <input type="text" placeholder="Pick a name" value={localName} onChange={changeHandler} />
            <button onClick={clickHandler}>SET</button>
        </div>
    );
}

export default Name;