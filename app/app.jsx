import React from 'react';
import ReactDOM from 'react-dom';

import { Store } from './components/store/store';
import Products from './components/products/products';
import Cart from './components/cart/cart';

const App = () => {

    return (
        <Store>
            <Cart></Cart>
            <Products></Products>
        </Store>
    )
}

ReactDOM.render(<App></App>, document.getElementById('root'));