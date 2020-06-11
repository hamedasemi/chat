import { SEARCH_TERM, SEARCH_SORT } from '../constatnts';

export const searchReducer = (state, action) => {
    switch (action.type) {
        case SEARCH_TERM:
            return action.payload
        case SEARCH_SORT:
            return action.payload
        default:
            return state
    }
}