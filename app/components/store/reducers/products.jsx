import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_LOADING } from '../constatnts';

export const productsReducer = (state, action) => {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            return { ...state, products: [...action.data], loading: false }
        case GET_PRODUCTS_LOADING:
            return { ...state, loading: true }
        default:
            return state
    }
}