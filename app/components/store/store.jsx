import React, { createContext, useReducer } from 'react';

import { addToCart, removeFromCart } from './actions/cart';
import { getProducts } from './actions/products';

import { cartReducer } from './reducers/cart'
import { productsReducer } from './reducers/products'

export const StoreContext = createContext();

export const Store = (props) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, { cart: [] });
    const [productsState, productsDispatch] = useReducer(productsReducer, { products: [], loading: false });

    return (
        <StoreContext.Provider value={{
            cart: cartState.cart,
            products: productsState.products,
            loading: productsState.loading,
            addToCart: addToCart(cartDispatch),
            removeFromCart: removeFromCart(cartDispatch),
            getProducts: getProducts(productsDispatch)
        }}>
            {props.children}
        </StoreContext.Provider>
    );
}
