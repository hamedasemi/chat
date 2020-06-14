import React, { useReducer, useMemo } from 'react';

import { sendMessage, receiveMessage, createMessage, createName, setName } from './actions';
import { reducer } from './reducer';
import MessengerContext from './context';

export const Messenger = (props) => {
    const [state, dispatch] = useReducer(reducer, { name: '', messages: [], message: { message: '', id: null, date: null, time: null, name: '' }, sendingMessage: false });

    const value = useMemo(() => {
        return {
            name: state.name,
            message: state.message,
            messages: state.messages,
            sendingMessage: state.sendingMessage,
            setName: setName(dispatch),
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