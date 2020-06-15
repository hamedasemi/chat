import io from 'socket.io-client';

import {
    CREATE_NAME,
    SET_PERSON,
    SET_NAME,
    RECEIVE_MESSAGE,
    CREATE_MESSAGE,
    SET_SENDING_MESSAGE,
    UNSET_SENDING_MESSAGE
} from './constants';

let serverPath;

switch (window.location.port) {
    case '8080':
        serverPath = 'http://localhost:3000';
        break;
    case '':
        serverPath = 'https://hamed-chat-api.appspot.com'
        break;
    default:
        serverPath = '?????????';
        break;
}

const socket = io(serverPath, {
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

export const setPerson = (dispatch) => (payload) => {
    dispatch({
        type: SET_PERSON,
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
        let newpayload = {
            ...payload,
            id: id(),
            date: new Date().toDateString(),
            time: new Date().toTimeString()
        };
        socket.emit('send-message', newpayload, () => {
            dispatch({
                type: CREATE_MESSAGE,
                payload: { message: '' }
            })
        });
    }
}

export const receiveMessage = (dispatch) => () => {
    console.log('receiveMessage')
    socket.on('receive-message', (cbpayload) => {
        console.log('onreceiveMessage')
        dispatch({
            type: UNSET_SENDING_MESSAGE
        })
        dispatch({
            type: RECEIVE_MESSAGE,
            payload: cbpayload
        })
    });
}

export const createMessage = (dispatch) => (payload) => {
    dispatch({
        type: CREATE_MESSAGE,
        payload: payload
    })
}