export const addToCart = (dispatch) => (product) => {
    dispatch({
        type: 'ADD_TO_CART',
        product: product
    })
}