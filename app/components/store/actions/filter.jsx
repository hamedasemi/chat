import { FILTER } from '../constatnts';

export const filter = (dispatch) => (sort, payload) => {
    dispatch({
        type: FILTER,
        sort: sort,
        payload: payload
    })
}