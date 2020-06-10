import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from './context/store'
import Products from './components/products'
import Cart from './components/cart'

const App = () => {

    return (
        <StoreProvider>
            <Cart></Cart>
            <Products></Products>
        </StoreProvider>
    )
}

ReactDOM.render(<App></App>, document.getElementById('root'));