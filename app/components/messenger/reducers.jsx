import { SET_NAME, CREATE_NAME, SEND_MESSAGE, RECEIVE_MESSAGE, CREATE_MESSAGE } from './constants';

export const reducer = (state, action) => {
    switch (action.type) {
        case SET_NAME:
            return { ...state, name: action.payload }
        case CREATE_NAME:
            return { ...state, name: action.payload }
        case SEND_MESSAGE:
            return { ...state, messages: [...state.messages, action.payload] }
        case RECEIVE_MESSAGE:
            return { ...state, messages: [...state.messages, action.payload] }
        case CREATE_MESSAGE:
            return { ...state, message: action.payload }
        default:
            return state
    }
}