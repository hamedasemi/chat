import React, { createContext, useReducer } from 'react';

import { sendMessage, receiveMessage, createMessage, createName, setName } from './actions/action';

import { reducer } from './reducers/reducer';

export const MessengerContext = createContext();

export const Messenger = (props) => {
    const [state, dispatch] = useReducer(reducer, { name: '', messages: [], message: { message: '', id: null, date: null, time: null } });
    
    const value = {
        name: state.name,
        message: state.message,
        messages: state.messages,
        setName: setName(dispatch),
        createName: createName(dispatch),
        createMessage: createMessage(dispatch),
        sendMessage: sendMessage(dispatch),
        receiveMessage: receiveMessage(dispatch)
    };

    return (
        <MessengerContext.Provider value={value}>
            {props.children}
        </MessengerContext.Provider>
    );
}
