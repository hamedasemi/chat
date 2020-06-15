import React, { useContext } from 'react';

import styles from './persons.css';

import Person from '../person/person'

import MessengerContext from '../messenger/context';

const Persons = () => {
    const { persons, person } = useContext(MessengerContext);

    return (
        <div className={person.name ? styles.personsNone : styles.persons}>
            {persons.map((person) => {
                return <Person key={person.id} person={person}></Person>
            })}
        </div>
    );
}

export default Persons;