import React, { createContext, useReducer } from 'react';

import { addToCart, removeFromCart } from './actions/cart';
import { getProducts } from './actions/products';
import { searchTerm, searchSort } from './actions/search';

import { cartReducer } from './reducers/cart';
import { productsReducer } from './reducers/products';
import { searchReducer } from './reducers/search';

export const StoreContext = createContext();

export const Store = (props) => {

    const [cartState, cartDispatch] = useReducer(cartReducer, { cart: [] });
    const [productsState, productsDispatch] = useReducer(productsReducer, { products: [], loading: false });
    const [searchState, searchDispatch] = useReducer(searchReducer, { term: '', sort: '' });

    const value = {
        cart: cartState.cart,
        products: productsState.products,
        loading: productsState.loading,
        term: searchState.term,
        sort: searchState.sort,
        addToCart: addToCart(cartDispatch),
        removeFromCart: removeFromCart(cartDispatch),
        getProducts: getProducts(productsDispatch),
        searchTerm: searchTerm(searchDispatch),
        searchSort: searchSort(searchDispatch)
    };

    return (
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    );
}
