import { ADD_TO_CART, REMOVE_FROM_CART } from '../constatnts';

export const addToCart = (dispatch) => (product) => {
    dispatch({
        type: ADD_TO_CART,
        product: product
    })
}

export const removeFromCart = (dispatch) => (productId) => {
    dispatch({
        type: REMOVE_FROM_CART,
        productId: productId
    })
}