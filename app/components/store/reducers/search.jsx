import { SEARCH_TERM, SEARCH_SORT } from '../constatnts';

export const searchReducer = (state, action) => {
    switch (action.type) {
        case SEARCH_TERM:
            return { ...state, term: action.payload }
        case SEARCH_SORT:
            return { ...state, sort: action.payload }
        default:
            return state
    }
}