import { SET_PERSON, SEND_MESSAGE, RECEIVE_MESSAGE, CREATE_MESSAGE, SET_SENDING_MESSAGE, UNSET_SENDING_MESSAGE, TYPING } from './constants';

export const reducer = (state, action) => {
    switch (action.type) {
        case SET_PERSON:
            return { ...state, person: action.payload }
        case SEND_MESSAGE:
            return { ...state, messages: [...state.messages, action.payload] }
        case RECEIVE_MESSAGE:
            return { ...state, messages: [...state.messages, action.payload], typing: { name: '', id: '' } }
        case CREATE_MESSAGE:
            return { ...state, message: action.payload }
        case SET_SENDING_MESSAGE:
            return { ...state, sendingMessage: true }
        case UNSET_SENDING_MESSAGE:
            return { ...state, sendingMessage: false }
        case TYPING:
            return { ...state, typing: action.payload }
        default:
            return state
    }
}