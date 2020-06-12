import React, { createContext, useReducer } from 'react';

import { sendMessage, receiveMessage, createMessage } from './actions/message';

import { messageReducer } from './reducers/message';

export const MessengerContext = createContext();

export const Messenger = (props) => {
    const [messageState, messageDispatch] = useReducer(messageReducer, { sentMessages: [], receivedMessages: [], message: '' });

    const value = {
        message: messageState.message,
        sentMessages: messageState.sentMessages,
        receivedMessages: messageState.receivedMessages,
        createMessage: createMessage(messageDispatch),
        sendMessage: sendMessage(messageDispatch),
        receiveMessage: receiveMessage(messageDispatch)
    };

    return (
        <MessengerContext.Provider value={value}>
            {props.children}
        </MessengerContext.Provider>
    );
}
