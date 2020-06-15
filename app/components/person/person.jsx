import React, { useContext } from 'react';

import styles from './person.css';

import MessengerContext from '../messenger/context';

const Person = ({ person }) => {
    const { setPerson } = useContext(MessengerContext);
    const clickHandler = ()=>{
        setPerson(person)
    }

    return <div onClick={clickHandler} className={styles.person}>
        <img src={`/assets/avatars/${person.avatar}.png`} alt="" />
        <div>{person.name}</div>
    </div>
}

export default Person;