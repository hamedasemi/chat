import io from 'socket.io-client';

import { CREATE_NAME, SET_NAME, SEND_MESSAGE, RECEIVE_MESSAGE, CREATE_MESSAGE } from './constants';

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

export const sendMessage = (dispatch) => (payload) => {
    if (payload.message) {
        payload = {
            ...payload,
            id: id(),
            date: new Date().toDateString(),
            time: new Date().toTimeString()
        };
        socket.emit('message', payload, (callbackPayload) => {
            // createMessage(dispatch)({ message: '' })
            dispatch({
                type: CREATE_MESSAGE,
                payload: { message: '' }
            })
            dispatch({
                type: SEND_MESSAGE,
                payload: callbackPayload
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