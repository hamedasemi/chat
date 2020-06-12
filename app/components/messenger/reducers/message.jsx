import { SEND_MESSAGE, RECEIVE_MESSAGE, CREATE_MESSAGE } from '../constatnts';

export const messageReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return { ...state, sentMessages: [...action.payload] }
        case RECEIVE_MESSAGE:
            return { ...state, receivedMessages: [...action.payload] }
        case CREATE_MESSAGE:
            return { ...state, message: action.payload }
        default:
            return state
    }
}