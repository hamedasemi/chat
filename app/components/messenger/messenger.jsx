import React, { useReducer, useMemo } from 'react';

import { sendMessage, receiveMessage, createMessage, createName, setName, setPerson } from './actions';
import { reducer } from './reducer';
import MessengerContext from './context';

const messages = [];

const persons = [
    { id: 'svyatoslav-taushev', name: 'Svyatoslav Taushev', avatar: 'svyatoslav-taushev' },
    { id: 'Miriam-de-jesus', name: 'Miriam de Jesus', avatar: 'Miriam-de-jesus' },
    { id: 'ashley-graham', name: 'Ashley Graham', avatar: 'ashley-graham' },
    { id: 'chikanso-chima', name: 'Chikanso Chima', avatar: 'chikanso-chima' },
    { id: 'regina-pollastro', name: 'Regina Pollastro', avatar: 'regina-pollastro' },
    { id: 'dusana-semenov', name: 'Dusana Semenov', avatar: 'dusana-semenov' },
    { id: 'neeshaan-el-pasha', name: 'Neeshaan El Pasha', avatar: 'neeshaan-el-pasha' },
    { id: 'maazina-el-bacchus', name: 'Maazina El Bacchus', avatar: 'maazina-el-bacchus' },
    { id: 'mok-kwang-hyun', name: 'Mok Kwang-Hyun', avatar: 'mok-kwang-hyun' },
    { id: 'chakrikajoyanto', name: 'Chakrika Joyanto', avatar: 'chakrikajoyanto' },
    { id: 'frank-boehm', name: 'Frank Boehm', avatar: 'frank-boehm' },
    { id: 'mathijn-agter', name: 'Mathijn Agter', avatar: 'mathijn-agter' },
    { id: 'tatiana-gagelman', name: 'Tatiana Gagelman', avatar: 'tatiana-gagelman' },
    { id: 'peter-taylor', name: 'Peter Taylor', avatar: 'peter-taylor' },
    { id: 'farhad-tarokh', name: 'Farhad Tarokh', avatar: 'farhad-tarokh' },
    { id: 'grigoriy-kozhukhov', name: 'Grigoriy Kozhukhov', avatar: 'grigoriy-kozhukhov' }
]
export const Messenger = (props) => {
    const [state, dispatch] = useReducer(reducer, {
        persons: persons,
        person: { id: '', name: '', avatar: '' },
        name: '',
        messages: messages,
        message: { message: '', id: null, date: null, time: null, name: '', person: { id: '', name: '', avatar: '' } },
        sendingMessage: false
    });

    const value = useMemo(() => {
        return {
            name: state.name,
            message: state.message,
            messages: state.messages,
            persons: state.persons,
            person: state.person,
            sendingMessage: state.sendingMessage,
            setName: setName(dispatch),
            setPerson: setPerson(dispatch),
            createName: createName(dispatch),
            createMessage: createMessage(dispatch),
            sendMessage: sendMessage(dispatch),
            receiveMessage: receiveMessage(dispatch)
        }
    }, [state, dispatch]);

    return (
        <MessengerContext.Provider value={value}>
            {props.children}
        </MessengerContext.Provider>
    );
}

export default Messenger;