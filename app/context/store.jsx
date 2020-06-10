import React, { createContext, useReducer } from 'react';
import { cartReducer } from '../reducers/cart'
import { productsReducer } from '../reducers/products'
import { addToCart } from '../actions/cart';
import { getProducts } from '../actions/products';

export const StoreContext = createContext({});

export const StoreProvider = (props) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, { cart: [] });
    const [productsState, productsDispatch] = useReducer(productsReducer, { products: [] });

    return (
        <StoreContext.Provider value={{
            cart: cartState.cart,
            products: productsState.products,
            addToCart: addToCart(cartDispatch),
            getProducts: getProducts(productsDispatch)
        }}>
            {props.children}
        </StoreContext.Provider>
    );
}
