import io from 'socket.io-client';

import {
    CREATE_NAME,
    SET_NAME,
    SEND_MESSAGE,
    RECEIVE_MESSAGE,
    CREATE_MESSAGE,
    SET_SENDING_MESSAGE,
    UNSET_SENDING_MESSAGE
} from './constants';

const socket = io('http://localhost:3000', {
    transportOptions: {
        polling: {
            extraHeaders: {
                'Authorization': 'abcd'
            }
        }
    }
});

const id = () => {
    return btoa(new Date().valueOf() + Math.random().toString(36).substr(2, 10));
}

export const createName = (dispatch) => (payload) => {
    dispatch({
        type: CREATE_NAME,
        payload: payload
    })
}

export const setName = (dispatch) => (payload) => {
    dispatch({
        type: SET_NAME,
        payload: payload
    })
}

export const setSendingMessage = (dispatch) => () => {
    dispatch({
        type: SET_SENDING_MESSAGE
    })
}

export const unsetSendingMessage = (dispatch) => () => {
    dispatch({
        type: UNSET_SENDING_MESSAGE
    })
}

export const sendMessage = (dispatch) => (payload) => {
    if (payload.message) {
        dispatch({
            type: SET_SENDING_MESSAGE
        })
        payload = {
            ...payload,
            id: id(),
            date: new Date().toDateString(),
            time: new Date().toTimeString()
        };
        socket.emit('message', payload, (callbackPayload) => {
            dispatch({
                type: CREATE_MESSAGE,
                payload: { message: '' }
            })
            dispatch({
                type: SEND_MESSAGE,
                payload: callbackPayload
            })
            dispatch({
                type: UNSET_SENDING_MESSAGE
            })
        });
    }
}

export const receiveMessage = (dispatch) => (payload) => {
    dispatch({
        type: RECEIVE_MESSAGE,
        payload: payload
    })
}

export const createMessage = (dispatch) => (payload) => {
    dispatch({
        type: CREATE_MESSAGE,
        payload: payload
    })
}