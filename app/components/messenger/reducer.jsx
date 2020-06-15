import { SET_PERSON, CREATE_NAME, SEND_MESSAGE, RECEIVE_MESSAGE, CREATE_MESSAGE, SET_SENDING_MESSAGE, UNSET_SENDING_MESSAGE } from './constants';

export const reducer = (state, action) => {
    switch (action.type) {
        case SET_PERSON:
            return { ...state, person: action.payload }
        case CREATE_NAME:
            return { ...state, name: action.payload }
        case SEND_MESSAGE:
            return { ...state, messages: [...state.messages, action.payload] }
        case RECEIVE_MESSAGE:
            return { ...state, messages: [...state.messages, action.payload] }
        case CREATE_MESSAGE:
            return { ...state, message: action.payload }
        case SET_SENDING_MESSAGE:
            return { ...state, sendingMessage: true }
        case UNSET_SENDING_MESSAGE:
            return { ...state, sendingMessage: false }
        default:
            return state
    }
}