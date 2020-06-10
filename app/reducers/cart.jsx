export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            if (state.cart.some((product) => product.id === action.product.id)) {
                state.cart.map((product) => {
                    if (product.id === action.product.id) {
                        product.quantity++;
                    }
                })
                return { ...state }
            } else {
                return { ...state, cart: [...state.cart, { ...action.product, quantity: 1 }] }
            }
        default:
            return state
    }
}