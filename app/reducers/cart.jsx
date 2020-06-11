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
        case 'REMOVE_FROM_CART':
            state.cart.map((product) => {
                if (product.id === action.productId) {
                    if (product.quantity > 1) {
                        product.quantity--;
                    }
                    else {
                        state.cart = state.cart.filter((product)=>{
                            return product.id !== action.productId
                        })
                    }
                }
            })
            return { ...state }
        default:
            return state
    }
}