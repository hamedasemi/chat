import io from 'socket.io-client';

import { SEND_MESSAGE, RECEIVE_MESSAGE, CREATE_MESSAGE } from '../constatnts';

const socket = io('http://localhost:3000');

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export const sendMessage = (dispatch) => (payload) => {

    payload = {
        ...payload, id: makeid(10),
        date: new Date().toDateString(),
        time: new Date().toTimeString()
    }

    socket.emit('message', payload);

    dispatch({
        type: SEND_MESSAGE,
        payload: payload
    })
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