import { SEARCH_TERM, SEARCH_SORT } from '../constatnts';

export const searchTerm = (dispatch) => (payload) => {
    dispatch({
        type: SEARCH_TERM,
        payload: payload
    })
}

export const searchSort = (dispatch) => (payload) => {
    dispatch({
        type: SEARCH_SORT,
        payload: payload
    })
}