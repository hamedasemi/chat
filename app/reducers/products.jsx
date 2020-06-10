export const productsReducer = (state, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS_SUCCESS':
            return { ...state, products: [...action.data] }
        default:
            return state
    }
}