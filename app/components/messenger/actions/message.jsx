import { SEND_MESSAGE, RECEIVE_MESSAGE, CREATE_MESSAGE } from '../constatnts';

export const sendMessage = (dispatch) => (payload) => {
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