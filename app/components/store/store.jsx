import React, { createContext, useReducer } from 'react';

import { addToCart, removeFromCart } from './actions/cart';
import { getProducts } from './actions/products';
import { searchTerm, searchSort } from './actions/search';
import { filter } from './actions/filter';

import { cartReducer } from './reducers/cart';
import { productsReducer } from './reducers/products';
import { searchReducer } from './reducers/search';
import { filterReducer } from './reducers/filter';

export const StoreContext = createContext();

export const Store = (props) => {

    const [cartState, cartDispatch] = useReducer(cartReducer, { cart: [] });
    const [productsState, productsDispatch] = useReducer(productsReducer, { products: [], loading: false });
    const [searchState, searchDispatch] = useReducer(searchReducer, { term: '', sort: '' });
    const [filterState, filterDispatch] = useReducer(filterReducer, { products: [] });

    const value = {
        cart: cartState.cart,
        products: productsState.products,
        loading: productsState.loading,
        term: searchState.term,
        sort: searchState.sort,
        filteredProducts: filterState.products,
        addToCart: addToCart(cartDispatch),
        removeFromCart: removeFromCart(cartDispatch),
        getProducts: getProducts(productsDispatch),
        searchTerm: searchTerm(searchDispatch),
        searchSort: searchSort(searchDispatch),
        filter: filter(filterDispatch)
    };

    return (
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    );
}
